{
    "img": "block/creative_resistor.png",
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
    "title": "Creative Resistor",
    "block_entity_data": [
        {
            "icon": "nbt/double.png",
            "title": "Resistance:",
            "text": "Resistance of the resistor in ohms"
        }
    ]
}
-=-|CONFIG_ABOVE|-=-


# Creative Resistor

<ModInfoCard :img="img" :blockData="block" :electricalData="electrical" :title="title" />


## Description

A creative tier resistor. Indestructible. Colors read left to right, starting from the side that's closer to the color bands.

<WikiImage caption="1kΩ Creative resistor" src="/img/creative_resistor.png" :float="false" />

Resistors of different values can be obtained via `/give @p kontrol:creative_resistor{Resistance:[Resistance]}`

## Circuit Model

The Creative Resistor is internally modelled as a single resistor.


## Data Values

### ID
| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) | Form | Translation Key |
| --- | --- | --- | --- |
| Creative Resistor | `kontrol:creative_resistor` | Block & Item | `block.kontrol.creative_resistor` |

| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) |
| --- | --- |
| Block entity | `kontrol:resistor_block` |


### Block data

Creative Resistor stores additional data in the form of a block entity:

<WikiTree icon="nbt/compound.png" :data="block_entity_data" :inherit="['electricalBlockEntity']" title="<b>Block entity data</b>" />
