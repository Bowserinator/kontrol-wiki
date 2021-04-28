{
    "img": "item/product_scanner.png",
    "item": {
        "durability": "24",
        "renewable": "Yes",
        "stackable": 0
    },
    "title": "Product State Scanner"
}
-=-|CONFIG_ABOVE|-=-


# Product State Scanner

<ModInfoCard :img="img" :itemData="item" :title="title" />


## Description

Product State Scanners are tools used for measuring electrical component properties.

Product State Scanners will become damaged over time if used to mine or hit mobs. Unlike multimneters, damaged Product State Scanners DO NOT have a corrupted output.

Product State Scanners cannot be enchanted or repaired.


## Crafting Recipe


```
some code
```

## Measurement

Right click an electrical block to measure its properties; not all components will have a measurable property.

|Block|Properties measured|
|---|---|
|<PagesTableLink name="Microcontroller Port" href="/blocks/microcontroller_port" img="block/muc_port.png" /> |  <ul style="margin:0"><li>Port id (hex & dec)</li><li>Port enable / disable</li><li>Port out / in</li></ul> |


## Data Values

### ID
| Name | [Namespaced ID](https://minecraft.fandom.com/wiki/Namespaced_ID) | Form | Translation Key |
| --- | --- | --- | --- |
| Product State Scanner | `kontrol:product_scanner` | Item | `item.kontrol.product_scanner` |

## Trivia

- The product state scanner is a barcode scanner