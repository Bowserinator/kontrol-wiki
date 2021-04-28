{
    "img": "block/muc_port_maker.png",
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
    "title": "Microcontroller Port Maker",

    "block_entity_data": [
        {
            "icon": "nbt/int.png",
            "title": "rotationIndex:",
            "text": "Index of the current rotation, from <code>BlockRotation.values()</code>"
        },
        {
            "icon": "nbt/int.png",
            "title": "sideLength:",
            "text": "Side length of one of the sides of the rectangle to generate. Will create a new row every this number of ports"
        },
        {
            "icon": "nbt/int.png",
            "title": "portLower:",
            "text": "Lower bound of port ids to generate, inclusive"
        },
        {

            "icon": "nbt/int.png",
            "title": "portUpper:",
            "text": "Upper bound of port ids to generate, inclusive"
        },
        {
            "icon": "nbt/int.png",
            "title": "currentMUC:",
            "text": "Index of the currently selected microcontroller"
        }
    ]
}
-=-|CONFIG_ABOVE|-=-


# Microcontroller Port Maker

<ModInfoCard :blockData="block" :img="img" :title="title" />


## Description

A microcontroller port maker can be used to generate port ranges for different microcontrollers.

## Usage

<WikiImage caption="Microcontroller Port Maker GUI" src="/img/muc_port_maker_gui.png" />

When placed, right click the microcontroller port maker to open the GUI. The GUI opens only if the player is in Creative mode, and has the proper permissions. An outline will be 
drawn in the world; this is the bounding box of the area of the generated microcontroller ports.

A piston cannot move this block.

In the GUI, there is a "Prev" and "Next" button to change the microcontroller type, as well as a rotation toggle to change the placement orientation. The MUC type is only used for 
checking allowed port ranges. The "Side length" input indicates how often to create a new row; for example, a side length of 5 means every 5 ports a new row will be created. Depending 
on the port range, there may be a row that's not entirely filled. The lower and upper port ranges are inclusive and indicate port ids; all ports from LOW to HIGH will be sequentially generated.

When clicking "Done" settings will be saved; clicking "Cancel" will cancel any changes made.

To actually place the microcontroller port blocks, power the microcontroller port maker with redstone.


## Data Values

### ID
| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) | Form | Translation Key |
| --- | --- | --- | --- |
| Microcontroller Port Maker | `kontrol:muc_port_maker` | Block & Item | `block.kontrol.muc_port_maker` |

| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) |
| --- | --- |
| Block entity | `kontrol:muc_port_maker` |


### Block data

Microcontroller maker stores additional data in the form of a block entity:

<WikiTree icon="nbt/compound.png" :data="block_entity_data" title="<b>Block entity data</b>" />
