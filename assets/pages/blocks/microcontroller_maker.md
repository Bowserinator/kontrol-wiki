{
    "img": "block/muc_maker.png",
    "block": {
        "renewable": false,
        "stackable": 64,
        "tools": [],
        "blastResistance": 3600000,
        "hardness": -1,
        "luminant": 0,
        "luminantToggle": false,
        "transparent": false,
        "flammable": false,
        "catchesFireFromLava": false
    },
    "title": "Microcontroller Maker",

    "block_entity_data": [
        {
            "icon": "nbt/int.png",
            "title": "rotationIndex:",
            "text": "Index of the current rotation, from <code>BlockRotation.values()</code>"
        },
        {
            "icon": "nbt/int.png",
            "title": "currentMUC:",
            "text": "Index of the currently selected microcontroller"
        }
    ]
}
-=-|CONFIG_ABOVE|-=-


# Microcontroller Maker

<ModInfoCard :blockData="block" :img="img" :title="title" />


## Description

A microcontroller maker can be used to generate pre-made microcontroller port templates.

## Usage

<WikiImage caption="Microcontroller Maker GUI" src="/img/muc_maker_gui.png" />

When placed, right click the microcontroller maker to open the GUI. The GUI opens only if the player is in Creative mode, and has the proper permissions. An outline will be 
drawn in the world; this is the bounding box of the area of the generated microcontroller.

A piston cannot move this block.

In the GUI, there is a "Prev" and "Next" button to change the microcontroller type, as well as a rotation toggle to change the placement orientation.
When clicking "Done" settings will be saved; clicking "Cancel" will cancel any changes made.

To actually place the microcontroller blocks, power the microcontroller maker with redstone.


## Template Format

Templates are stored under `data/kontrol/muc_schematics/*.muc`. An example template is as follows:

```
c8051
.. .. .. .. 01 CO 02 .. .. .. ..
.. .. .. .. 03 CO 04 06 08 10 12
05 07 09 11 13 CO .. .. .. .. ..
.. .. .. .. .. CO 14 16 18 20 ..
.. 15 17 19 21 CO .. .. .. .. ..
.. .. .. .. .. CO 22 24 26 28 30
.. 23 25 27 29 CO .. .. .. .. ..
.. 31 33 35 37 CO 32 34 36 38 ..
```

The first line is the ID of the schematic, all following lines must constitute a rectangular matrix with each block seperated by a space:

|Symbol|Meaning|
|---|---|
|`..`|Empty space|
|`CO`|Port connector|
|`Base 10 number`|Port with that port ID|


## Data Values

### ID
| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) | Form | Translation Key |
| --- | --- | --- | --- |
| Microcontroller Maker | `kontrol:muc_maker` | Block & Item | `block.kontrol.muc_maker` |

| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) |
| --- | --- |
| Block entity | `kontrol:muc_maker` |


### Block data

Microcontroller maker stores additional data in the form of a block entity:

<WikiTree icon="nbt/compound.png" :data="block_entity_data" title="<b>Block entity data</b>" />
