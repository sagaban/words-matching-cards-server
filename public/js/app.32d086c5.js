(function(e){function t(t){for(var r,a,s=t[0],c=t[1],d=t[2],u=0,l=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({"add-card":"add-card",resources:"resources","words-list":"words-list"}[e]||e)+"."+{"add-card":"cf2d87dd",resources:"55dd29f1","words-list":"38d2fdf1"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"add-card":1,resources:1,"words-list":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({"add-card":"add-card",resources:"resources","words-list":"words-list"}[e]||e)+"."+{"add-card":"b8680e20",resources:"7afad37d","words-list":"a409dcbd"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var d=i[s],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===r||u===o))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){d=l[s],u=d.getAttribute("data-href");if(u===r||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var l=new Error;d=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"278d":function(e,t,n){},4360:function(e,t,n){"use strict";n("4160"),n("d81d"),n("b64b"),n("d3b7"),n("159b");var r=n("2b0e"),a=n("2f62"),o=n("bc3a"),i=n.n(o),s=i.a.create({baseURL:"/api",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"},timeout:1e4}),c=s,d={getTags:function(){return c.get("/tags")},postTag:function(e){return c.post("/tags",e)},putTag:function(e){return c.put("/tags/".concat(e.id),e)},deleteTag:function(e){return c.delete("/tags/".concat(e))}},u={getCards:function(){return c.get("/cards")},getCard:function(e){return c.get("/cards/"+e)},postCard:function(e){return c.post("/cards",e)},putCard:function(e){return c.put("/cards/"+e.id,e)},deleteCard:function(e){return c.delete("/cards/".concat(e))}},l=n("2a19"),f=n("f508");r["a"].use(a["a"]);var p=function(e,t){if(t.response&&t.response.data&&t.response.data.errors)t.response.data.errors.forEach((function(t){var n={type:"negative",message:e+": "+t.message};l["a"].create(n)}));else{var n={type:"negative",message:e+": "+t.message};l["a"].create(n)}};t["a"]=new a["a"].Store({state:{tags:{},cards:{}},mutations:{SET_TAGS:function(e,t){t.forEach((function(t){return r["a"].set(e.tags,t.id,t)}))},SET_CARDS:function(e,t){t.forEach((function(t){return r["a"].set(e.cards,t.id,t)}))},REMOVE_CARD:function(e,t){r["a"].delete(e.cards,t)},REMOVE_TAG:function(e,t){r["a"].delete(e.tags,t)}},actions:{fetchTags:function(e){var t=e.commit;return f["a"].show(),d.getTags().then((function(e){t("SET_TAGS",e.data)})).catch((function(e){p("There was a problem fetching tags",e)})).finally((function(){return f["a"].hide()}))},saveNewTag:function(e,t){var n=e.commit;return d.postTag(t).then((function(e){n("SET_TAGS",[e.data])})).catch((function(e){p("There was a problem saving new tag",e)}))},fetchCards:function(e){var t=e.commit;return f["a"].show(),u.getCards().then((function(e){t("SET_CARDS",e.data)})).catch((function(e){p("There was a problem fetching cards",e)})).finally((function(){return f["a"].hide()}))},fetchCard:function(e,t){var n=e.commit;return f["a"].show(),u.getCard(t).then((function(e){n("SET_CARDS",[e.data])})).catch((function(e){p("There was a problem fetching a card",e)})).finally((function(){return f["a"].hide()}))},saveNewCard:function(e,t){var n=e.commit;return f["a"].show(),u.postCard(t).then((function(e){n("SET_CARDS",[e.data]),l["a"].create({type:"positive",message:"Card successfully created."})})).catch((function(e){p("There was a problem saving new card",e)})).finally((function(){return f["a"].hide()}))},updateCard:function(e,t){var n=e.commit;return f["a"].show(),u.putCard(t).then((function(){n("SET_CARDS",[t]),l["a"].create({type:"positive",message:"Card successfully updated."})})).catch((function(e){p("There was a problem saving new card",e)})).finally((function(){return f["a"].hide()}))},deleteCard:function(e,t){var n=e.commit;return f["a"].show(),u.deleteCard(t).then((function(){n("REMOVE_CARD",t),l["a"].create({type:"positive",message:"Card successfully deleted."})})).catch((function(e){p("There was a problem deleting the card",e)})).finally((function(){return f["a"].hide()}))},updateTag:function(e,t){var n=e.commit;return d.putTag(t).then((function(){l["a"].create({type:"positive",message:"Tag updated."}),n("SET_TAGS",[t])})).catch((function(e){p("There was a problem updating the tag",e)}))},deleteTag:function(e,t){var n=e.commit;return f["a"].show(),d.deleteTag(t).then((function(){n("REMOVE_TAG",t),l["a"].create({type:"positive",message:"Tag successfully deleted."})})).catch((function(e){p("There was a problem deleting the tag",e)})).finally((function(){return f["a"].hide()}))}},getters:{tagsArray:function(e){return Object.keys(e.tags).map((function(t){return e.tags[t]}))},cardsArray:function(e){return Object.keys(e.cards).map((function(t){return e.cards[t]}))}}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-layout",{attrs:{view:"lHh Lpr lFf"}},[r("q-header",{attrs:{elevated:""}},[r("q-toolbar",{staticClass:"bg-indigo-6"},[r("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),r("q-toolbar-title",[e._v(" "+e._s(e.title)+" ")]),r("div",[e._v("Para patatina")])],1)],1),r("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-2"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[r("q-list",[r("q-item-label",{attrs:{header:""}},[e._v("Navigation")]),e._l(e.navigationItems,(function(t){return r("q-item",{key:t.toRouteName,attrs:{clickable:""},on:{click:function(n){return e.navigateTo(t.toRouteName)}}},[r("q-item-section",{attrs:{avatar:""}},[r("q-icon",{attrs:{name:t.icon}})],1),r("q-item-section",[r("q-item-label",[e._v(e._s(t.label))]),r("q-item-label",{attrs:{caption:""}},[e._v(e._s(t.caption))])],1)],1)}))],2),r("img",{staticClass:"chinchilla-logo",attrs:{src:n("fbf2"),alt:"logo_chinchilla"}})],1),r("q-page-container",[r("router-view")],1)],1)},o=[],i=(n("b0c0"),n("ac1f"),n("5319"),n("498a"),{name:"LayoutDefault",data:function(){return{leftDrawerOpen:!1,navigationItems:[{icon:"home",label:"Home",caption:"Cards List",toRouteName:"Home"},{icon:"add",label:"AddCard",caption:"Add more cards",toRouteName:"AddCard"},{icon:"label",label:"Tags",caption:"Manage your tags",toRouteName:"Tags"},{icon:"format_align_left",label:"Words List",caption:"All stored words as a list",toRouteName:"WordsList"},{icon:"webhook",label:"Resources",caption:"Resources used in this app",toRouteName:"Resources"}]}},computed:{title:function(){return this.$route.name?this.$route.name.replace(/([A-Z])/g," $1").trim():"Word cards"}},methods:{navigateTo:function(e){this.$route.name!==e?this.$router.push({name:e}):this.leftDrawerOpen=!1}}}),s=i,c=(n("fc56"),n("2877")),d=n("fe09"),u=Object(c["a"])(s,a,o,!1,null,"1a8e994d",null),l=u.exports;u.options.components=Object.assign(Object.create(u.options.components||null),u.options.components||{},{QLayout:d["m"],QHeader:d["g"],QToolbar:d["q"],QBtn:d["a"],QToolbarTitle:d["r"],QDrawer:d["e"],QList:d["n"],QItemLabel:d["k"],QItem:d["j"],QItemSection:d["l"],QIcon:d["h"],QPageContainer:d["o"]});var f=n("9483");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var p=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md row items-start q-gutter-md home"},[this.cardsArray.length?n("div",{staticClass:"card-container"},[n("transition",{attrs:{name:"fade"}},[n("word-card",{directives:[{name:"show",rawName:"v-show",value:!this.isTransitioning,expression:"!this.isTransitioning"}],ref:"wordCard",attrs:{card:e.currentCard,tags:e.tags},on:{changeCard:e.changeCard,deleteCard:e.deleteCard}})],1)],1):n("div",[n("span",{staticClass:"no-cards-message"},[e._v(" There is not cards. "),n("router-link",{attrs:{to:{name:"AddCard"}}},[e._v("Add them!")])],1)])])},g=[],m=(n("3ca3"),n("ddb0"),n("96cf"),n("1da1")),v=n("4360"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"touch-swipe",rawName:"v-touch-swipe.mouse.right.left",value:e.handleSwipe,expression:"handleSwipe",modifiers:{mouse:!0,right:!0,left:!0}}],staticClass:"card",class:{"card-back_side":!e.isFrontSide},on:{click:function(t){e.isFrontSide=!e.isFrontSide}}},[n("div",{staticClass:"card__inner"},[n("q-card",{staticClass:"card__side card__front"},[n("q-card-section",[e._v(" "+e._s(e.card.word)+" ")])],1),n("q-card",{staticClass:"card__side card__back"},[n("q-card-section",[n("div",{staticClass:"card__back__word"},[e._v(e._s(e.card.word)+":")]),n("div",{staticClass:"card__back__translation"},[e._v(" "+e._s(e.card.translation)+" ")]),n("div",{staticClass:"card__back__notes-label"},[e._v("NOTES:")]),n("div",{staticClass:"card__back__notes"},[e._v(e._s(e.card.notes))]),n("div",{staticClass:"card__back__tags"},e._l(e.card.tags,(function(t){return n("q-chip",{key:t.id,attrs:{outline:"",color:"teal","text-color":"white"}},[e._v(e._s(e.tags[t.id].name))])})),1)])],1)],1)])},w=[],_={name:"WordCard",props:{card:{type:Object,required:!0},tags:{type:Object,required:!0}},data:function(){return{isFrontSide:!0}},methods:{handleSwipe:function(e){var t=e.direction;this.changeCardSide(),this.$emit("changeCard",t)},changeCardSide:function(e){this.isFrontSide=e}}},C=_,y=(n("bd92"),Object(c["a"])(C,b,w,!1,null,"38b66663",null)),T=y.exports;y.options.components=Object.assign(Object.create(y.options.components||null),y.options.components||{},{QCard:d["b"],QCardSection:d["c"],QChip:d["d"]}),y.options.directives=Object.assign(Object.create(y.options.directives||null),y.options.directives||{},{TouchSwipe:d["t"]});var S={name:"Home",beforeRouteEnter:function(e,t,n){return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([v["a"].dispatch("fetchTags"),v["a"].dispatch("fetchCards")]);case 2:n();case 3:case"end":return e.stop()}}),e)})))()},components:{WordCard:T},data:function(){return{currentIndex:0,isTransitioning:!1}},computed:{currentCard:function(){return this.currentIndex<this.cardsArray.length?this.cardsArray[this.currentIndex]:this.cardsArray[0]},cardsArray:function(){return this.$store.getters.cardsArray},tags:function(){return this.$store.state.tags}},methods:{changeCard:function(){this.isTransitioning=!0,this.$refs.wordCard.changeCardSide(!0);var e=this;setTimeout((function(){if(e.cardsArray.length>0){var t=e.currentIndex;while(t===e.currentIndex)t=Math.round(Math.random()*(e.cardsArray.length-1));e.currentIndex=t}else e.currentIndex=0;e.isTransitioning=!1}),300)},deleteCard:function(e){var t=this;this.$q.dialog({title:"Delete",message:"Are you sure you want to delete this card?",cancel:!0,persistent:!0}).onOk((function(){t.changeCard(),t.$store.dispatch("deleteCard",e)}))}}},A=S,O=(n("ab2d"),Object(c["a"])(A,h,g,!1,null,"101b7237",null)),E=O.exports;r["a"].use(p["a"]);var k=[{path:"/",name:"Home",component:E},{path:"/card",name:"AddCard",component:function(){return n.e("add-card").then(n.bind(null,"098f"))}},{path:"/card/:id",name:"EditCard",props:!0,component:function(){return n.e("add-card").then(n.bind(null,"b43e"))}},{path:"/tags",name:"Tags",component:function(){return n.e("add-card").then(n.bind(null,"1884"))}},{path:"/resources",name:"Resources",component:function(){return n.e("resources").then(n.bind(null,"93b9"))}},{path:"/words-list",name:"WordsList",component:function(){return n.e("words-list").then(n.bind(null,"a447"))}}],j=new p["a"]({mode:"history",base:"/",routes:k}),q=j,R=(n("c867"),n("1f91")),x=(n("e54f"),n("b05d")),N=n("2a19"),D=n("f508"),L=n("436b");r["a"].use(x["a"],{config:{},components:{},directives:{},plugins:{Notify:N["a"],Loading:D["a"],Dialog:L["a"]},lang:R["a"]}),r["a"].config.productionTip=!1,new r["a"]({router:q,store:v["a"],render:function(e){return e(l)}}).$mount("#app")},"9d6a":function(e,t,n){},ab2d:function(e,t,n){"use strict";var r=n("c4f1"),a=n.n(r);a.a},bd92:function(e,t,n){"use strict";var r=n("9d6a"),a=n.n(r);a.a},c4f1:function(e,t,n){},c867:function(e,t,n){},fbf2:function(e,t,n){e.exports=n.p+"img/chinchilla.5611d033.svg"},fc56:function(e,t,n){"use strict";var r=n("278d"),a=n.n(r);a.a}});
//# sourceMappingURL=app.32d086c5.js.map