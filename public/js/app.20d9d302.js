(function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"83d89c49"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0ee8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{staticClass:"glossy",attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),n("q-toolbar-title",[e._v(" Quasar App ")]),n("div",[e._v("Quasar v"+e._s(e.$q.version))])],1)],1),n("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-2"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{attrs:{header:""}},[e._v("Essential Links")]),n("q-item",{attrs:{clickable:""},on:{click:function(t){return e.$router.push({name:"Home"})}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"school"}})],1),n("q-item-section",[n("q-item-label",[e._v("Home")]),n("q-item-label",{attrs:{caption:""}},[e._v("Cards List")])],1)],1),n("q-item",{attrs:{clickable:""},on:{click:function(t){return e.$router.push({name:"AddCard"})}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"code"}})],1),n("q-item-section",[n("q-item-label",[e._v("AddCard")]),n("q-item-label",{attrs:{caption:""}},[e._v("Add more cards")])],1)],1),n("q-item",{attrs:{clickable:""},on:{click:function(t){return e.$router.push({name:"Tags"})}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"chat"}})],1),n("q-item-section",[n("q-item-label",[e._v("Tags")]),n("q-item-label",{attrs:{caption:""}},[e._v("manage your tags")])],1)],1)],1)],1),n("q-page-container",[n("router-view")],1)],1)},a=[],i={name:"LayoutDefault",data:function(){return{leftDrawerOpen:!1}}},s=i,c=n("2877"),l=n("fe09"),u=Object(c["a"])(s,o,a,!1,null,null,null),d=u.exports;u.options.components=Object.assign(Object.create(u.options.components||null),u.options.components||{},{QLayout:l["k"],QHeader:l["f"],QToolbar:l["n"],QBtn:l["a"],QToolbarTitle:l["o"],QDrawer:l["e"],QList:l["l"],QItemLabel:l["i"],QItem:l["h"],QItemSection:l["j"],QIcon:l["g"],QPageContainer:l["m"]});var p=n("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var f=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md row items-start q-gutter-md home"},[n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"touch-swipe",rawName:"v-touch-swipe.mouse.right.left",value:e.handleSwipe,expression:"handleSwipe",modifiers:{mouse:!0,right:!0,left:!0}},{name:"show",rawName:"v-show",value:!this.isTransitioning,expression:"!this.isTransitioning"}],staticClass:"card",class:{"card-back_side":!e.isFrontSide},on:{click:function(t){e.isFrontSide=!e.isFrontSide}}},[n("div",{staticClass:"card__inner"},[n("q-card",{staticClass:"card__side card__front"},[n("q-card-section",[n("h2",[e._v(e._s(e.currentCard.word))])])],1),n("q-card",{staticClass:"card__side card__back"},[n("q-card-section",[n("div",{staticClass:"card__back__word"},[e._v(e._s(e.currentCard.word)+":")]),n("div",{staticClass:"card__back__translation"},[e._v(" "+e._s(e.currentCard.translation)+" ")]),n("div",{staticClass:"card__back__notes-label"},[e._v("NOTES:")]),n("div",{staticClass:"card__back__notes"},[e._v(e._s(e.currentCard.notes))]),n("div",{staticClass:"card__back__tags"},e._l(e.currentCard.tags,(function(t){return n("q-chip",{key:t,attrs:{outline:"",color:"teal","text-color":"white"}},[e._v(e._s(t))])})),1)])],1)],1)])])],1)},v=[],g={name:"Home",data:function(){return{cards:[{id:1,word:"home",translation:"hogar",notes:"Where people leave",tags:["building"]},{id:2,word:"dog",translation:"perro",notes:"My setellites",tags:["animals"]},{id:3,word:"orange",translation:"naranja",notes:"",tags:["fruits","food"]},{id:4,word:"congratulations",translation:"felicitaciones",notes:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",tags:["talk"]}],currentIndex:3,isFrontSide:!0,isTransitioning:!1}},computed:{currentCard:function(){return this.cards[this.currentIndex]}},methods:{handleSwipe:function(e){var t=e.direction;this.isTransitioning=!0;var n=this;setTimeout((function(){n.isFrontSide=!0,n.currentIndex="rigth"===t?n.currentIndex?n.cards.length-1:n.currentIndex-1:(n.currentIndex+1)%n.cards.length,n.isTransitioning=!1}),300)}}},h=g,b=(n("c599"),Object(c["a"])(h,m,v,!1,null,"3f70ee74",null)),_=b.exports;b.options.components=Object.assign(Object.create(b.options.components||null),b.options.components||{},{QCard:l["b"],QCardSection:l["c"],QChip:l["d"]}),b.options.directives=Object.assign(Object.create(b.options.directives||null),b.options.directives||{},{TouchSwipe:l["p"]}),r["a"].use(f["a"]);var w=[{path:"/",name:"Home",component:_},{path:"/add-card",name:"AddCard",component:function(){return n.e("about").then(n.bind(null,"098f"))}},{path:"/tags",name:"Tags",component:function(){return n.e("about").then(n.bind(null,"1884"))}}],q=new f["a"]({mode:"history",base:"/",routes:w}),y=q,k=n("2f62");r["a"].use(k["a"]);var C=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=(n("c867"),n("1f91")),j=(n("e54f"),n("b05d"));r["a"].use(j["a"],{config:{},components:{},directives:{},plugins:{},lang:O["a"]}),r["a"].config.productionTip=!1,new r["a"]({router:y,store:C,render:function(e){return e(d)}}).$mount("#app")},c599:function(e,t,n){"use strict";var r=n("0ee8"),o=n.n(r);o.a},c867:function(e,t,n){}});
//# sourceMappingURL=app.20d9d302.js.map