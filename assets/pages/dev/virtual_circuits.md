{}
-=-|CONFIG_ABOVE|-=-
# Virtual Circuits

This page contains detailed dev notes on virtual circuits, which are the abstract mathematical representations of the Minecraft world the mod uses to simulate circuits. This simulation is translated back and forth between the Minecraft world.

Virtual circuits are solved using MNA (Modified Nodal Analysis), with numeric integration for components like capacitors and inductors, and support for iterative solving for components like diodes.





## Adding a component

The component has its virtual circuit set to this, and components are added to the following variables.

- `components` : An array of all components

- `nodeMap`: A map of node id => array of components with this node. Both `nodeMap[node1]` and `nodeMap[node2]` will have the component added.

- `conditionComponentMap`: A map of [type of solve condition (KCL, voltage, fixed, etc...)] => array of components. A component can belong to multiple solve conditions which are of type `VirtualCondition.Condition`.

- `uniqueNodes`:  A set of all nodes. All nodes of the component are added.

- `requiresTickComponents:`  If component requires ticking, it will be added to this arraylist.

- `nonLinearComponents`:  If component is non-linear, it will be added to this for post-solving in `recomputeSpecialCases()`. This currently only applies to diodes.

    

In addition:

- If the component is a fixed voltage point, the circuit will know auto-ground assignment is not necessary.

- If the component is an energy source, `energySourceCount` will be incremented

    



## Solving Process

### Pre-solving

**No energy source:**  If the circuit does not contain an energy source, all nodal voltages will be set to zero, as there exists nothing to cause any voltage differences.

**Not enough nodes:** If there is only one node we don't bother solving (not a meaningful circuit)

**Auto-ground assignment:**  If the circuit contains an energy source but no fixed node (for example, a ground node), a random energy source will have it's negative terminal assigned to ground. This is so circuits which should be possible in real life such as a resistor across a battery cannot be solved since there's no explicitly defined ground node.

**Diode check:**  When solving diodes, check if voltage across meets forward voltage and current is in correct direction. If the diode is not in the correct state, we toggle it and re-solve.



### Solving

The conductance (`matrix`) and source (`solutions`) matrices are constructed with the number of nodes required.

The conditions are placed into the matrices in this order. Note a component's condition may be overridden based on its properties (for example, a Hi-Z component will always be modelled as a resistor, regardless of what it actually is)



