(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1214:function(t,e,n){"use strict";var r=function(t,e,n){if(!e.hasOwnProperty(n)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r)}};e.a={props:{template:String,parent:Object,templateProps:{type:Object,default:function(){return{}}}},render:function(t){if(this.template){var e=this.parent||this.$parent,n=e.$data;void 0===n&&(n={});var o=e.$props;void 0===o&&(o={});var a=e.$options;void 0===a&&(a={});var p=a.components;void 0===p&&(p={});var c=a.computed;void 0===c&&(c={});var i=a.methods;void 0===i&&(i={});var s=this.$data;void 0===s&&(s={});var l=this.$props;void 0===l&&(l={});var d=this.$options;void 0===d&&(d={});var f=d.methods;void 0===f&&(f={});var v=d.computed;void 0===v&&(v={});var u=d.components;void 0===u&&(u={});var m={$data:{},$props:{},$options:{},components:{},computed:{},methods:{}};Object.keys(n).forEach((function(t){void 0===s[t]&&(m.$data[t]=n[t])})),Object.keys(o).forEach((function(t){void 0===l[t]&&(m.$props[t]=o[t])})),Object.keys(i).forEach((function(t){void 0===f[t]&&(m.methods[t]=i[t])})),Object.keys(c).forEach((function(t){void 0===v[t]&&(m.computed[t]=c[t])})),Object.keys(p).forEach((function(t){void 0===u[t]&&(m.components[t]=p[t])}));var h=Object.keys(m.methods||{}),y=Object.keys(m.$data||{}),b=Object.keys(m.$props||{}),j=Object.keys(this.templateProps),O=y.concat(b).concat(h).concat(j),$=(k=e,E={},h.forEach((function(t){return r(k,E,t)})),E),w=function(t){var e={};return t.forEach((function(t){t&&Object.getOwnPropertyNames(t).forEach((function(n){return r(t,e,n)}))})),e}([m.$data,m.$props,$,this.templateProps]);return t({template:this.template||"<div></div>",props:O,computed:m.computed,components:m.components,provide:this.$parent._provided},{props:w})}var k,E}}},1217:function(t,e,n){"use strict";n.r(e);n(106),n(34),n(59),n(107),n(60),n(72),n(108),n(109),n(73);var r=n(69),o=(n(291),n(195),n(1214));function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function d(data,t){if("string"==typeof data)return'<v-runtime-template template="'.concat(data,'"/>');if("object"===Object(r.a)(data)&&"links"===data.type)return"<span>".concat(data.links.join("&nbsp; • &nbsp;"),"</span>");var e,html="",n=c(data);try{for(n.s();!(e=n.n()).done;){var o=e.value;html+='\n<tr>\n    <td class="category-td">\n        <div class="category">\n            '.concat(o.category,"\n        </div>\n    </td>\n    <td>\n        ").concat(d(o.data,!1),"\n    </td>\n</tr>")}}catch(t){n.e(t)}finally{n.f()}return html=t?'<table class="page-table top-level">\n        <th colspan="2">Kontrol</th>\n            '.concat(html,"\n        </table>"):'<table class="page-table">'.concat(html,"</table>")}var f={name:"PagesTable",computed:{tableHTML:function(){return d(this.$props.data,!0)}},props:{data:{type:Array}},components:{VRuntimeTemplate:o.a}},v=n(46),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-runtime-template",{attrs:{template:t.tableHTML}})}),[],!1,null,null,null);e.default=component.exports}}]);