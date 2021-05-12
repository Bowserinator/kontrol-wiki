__NUXT_JSONP__("/blocks/creative_scope", (function(a,b,c,d,e){return {data:[{slug:"creative_scope",text:"\u003Cspan\u003E\u003Cclient-only\u003E\u003Ch1\u003ECreative Scope\u003C\u002Fh1\u003E\n\u003Cp\u003E\u003CModInfoCard :img=\"img\" :blockData=\"block\" :electricalData=\"electrical\" :title=\"title\" \u002F\u003E\u003C\u002Fp\u003E\n\u003Ch2\u003EDescription\u003C\u002Fh2\u003E\n\u003Cp\u003EA creative tier scope. Stores at most 128 datapoints.\u003C\u002Fp\u003E\n\u003Ch2\u003ECircuit Model\u003C\u002Fh2\u003E\n\u003Cp\u003EThe creative scope is interally modelled as a 1 TΩ resistor.\u003C\u002Fp\u003E\n\u003Ch2\u003EUsage\u003C\u002Fh2\u003E\n\u003Cp\u003E\u003CWikiImage caption=\"Scope usage example\" src=\"\u002Fimg\u002Fcreative_scope_usage.png\" :float=\"false\" \u002F\u003E\u003C\u002Fp\u003E\n\u003Cp\u003EWire the scope in parallel with the component(s) you wish to record the voltage across. A drop in voltage across the scope (from red to blue terminal) is considered\n&quot;negative&quot;, an increase is positive. Swapping the terminal order swaps the sign on the measurement.\u003C\u002Fp\u003E\n\u003Ch2\u003EData Values\u003C\u002Fh2\u003E\n\u003Ch3\u003EID\u003C\u002Fh3\u003E\n\u003Ctable class=\"wiki_table\"\u003E\u003Cthead\u003E\n\u003Ctr\u003E\u003Cth\u003EName\u003C\u002Fth\u003E\u003Cth\u003E\u003Ca href=\"https:\u002F\u002Fminecraft.fandom.com\u002Fwiki\u002FNamespaced_ID\"\u003ENamespaced ID\u003C\u002Fa\u003E\u003C\u002Fth\u003E\u003Cth\u003EForm\u003C\u002Fth\u003E\u003Cth\u003ETranslation Key\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\u003Ctd\u003ECreative Scope\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Ccode\u003Ekontrol:creative_scope\u003C\u002Fcode\u003E\u003C\u002Ftd\u003E\u003Ctd\u003EBlock &amp; Item\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Ccode\u003Eblock.kontrol.creative_scope\u003C\u002Fcode\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003Ctable class=\"wiki_table\"\u003E\u003Cthead\u003E\n\u003Ctr\u003E\u003Cth\u003EName\u003C\u002Fth\u003E\u003Cth\u003E\u003Ca href=\"https:\u002F\u002Fminecraft.fandom.com\u002Fwiki\u002FNamespaced_ID\"\u003ENamespaced ID\u003C\u002Fa\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\u003Ctd\u003EBlock entity\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Ccode\u003Ekontrol:scope_block\u003C\u002Fcode\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003Ch3\u003EBlock data\u003C\u002Fh3\u003E\n\u003Cp\u003ECreative Scope stores additional data in the form of a block entity:\u003C\u002Fp\u003E\n\u003Cp\u003E\u003CWikiTree icon=\"nbt\u002Fcompound.png\" :data=\"block_entity_data\" :inherit=\"['electricalBlockEntity']\" title=\"\u003Cb\u003EBlock entity data\u003C\u002Fb\u003E\" \u002F\u003E\u003C\u002Fp\u003E\n\u003C\u002Fclient-only\u003E\u003C\u002Fspan\u003E",img:"block\u002Fcreative_scope.png",block:{renewable:a,stackable:64,tools:[],blastResistance:3600000,hardness:-1,luminant:0,luminantToggle:a,transparent:d,flammable:a,catchesFireFromLava:a},electrical:{maxOperatingVoltage:"INF V",thermalR:e,thermalC:e},title:"Creative Scope",block_entity_data:[{node:d,title:"\u003Cb\u003EScopeState: \u003C\u002Fb\u003E",icon:"nbt\u002Fcompound.png",data:[{icon:b,title:"maxReadings:",text:"Max readings to keep in memory"},{icon:"nbt\u002Fint-array.png",title:"readings:",text:"All readings logged, as relative pixel offsets from bottom axis"},{icon:c,title:"timeScale:",text:"Scale (compression) factor for x (time) axis"},{icon:c,title:"yScale:",text:"Scale (compression) factor for y axis"},{icon:c,title:"yDelta",text:"Y axis offset, in pixels (not affected by yScale)"},{icon:b,title:"dataStart",text:"Index of the current reading, used for rendering (array is not shifted when new reading is added, this is incremented instead)"}]},{icon:b,title:"Tier:",text:"Ordinal value of the tier of the scope"}]}],fetch:{},mutations:void 0}}(false,"nbt\u002Fint.png","nbt\u002Ffloat.png",true,"0.0")));