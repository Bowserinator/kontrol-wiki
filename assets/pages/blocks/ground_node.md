{
    "img": "block/ground.png",
    "block": {
        "renewable": true,
        "stackable": 64,
        "tools": ["Shovel"],
        "blastResistance": 0.2,
        "hardness": 0.2,
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
    "title": "Ground Node",
    "block_entity_data": []
}
-=-|CONFIG_ABOVE|-=-


# Ground Node

<ModInfoCard :img="img" :blockData="block" :electricalData="electrical" :title="title" />


## Description

A ground node. Sets a reference voltage of 0 V.


## Circuit Model

<WikiImage caption="Ground internal circuit model" src="/img/circuit/ground_node.png" :float="false" />

The Ground Node is interally modelled as a ground connected to 6 0.1 ohm resistors (one for each side).

## Usage

The ground node is used to set a reference point for 0 V. See [TODO CIRCUITS PAGE]


## Data Values

### ID
| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) | Form | Translation Key |
| --- | --- | --- | --- |
| Ground Node | `kontrol:electrical_ground` | Block & Item | `block.kontrol.electrical_node` |

| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) |
| --- | --- |
| Block entity | `kontrol:electrical_ground` |


### Block data

Ground Node stores additional data in the form of a block entity:

<WikiTree icon="nbt/compound.png" :data="block_entity_data" :inherit="['electricalBlockEntity']" title="<b>Block entity data</b>" />
