{
    "img": "block/creative_inductor.png",
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
    "title": "Creative Inductor",
    "block_entity_data": [
        {
            "icon": "nbt/double.png",
            "title": "Inductance:",
            "text": "Inductance of the inductor in henries"
        }
    ]
}
-=-|CONFIG_ABOVE|-=-


# Creative Inductor

<ModInfoCard :img="img" :blockData="block" :electricalData="electrical" :title="title" />


## Description

A creative tier inductor. Indestructible. When placed down the capacitance will be displayed on the inductor.

Inductors of different values can be obtained via `/give @p kontrol:creative_inductor{Inductance:[Inductance]}`

## Circuit Model

The Creative Inductor is internally modelled as a single inductor.


## Data Values

### ID
| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) | Form | Translation Key |
| --- | --- | --- | --- |
| Creative Inductor | `kontrol:creative_inductor` | Block & Item | `block.kontrol.creative_inductor` |

| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) |
| --- | --- |
| Block entity | `kontrol:inductor_block` |


### Block data

Creative Inductor stores additional data in the form of a block entity:

<WikiTree icon="nbt/compound.png" :data="block_entity_data" :inherit="['electricalBlockEntity']" title="<b>Block entity data</b>" />
