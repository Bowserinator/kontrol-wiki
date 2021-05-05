{
    "img": "block/creative_cable.png",
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
    "title": "Creative Cable"
}
-=-|CONFIG_ABOVE|-=-


# Creative Cable

<ModInfoCard :img="img" :blockData="block" :electricalData="electrical" :title="title" />


## Description

A creative tier cable, comes in 16 different colors. Functions as a true room temperature superconductor, as in all nodes connected by a cable are in the code functionally treated as the same node.

## Usage

The creative cable can be used as an ordinary cable. See [TODO CIRCUITS PAGE]

## Circuit Model

There is no circuit model as connected nodes are programatically reduced to the same node.


## Data Values

### ID
| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) | Form | Translation Key |
| --- | --- | --- | --- |
| White Creative Cable | `kontrol:white_creative_cable` | Block & Item | `block.kontrol.white_creative_cable` |
| Red Creative Cable | `kontrol:red_creative_cable` | Block & Item | `block.kontrol.red_creative_cable` |
| Orange Creative Cable | `kontrol:orange_creative_cable` | Block & Item | `block.kontrol.orange_creative_cable` |
| Pink Creative Cable | `kontrol:pink_creative_cable` | Block & Item | `block.kontrol.pink_creative_cable` |
| Yellow Creative Cable | `kontrol:yellow_creative_cable` | Block & Item | `block.kontrol.yellow_creative_cable` |
| Lime Creative Cable | `kontrol:lime_creative_cable` | Block & Item | `block.kontrol.lime_creative_cable` |
| Green Creative Cable | `kontrol:green_creative_cable` | Block & Item | `block.kontrol.green_creative_cable` |
| Light Blue Creative Cable | `kontrol:light_blue_creative_cable` | Block & Item | `block.kontrol.light_blue_creative_cable` |
| Cyan Creative Cable | `kontrol:cyan_creative_cable` | Block & Item | `block.kontrol.cyan_creative_cable` |
| Blue Creative Cable | `kontrol:blue_creative_cable` | Block & Item | `block.kontrol.blue_creative_cable` |
| Magenta Creative Cable | `kontrol:magenta_creative_cable` | Block & Item | `block.kontrol.magenta_creative_cable` |
| Purple Creative Cable | `kontrol:purple_creative_cable` | Block & Item | `block.kontrol.purple_creative_cable` |
| Brown Creative Cable | `kontrol:brown_creative_cable` | Block & Item | `block.kontrol.brown_creative_cable` |
| Gray Creative Cable | `kontrol:gray_creative_cable` | Block & Item | `block.kontrol.gray_creative_cable` |
| Light Gray Creative Cable | `kontrol:light_gray_creative_cable` | Block & Item | `block.kontrol.light_gray_creative_cable` |
| Black Creative Cable | `kontrol:black_creative_cable` | Block & Item | `block.kontrol.black_creative_cable` |

| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) |
| --- | --- |
| Block entity | `kontrol:superconducting_cable_block` |


### Block data

Creative Cable stores additional data in the form of a block entity:

<WikiTree icon="nbt/compound.png" :data="[]" :inherit="['electricalBlockEntity']" title="<b>Block entity data</b>" />
