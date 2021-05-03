{
    "img": "block/creative_capacitor.png",
    "block": {
        "renewable": false,
        "stackable": 64,
        "tools": [],
        "blastResistance": 3600000,
        "hardness": -1,
        "luminant": 0,
        "luminantToggle": false,
        "transparent": true,
        "flammable": false,
        "catchesFireFromLava": false
    },
    "electrical": {
        "maxOperatingVoltage": "INF V",
        "thermalR": "0.0",
        "thermalC": "0.0"
    },
    "title": "Creative Capacitor",
    "block_entity_data": [
        {
            "icon": "nbt/double.png",
            "title": "Capacitance:",
            "text": "Capacitance of the capacitor in farads"
        }
    ]
}
-=-|CONFIG_ABOVE|-=-


# Creative Capacitor

<ModInfoCard :img="img" :blockData="block" :electricalData="electrical" :title="title" />


## Description

A creative tier capacitor. Indestructible. When placed down the capacitance will be displayed on the capacitor.

Capacitors of different values can be obtained via `/give @p kontrol:creative_capacitor{Capacitance:[Capactiance]}`

## Circuit Model

The Creative Capacitor is internally modelled as a single capacitor.


## Data Values

### ID
| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) | Form | Translation Key |
| --- | --- | --- | --- |
| Creative Capacitor | `kontrol:creative_capacitor` | Block & Item | `block.kontrol.creative_capacitor` |

| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) |
| --- | --- |
| Block entity | `kontrol:capacitor_block` |


### Block data

Creative Capacitor stores additional data in the form of a block entity:

<WikiTree icon="nbt/compound.png" :data="block_entity_data" :inherit="['electricalBlockEntity']" title="<b>Block entity data</b>" />
