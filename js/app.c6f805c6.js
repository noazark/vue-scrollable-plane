(function(t){function e(e){for(var r,l,a=e[0],s=e[1],c=e[2],f=0,d=[];f<a.length;f++)l=a[f],o[l]&&d.push(o[l][0]),o[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},o={app:0},i=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/vue-scrollable-plane/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"4bf0":function(t,e,n){"use strict";var r=n("a356"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"flex"},[n("ScrollPane",{staticClass:"flex-el",scopedSlots:t._u([{key:"top-indicator",fn:function(e){return n("transition",{attrs:{name:"glow"}},[e.extreme?t._e():n("div",{staticClass:"indicator-top"})])}},{key:"bottom-indicator",fn:function(e){return n("transition",{attrs:{name:"glow"}},[e.extreme?t._e():n("div",{staticClass:"indicator-bottom"})])}},{key:"left-indicator",fn:function(e){return n("transition",{attrs:{name:"glow"}},[e.extreme?t._e():n("div",{staticClass:"indicator-left"})])}},{key:"right-indicator",fn:function(e){return n("transition",{attrs:{name:"glow"}},[e.extreme?t._e():n("div",{staticClass:"indicator-right"})])}}])},[n("div",{staticClass:"table"},[n("div",{staticClass:"field"},t._l(1e3,function(t){return n("div",{key:t,staticClass:"cell"})}))])])],1)])},i=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{ref:"container",staticClass:"container",on:{scroll:t.setScrollStyle}},[t._t("default")],2),t._t("top-indicator",null,{extreme:t.extremes.top}),t._t("right-indicator",null,{extreme:t.extremes.right}),t._t("bottom-indicator",null,{extreme:t.extremes.bottom}),t._t("left-indicator",null,{extreme:t.extremes.left})],2)},a=[],s={name:"ScrollPane",data:function(){return{extremes:{top:!0,bottom:!0,right:!0,left:!0}}},mounted:function(){this.setScrollStyle()},methods:{setScrollStyle:function(){var t=this.$refs.container,e=t.clientWidth,n=t.clientHeight,r=t.scrollHeight,o=t.scrollLeft,i=t.scrollTop,l=t.scrollWidth;this.extremes.top=0===i,this.extremes.right=o+e===l,this.extremes.bottom=i+n===r,this.extremes.left=0===o}}},c=s,u=(n("4bf0"),n("2877")),f=Object(u["a"])(c,l,a,!1,null,"977da3d0",null);f.options.__file="ScrollPane.vue";var d=f.exports,p={name:"app",components:{ScrollPane:d}},m=p,v=(n("034f"),Object(u["a"])(m,o,i,!1,null,null,null));v.options.__file="App.vue";var h=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(h)}}).$mount("#app")},"64a9":function(t,e,n){},a356:function(t,e,n){}});
//# sourceMappingURL=app.c6f805c6.js.map