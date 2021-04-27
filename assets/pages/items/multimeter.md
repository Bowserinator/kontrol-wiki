{
    "item": {
        "durability": "Basic: 8<br>Advanced: 16<br>Elite: 24<br>Ultimate: 40<br>Omni: ∞",
        "renewable": "<b>Omni:</b> No<br><b>Others:</b> Yes",
        "stackable": 0
    },
    "title": "Multimeter"
}
-=-|CONFIG_ABOVE|-=-


# Multimeter

<ModInfoCard :itemData="item" :title="title" />


## Description

Multimeters are tools used for measuring component / circuit information.

Multimeters will become damaged over time if used to mine or hit mobs. Damaged multimeters will have random characters
in the output be "corrupted" and unreadable depending on the damage level.

Multimeters cannot be enchanted or repaired.


## Crafting Recipe


```
some code
```

## Measurements

Multimeters can measure the following types of data. Note all measurements are component-dependent; different components
may return different results. Not all results may be used; for example, even if the multimeter can measure polarity, the component doesn't have 
to return a polarity result to display.

In general, polarized components (2 nodes) will return the voltage and current across the two nodes, while multi-node components
such as wires will only return the absolute voltage at the center node.

|Data|Description|
|---|---|
|**ABS_VOLTAGE**|Absolute voltage, measured relative to a ground node|
|**CURRENT** |Current through the component|
|**TEMPERATURE**|Temperature of the component|
|**DELTA_V**|Voltage across the component|
|**POWER**|Power dissipated by the component|
|**POLARITY**|For polarized components, which side (N/S/W/E) is + / -|
|**MISC**|Misc component-specific information|
|**NODAL**|Absolute voltages of all nodes (creative only)|
|**NAME**|Class name of component (creative only)|

The different multimeters can measure the following:

|Multimeter|abs(V)|Current |°C  |ΔV |Power|Polarity|Misc|Color|<span style="color:#d57ffa">Nodal Voltages<sup>*</sup></span>|<span style="color:#d57ffa">Class name<sup>*</sup></span>|
|----------|------|---|---|---|---|--------|----|-----|-------|----------|
|Basic     |**✓**     |   |   | **✓** |   |        |    |     |       |          |
|Advanced  |**✓**     | **✓** |   | **✓** | **✓** |  **✓**     |    |   **✓** |       |          |
|<span style="color:yellow">Elite</span>     |**✓**     | **✓** | **✓** | **✓** | **✓** |  **✓**     |    |   **✓** |       |          |
|<span style="color:#7fd1fa">Ultimate</span>    |**✓**     | **✓** | **✓** | **✓** | **✓** |  **✓**     | **✓**  |   **✓** |       |          |
|<span style="color:#d57ffa">Omni</span>      |**✓**     | **✓** | **✓** | **✓** | **✓** |  **✓**     | **✓**  |   **✓** |   **✓**   |    **✓**     |

<small>*Creative only</small>


## Data Values

### ID
| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) | Form | Translation Key |
| --- | --- | --- | --- |
| Basic Multimeter| `kontrol:basic_multimeter` | Item | `item.kontrol.basic_multimeter` |
| Advanced Multimeter| `kontrol:advanced_multimeter` | Item | `item.kontrol.advanced_multimeter` |
| Elite Multimeter| `kontrol:elite_multimeter` | Item | `item.kontrol.elite_multimeter` |
| Ultimate Multimeter| `kontrol:ultimate_multimeter` | Item | `item.kontrol.ultimate_multimeter` |
| Omnimeter| `kontrol:omnimeter` | Item | `item.kontrol.omnimeter` |


## Trivia

- The basic multimeter is an analog multimeter
- Unlike many real digital multimeters, there's no ohmmeter function
- Real multimeters require power and measure voltage differences across two points