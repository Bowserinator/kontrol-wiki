{
    "img": "block/basic_led.png",
    "block": {
        "renewable": true,
        "stackable": 64,
        "tools": ["Pickaxe"],
        "blastResistance": 3.5,
        "hardness": 3.5,
        "luminant": 15,
        "luminantToggle": true,
        "transparent": true,
        "flammable": false,
        "catchesFireFromLava": false
    },
    "electrical": {
        "maxOperatingVoltage": "0 V",
        "thermalR": "0.0",
        "thermalC": "0.0"
    },
    "title": "Basic LED",
    "block_entity_data": [
        {
            "icon": "nbt/double.png",
            "title": "ForwardVoltage:",
            "text": "Forward voltage of the diode in volts"
        }
    ]
}
-=-|CONFIG_ABOVE|-=-


# Basic LED

<ModInfoCard :img="img" :blockData="block" :electricalData="electrical" :title="title" />


## Description

A Basic LED. Functions as a diode that emits light based on the relative current. Like all diodes, they only conduct current in one direction and drop the forward voltage across.

For basic LEDs, the brightness is approximately `600 * current` (current in amps, estimated from datasheets), and capped between 0 and 15 inclusive.

<WikiImage caption="Various LEDs" src="/img/led.png" :float="false" />

## LED Variants

Different variants have different colors and forward voltages:

|Color|Forward voltage (V)|Off color|On color|
|---|---|---|---|
|White|3.3|<div style="background-color: #aaa; width: 100%; height: 1em"></div>|<div style="background-color: #fff; width: 100%; height: 1em"></div>|
|Red  |1.7|<div style="background-color: #660000; width: 100%; height: 1em"></div>|<div style="background-color: #eb4d42; width: 100%; height: 1em"></div>|
|Green|2.2|<div style="background-color: #006600; width: 100%; height: 1em"></div>|<div style="background-color: #5be02f; width: 100%; height: 1em"></div>|
|Blue |3.5|<div style="background-color: #000066; width: 100%; height: 1em"></div>|<div style="background-color: #3030ff; width: 100%; height: 1em"></div>|
|Yellow|2.1|<div style="background-color: #666600; width: 100%; height: 1em"></div>|<div style="background-color: #ffe600; width: 100%; height: 1em"></div>|
|Purple|3.2|<div style="background-color: #660066; width: 100%; height: 1em"></div>|<div style="background-color: #ff00ff; width: 100%; height: 1em"></div>|
|Cyan |3.2|<div style="background-color: #006666; width: 100%; height: 1em"></div>|<div style="background-color: #00ffff; width: 100%; height: 1em"></div>|


## Circuit Model

<WikiImage caption="Diode internal circuit model" src="/img/circuit/diode.png" :float="false" />

The Basic LED is interally modelled as a diode connected to two 0.01 ohm resistors.


## Data Values

### ID
| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) | Form | Translation Key |
| --- | --- | --- | --- |
| White Basic LED | `kontrol:white_basic_led` | Block & Item | `block.kontrol.white_basic_led` |
| Red Basic LED | `kontrol:red_basic_led` | Block & Item | `block.kontrol.red_basic_led` |
| Green Basic LED | `kontrol:green_basic_led` | Block & Item | `block.kontrol.green_basic_led` |
| Blue Basic LED | `kontrol:blue_basic_led` | Block & Item | `block.kontrol.blue_basic_led` |
| Yellow Basic LED | `kontrol:yellow_basic_led` | Block & Item | `block.kontrol.yellow_basic_led` |
| Purple Basic LED | `kontrol:purple_basic_led` | Block & Item | `block.kontrol.purple_basic_led` |
| Cyan Basic LED | `kontrol:cyan_basic_led` | Block & Item | `block.kontrol.cyan_basic_led` |

| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) |
| --- | --- |
| Block entity | `kontrol:led_block` |


### Block data

Basic LED stores additional data in the form of a block entity:

<WikiTree icon="nbt/compound.png" :data="block_entity_data" :inherit="['electricalBlockEntity']" title="<b>Block entity data</b>" />
