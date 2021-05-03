{
    "img": "block/creative_scope.png",
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
    "title": "Creative Scope",
    "block_entity_data": [
        {
            "node":true,
            "title":"<b>ScopeState: </b>",
            "icon":"nbt/compound.png",
            "data":[
                {
                    "icon":"nbt/int.png",
                    "title":"maxReadings:",
                    "text":"Max readings to keep in memory"
                },
                {
                    "icon":"nbt/int-array.png",
                    "title":"readings:",
                    "text":"All readings logged, as relative pixel offsets from bottom axis"
                },
                {
                    "icon":"nbt/float.png",
                    "title":"timeScale:",
                    "text":"Scale (compression) factor for x (time) axis"
                },
                {
                    "icon":"nbt/float.png",
                    "title":"yScale:",
                    "text":"Scale (compression) factor for y axis"
                },
                {
                    "icon":"nbt/float.png",
                    "title":"yDelta",
                    "text":"Y axis offset, in pixels (not affected by yScale)"
                },
                {
                    "icon":"nbt/int.png",
                    "title":"dataStart",
                    "text":"Index of the current reading, used for rendering (array is not shifted when new reading is added, this is incremented instead)"
                }
            ]
        },
        {
            "icon": "nbt/int.png",
            "title": "Tier:",
            "text": "Ordinal value of the tier of the scope"
        }
    ]
}
-=-|CONFIG_ABOVE|-=-


# Creative Scope

<ModInfoCard :img="img" :blockData="block" :electricalData="electrical" :title="title" />


## Description

A creative tier scope. Stores at most 128 datapoints.


## Circuit Model

The creative scope is interally modelled as a 1 TΩ resistor.

## Usage

<WikiImage caption="Scope usage example" src="/img/creative_scope_usage.png" :float="false" />

Wire the scope in parallel with the component(s) you wish to record the voltage across. A drop in voltage across the scope (from red to blue terminal) is considered 
"negative", an increase is positive. Swapping the terminal order swaps the sign on the measurement.


## Data Values

### ID
| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) | Form | Translation Key |
| --- | --- | --- | --- |
| Creative Scope | `kontrol:creative_scope` | Block & Item | `block.kontrol.creative_scope` |

| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) |
| --- | --- |
| Block entity | `kontrol:scope_block` |


### Block data

Creative Scope stores additional data in the form of a block entity:

<WikiTree icon="nbt/compound.png" :data="block_entity_data" :inherit="['electricalBlockEntity']" title="<b>Block entity data</b>" />
