{
    "img": {
        "img": "block/muc_redstone_port_1.gif",
        "small_images": [
            "block/muc_redstone_port_1.png"
        ]
    },
    "block": {
        "renewable": true,
        "stackable": 64,
        "tools": ["Pickaxe"],
        "blastResistance": 3.5,
        "hardness": 3.5,
        "luminant": 7,
        "luminantToggle": true,
        "transparent": false,
        "flammable": false,
        "catchesFireFromLava": false
    },
    "electrical": {
        "maxOperatingVoltage": "0 V",
        "thermalR": "0.0",
        "thermalC": "0.0"
    },
    "title": "BOG07 MUC Redstone Port",
    "block_entity_data": [
        {
            "icon": "nbt/double.png",
            "title": "lowThreshold:",
            "text": "Low voltage threshold, when passed will emit redstone power"
        }
    ]
}
-=-|CONFIG_ABOVE|-=-


# BOG07 MUC Redstone Port

<ModInfoCard :img="img" :blockData="block" :electricalData="electrical" :title="title" />


## Description

A redstone output port. Contains 1 electrical port, when input voltage is greater than 0.7 V (relative to absolute ground) the port will weakly emit 15 redstone power.

## Crafting Recipe


```
some code
```

## Circuit Model

The redstone port is internally modelled as a 1 MΩ resistor wired directly to ground on one end.


## Data Values

### ID
| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) | Form | Translation Key |
| --- | --- | --- | --- |
| BOG07 MUC Redstone Port | `kontrol:muc_redstone_port_1` | Block & Item | `block.kontrol.muc_redstone_port_1` |

| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) |
| --- | --- |
| Block entity | `kontrol:muc_redstone_port` |


### Block data

BOG07 MUC Redstone Port stores additional data in the form of a block entity:

<WikiTree icon="nbt/compound.png" :data="block_entity_data" :inherit="['electricalBlockEntity']" title="<b>Block entity data</b>" />
