(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{1170:function(t,e,n){var content=n(1173);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("27fa64fd",content,!0,{sourceMap:!1})},1171:function(t,e,n){"use strict";n.r(e);n(84);var r={computed:{array:function(){return this.$props.listArray.map((function(t,i){return i%2==0?"<b>".concat(t,"</b>"):'<div style="margin-left: 30px">'.concat(t,"</div>")}))}},name:"InfoTable",props:{listArray:{type:Array}}},l=(n(1172),n(46)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-list",{attrs:{size:"small",grid:{column:2},"data-source":t.array},scopedSlots:t._u([{key:"renderItem",fn:function(e){return n("a-list-item",{staticClass:"list-item",domProps:{innerHTML:t._s(e)}})}}])})}),[],!1,null,"9ff72844",null);e.default=component.exports},1172:function(t,e,n){"use strict";n(1170)},1173:function(t,e,n){var r=n(82)(!1);r.push([t.i,".list-item[data-v-9ff72844]{padding:3pt}.list-item[data-v-9ff72844]:nth-child(4n),.list-item[data-v-9ff72844]:nth-child(4n - 1){background-color:rgba(0,0,0,.2)}",""]),t.exports=r},1226:function(t,e,n){"use strict";n.r(e);n(291);var r={renewable:!1,stackable:64,tools:[],blastResistance:0,hardness:0,luminant:0,luminantToggle:!1,transparent:!1,flammable:!1,catchesFireFromLava:!1},l={computed:{listArray:function(){var data=this.data||r,t="Yes (".concat(data.luminant," when lit)");return 0===data.luminant?t="No":data.luminantToggle||(t="Yes (".concat(data.luminant,")")),['<a href="https://minecraft.fandom.com/wiki/Renewable_resource">Renewable</a>',data.renewable?"Yes":"No","Stackable",data.stackable>1?"Yes (".concat(data.stackable,")"):"No","Tools",data.tools.length?data.tools.join(", "):"N/A",'<a href="https://minecraft.fandom.com/wiki/Explosion#Blast_resistance">Blast Resistance</a>',data.blastResistance,'<a href="https://minecraft.fandom.com/wiki/Breaking#Blocks_by_hardness">Hardness</a>',data.hardness,'<a href="https://minecraft.fandom.com/wiki/Light">Luminant</a>',t,'<a href="https://minecraft.fandom.com/wiki/Opacity">Transparent</a>',data.transparent?"Yes":"No",'<a href="https://minecraft.fandom.com/wiki/Flammable">Flammable</a>',data.flammable?"Yes":"No",'Catches fire from <a href="https://minecraft.fandom.com/wiki/Lava">lava</a>',data.catchesFireFromLava?"Yes":"No"]}},props:{data:{type:Object,default:r}}},o=n(46),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("InfoTable",{attrs:{listArray:t.listArray}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{InfoTable:n(1171).default})}}]);