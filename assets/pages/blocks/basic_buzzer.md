{
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
    "title": "Basic Buzzer"
}
-=-|CONFIG_ABOVE|-=-


# Basic Buzzer

<ModInfoCard :blockData="block" :electricalData="electrical" :title="title" />


## Description

A simple buzzer. Makes an audible buzzing sound when a voltage difference of over 0.5 V is applied over its terminals. The volume of the sound 
cannot be controlled.

## Crafting Recipe


```
some code
```

## Circuit Model

The basic buzzer is modelled internally as a 300 ohm resistor.


## Data Values

### ID
| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) | Form | Translation Key |
| --- | --- | --- | --- |
| Basic Buzzer | `kontrol:basic_buzzer` | Block & Item | `block.kontrol.basic_buzzer` |



## Trivia


TODO: [cateogires and more bocks]