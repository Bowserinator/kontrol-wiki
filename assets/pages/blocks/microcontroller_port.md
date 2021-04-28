{
    "img": {
        "img": "block/muc_port.gif",
        "small_images": [
            "block/muc_port.png"
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
    "title": "Microcontroller Port"
}
-=-|CONFIG_ABOVE|-=-


# Microcontroller Port

<ModInfoCard :img="img" :blockData="block" :electricalData="electrical" :title="title" />


## Description

An interface for microcontrollers. Ports can connect on all sides (not diagonally) and be part of a microcontroller network. 

TODO: SEE MAKING MUC NETWORK PAGE

Ports will be gray when unconfigured, teal when set to read and red when set to output. Ports will light up when there is non-zero (|V| > 0.1 V) voltage input (for read) or output (for write).

Ports can connect directly to any electrical block *except* for other microcontroller ports.


## Crafting Recipe


```
some code
```

## Circuit Model

<WikiImage :float="false" caption="Internal circuit model" src="/img/circuit/muc_port.png" />

The internal model depends on whether the port is set by the microcontroller as "IN" or "OUT".

| State | Behavior |
| --- | --- |
| <b style="color:#34ebe1">IN</b> | The port can read voltage, all resistors are set to 1 MΩ and the internal fixed voltage source disabled (set to Hi-Z state) |
| <b style="color:#e04c4c">OUT</b> | The port can output voltage, all resistors are set to 0.01 Ω and the internal fixed voltage source is enabled. |
| **NONE** | Undefined. Note IN / OUT state should always be set when the microcontroller performs a read or write to a port, and that the port should be disabled when not connected. |


## Data Values

### ID
| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) | Form | Translation Key |
| --- | --- | --- | --- |
| Microcontroller Port | `kontrol:muc_port` | Block & Item | `block.kontrol.muc_port` |

### Block states

| Name | Default value | Allowed values | Description |
| --- | --- | --- | --- |
| `in` | `false` | `false`, `true` | Is port set to read? |
| `out` | `false` | `false`, `true` | Is port set to write? |
| `on` | `false` | `false`, `true` | Is port currently reading / writing `abs(V) > 0.1 V`? |


## Trivia


TODO: [cateogires and more bocks]