{
    "img": "block/basic_push_button.png",
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
    "title": "Basic Push Button",
    "block_entity_data": [
        {
            "icon": "nbt/int.png",
            "title": "tickCooldown:",
            "text": "Cooldown before button resets itself"
        }
    ]
}
-=-|CONFIG_ABOVE|-=-


# Basic Push Button

<ModInfoCard :img="img" :blockData="block" :electricalData="electrical" :title="title" />


## Description

A simple push button. Can be triggered by right clicking it, hitting it with an arrow or dropping any entity on it.

## Crafting Recipe


```
some code
```

## Circuit Model

The basic button is modelled internally as a variable resistor. When pressed it's modelled as a 0.01 ohm resistor, otherwise 
functions as a 1 GΩ resistor.


## Data Values

### ID
| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) | Form | Translation Key |
| --- | --- | --- | --- |
| Basic Push Button | `kontrol:basic_push_button` | Block & Item | `block.kontrol.basic_push_button` |

| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) |
| --- | --- |
| Block entity | `kontrol:push_button_block` |


### Block data

Basic Push Button stores additional data in the form of a block entity:

<WikiTree icon="nbt/compound.png" :data="block_entity_data" :inherit="['electricalBlockEntity']" title="<b>Block entity data</b>" />
