{
    "img": "block/basic_switch.png",
    "block": {
        "renewable": true,
        "stackable": 64,
        "tools": ["Pickaxe"],
        "blastResistance": 3.5,
        "hardness": 3.5,
        "luminant": 0,
        "luminantToggle": false,
        "transparent": true,
        "flammable": false,
        "catchesFireFromLava": false
    },
    "electrical": {
        "maxOperatingVoltage": "0 V",
        "thermalR": "0.0",
        "thermalC": "0.0"
    },
    "title": "Basic Switch",
    "block_entity_data": [
        {
            "icon": "nbt/boolean.png",
            "title": "open:",
            "text": "Is the switch open? (High-impedance)"
        }
    ]
}
-=-|CONFIG_ABOVE|-=-


# Basic Switch

<ModInfoCard :img="img" :blockData="block" :electricalData="electrical" :title="title" />


## Description

A simple switch. Can be toggled by right clicking it.

## Crafting Recipe


```
some code
```

## Circuit Model

The basic switch is modelled internally as a variable resistor. When closed it's modelled as a 0.01 ohm resistor, otherwise 
functions as a 1 GΩ resistor.


## Data Values

### ID
| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) | Form | Translation Key |
| --- | --- | --- | --- |
| Basic Switch | `kontrol:basic_switch` | Block & Item | `block.kontrol.basic_switch` |

| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) |
| --- | --- |
| Block entity | `kontrol:switch_block` |


### Block data

Basic Switch stores additional data in the form of a block entity:

<WikiTree icon="nbt/compound.png" :data="block_entity_data" :inherit="['electricalBlockEntity']" title="<b>Block entity data</b>" />