- **KCL Conditions:**  Anything that acts like a resistor. Non-resistor like elements are ignored for KCL purposes and will be amended later.

    HiZ components are modelled as a high value resistor, and steady state capacitors / inductors as a high or low value resistor. Note that steady state solving is not currently used.

    ![KCL](https://i.imgur.com/1KyRlqI.png)

    

- **Current Sources:**  If you perform KCL but ignore the current source, the difference is now the value of the current source:

    ![Current equations](https://i.imgur.com/xpmvzFm.png)

    Thus, we can just add the current source's value to the source matrix.

- **Voltage Differences:**  Ideal voltage sources. As we can only specify a nodal voltage difference, we create a supernode using the two nodes the voltage source is attached to:

    ![Equations](https://i.imgur.com/TQcb7nB.png)

    The first equation is simple, the difference in voltage is the voltage source's value. The 2nd equation is made by adding the original two KCL equations for N1 and N2. The original two KCL equations are replaced with these two new ones.

    The current through the voltage source is irrelevant as it cancels out when the two equations are added anyways, so it doesn't matter that the original equations didn't consider the current through the voltage source.

    

- **Fixed Nodes:**  Trivially easy equation, simply set the node ID = voltage. Set last since this is always solvable and shouldn't be overwritten by any other condition:

    ![Fixed node equation](https://i.imgur.com/kEqITPY.png)

    

Then using EJML the matrix is solved and nodal voltages returned.



### Post-solving

**Diode check:**  Diodes check if the voltage across them is larger than their forward voltage, and their high impedance state is set accordingly. If a re-computation is necessary, the circuit is resolved. This iteration can repeat for up to `settings.maxIterations` per solve attempt.





## Ticking (Advancing timestep)

All components in `requireTickComponents` will call their `tick()` function. See Simulation of Components below for more details. It is assumed the circuit will be ticked after being solved, or `solve()` will always return the same state.





## Component

A component stores the following:

- `node1`, `node2`: Two node ids it is connected to. This is set when adding to a circuit. For single node components, `node1 = node2`. More than two-node components are not supported in virtual circuit models.
- `circuit`:  The VirtualCircuit it belongs to
- `disabled`:  Has the component been disabled? This has different effects depending on the component:
    - **Voltage sources:** Voltage difference is set to 0
    - **Current sources:** Current value is set to 0
    - **Fixed nodes:** Nodal equation is ignored (Note: this may cause invalid matrices!)
    - **Custom:** Up to `component.modifyMatrix()`, no explicit handling of disabled case. The code for solving custom conditions is commented out by default.
    - **Other:** Disabling a component has no effect
- `hiZ`:  Is the component high impedance? If it is it will be modelled as a high value resistor instead.



Some methods describing it's properties must be defined for proper optimizations:

- `requireTicking()`:  If returns true, will be ticked every time the virtual circuit is.
- `doesNumericIntegration()`: Currently unused, but should be set in case of future optimizations
- `isNonLinear()`:  Used for iterative solving techniques coded in `recomputeSpecialCases()`, currently only used for diodes.
- `getEnergy()`:  For energy storing components, otherwise returns `VirtualCircuitConstants.UNKNOWN_ENERGY` by default.
- `initialUpdateEnergySourceCount()`:  Increment circuit energy source count on add here, if it's an energy source



## Simulation of Components

### Capacitors

Capacitors are dynamic current sources in parallel with a resistor (Norton equivalent of a voltage source in series, which saves a few extra nodes). They are updated using backwards Euler to integrate. While trapezoidal simulation is more accurate, it can lead to instability.

Resistance at initial state is very small to simulate at the very instant when the capacitor is uncharged, it acts as a short. Once ticked however, $R = dT / C$.[^1] The current source's value is $V_C / R$. 



#### Proof[^2]:

We know the equation of a capacitor is $\frac{dV}{dt} = -\frac{i_C}{C}$. We want to solve for the future, so we'll use [Backwards Euler](https://en.wikipedia.org/wiki/Backward_Euler_method) with $f(t, V)$ as the aforementioned equation.

Using backwards Euler definition, $V_{t+1} = V_{t} - dt \frac{i_{t+1}}{C}$ . If we solve for $i_{t+1}$, this equation becomes:

$\frac{C}{dT}V_{t} - \frac{C}{dT}V_{t+1} = i_{t+1}$

If we let $R = dt / C$ we can rewrite this as

$V_{t} / R - V_{t+1} / R = i_{t+1}$

We can imagine the $-V_{t+1} / R$ term as a resistor in the future, and the $V_t / R$ term as a constant current source in parallel. Let's imagine the circuit at $t+1$:

<img src="https://i.imgur.com/vTHdhDw.png" alt="Circuit" style="zoom:60%;" />

The total current from the capacitor equivalent circuit in the future matches up exactly with our backwards Euler equation. Note this future state only depends on the present voltage $V_t$, which is used in the value of the current source.



### Inductors

Inductors are dynamic current sources in parallel with a resistor. Like capacitors, backwards Euler is used.

Resistance at initial state is very large to simulate at the very instant when the inductor receives current it acts as an open circuit. Once ticked however, $R = I / dt$. [^1] The current source's value is $I - V_L / R$.



#### Proof[^2]:

The equation of an inductor is $-\frac{V}{L} = \frac{di}{dt}$. Using backwards Euler, as in the capacitor proof, we get $i_{t+1} = i_t - dt \frac{V_{t+1}}{L}$

Solving for $V_{t+1}$, we get $\frac{L}{dt}i_t - \frac{L}{dt}i_{t+1} = V_{t+1}$. 

If we let $R = \frac{L}{dt}$, we can rewrite this as

$V_{t+1} = (R)i_t - (R)i_{t+1}$. We can replace the $(R)i_t$ term with a voltage source of the same value, and it would not affect $V_{t+1}$. Thus so far, solving using the same method as the capacitor yields this circuit:

![Voltage circuit](https://i.imgur.com/f6vyeNg.png)

We can also use a current source instead. The total current out of the circuit below is still $i_t$, and the voltage across the entire circuit is still $V_t$, so the below circuit behaves equivalently.

![Current circuit](https://i.imgur.com/cRz1LuH.png)

[^1]: $dt$ is integration timestep defined in `VirtualCircuitConstants`
[^2]: See http://qucs.sourceforge.net/tech/node26.html for more information



### Diodes

Diodes are modelled as an ideal diode in series with a voltage source (non-ideal behaviors were deemed too expensive for a Minecraft mod).

![Diode](https://i.imgur.com/ZriJCnq.png)

The circuit is re-solved until a max iteration count is reached, or an equilibrium is reached. If a diode is OFF but the voltage across it is exceeds the forward voltage, it becomes ON. If a diode is ON but its current is reverse biased, it becomes OFF.



## Utility

Not all util methods are mentioned here, but some notable ones are:



#### getCurrentThrough(node1, node2)

Calculates the current through node1, node2. Current going in that direction is positive, opposite is negative. If there only exists a resistor(s) between those nodes, the current through is calculated via ohm's law and summed. Otherwise, all resistors in series at one of the two nodes will be summed. If no resistors are in series this will incorrectly return zero (see limitations, resistors and elements below).



#### getSteadyStateNodalVoltages()

Returns nodal voltages at steady state. Will solve for them if not cached, otherwise retrieves from cache. Not currently used.



## Limitations

### Quick limitations

- **Node IDs:**  All nodes must be used from 0, 1, 2... because it's assumed the node ID corresponds to a row or column index in the matrix, so having a higher node id will result in an index out of bounds, and a lower count will result in a singular matrix.

- **Double precision:**  Imagine we have a resistor of resistance `1e-99` and another with resistance `1` connected. When we do KCL we have an equation like `1e99 - 1`. Due to Java's double precision, we cannot actually store the result; thus the resulting answer is actually still `1e99`. This can turn a solvable matrix into an unsolvable one. 



### Resistors and elements

 Non-resistive elements must be wrapped by resistors (be connected to resistors on both sides in series) and cannot directly connect other non-resistive elements. Current sources are similar in that they must have a high value resistor in parallel.

The reason is two fold:

- It allows us to calculate the current through any element easily using ohm's law

- The matrix techniques we used make this assumption, and doing otherwise can make an invalid matrix

  ​    

There are also several bugs that can occur when this assumption doesn't hold:

- If a voltage source is directly connected to ground, the fixed node equation can overwrite the supernode equation for the voltage source (which would of course, make the equation unsolvable)

- If two current sources are joined in series without the parallel resistor, "impossible" states can occur (for example, a 1 A current source in series with a 2 A). Even if both current sources are the same value the resulting matrix may still be unsolvable.

  ​    

Finally, when we invalidate elements, we must set them as a high value resistor (to make them open) rather than remove them from the circuit. This prevents:

- Having to re-construct the matrix as nodal connections have changed
- Having floating nodes, ie imagine A, B, C are in series. If A and C are disabled, then B has two nodes going to nowhere, which is an unsolvable condition.



### Diode current

Diodes have a lower Hi-impedance impedance than other components like switches which should always override diodes (to avoid the voltage divider effect from being too noticeable). Thus some small current will leak through (which you may argue makes it somewhat more realistic).



## Optimizations

### Energy source count

The energy source count of a circuit must be kept up to date at all times. This optimization is that if a circuit does not have any energy sources, all nodal voltages must be zero (if at least one node is ground). When a component is added, it will be checked if it is an energy source, and total will be incremented accordingly. If a component changes its value, it should update the energy source count accordingly.

This includes changes in HiZ and disabled state. There is a protected helper method `updateEnergySourcesOnStateChange(...)` that automatically handles a transition case for most components. Other times energy source might be updated is when values are set (for example, `setVoltage()` or `setCurrent()`).

Capacitors and inductors are always considered energy sources to avoid dealing with any issues that could arise with constantly fluctuating energy sources.[^3]

[^3]: This claim hasn't been tested.



### Caches & maps

A lot of information is cached or stored in maps for easy lookup. See adding components for most of these. However, it's worthwhile removing  unnecessary data structures, especially when data is copied between them a lot. For example, it's recommended to modify the matrix directly rather than use intermediate data structures.



### What doesn't work

Using `unsafe_get` and `unsafe_set` for matrices doesn't have any noticeable performance impact. In theory, there is no need to bound check the matrices, but the regular `get` and `set` are used for now in case any bugs arise.



## Testing

Run the tests under the `tests` folder. Some tests need to be verified manually and it will always pass, so check the console for them (notably, the speed tests, RLC tests, precision tests and some of the edge case tests).

All tests pass at the time of writing. Note that changes in implementation may affect the precision for the results and can cause some for fail; use manual judgement in determining if the change is worth it.

The speed tests should be run one by one, the timing results are unreliable if run together.
