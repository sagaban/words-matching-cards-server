(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"098f":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-pa-md add-card"},[n("h4",[t._v("Add a new word")]),n("q-form",{ref:"cardForm",staticClass:"q-gutter-md",on:{submit:t.onSubmit,reset:t.onReset}},[n("q-input",{attrs:{filled:"",label:"Word to learn","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Please type something"}]},model:{value:t.word,callback:function(e){t.word=e},expression:"word"}}),n("q-input",{attrs:{filled:"",label:"Word translation","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Please type something"}]},model:{value:t.translation,callback:function(e){t.translation=e},expression:"translation"}}),n("q-input",{attrs:{filled:"",type:"textarea",label:"Notes","lazy-rules":""},model:{value:t.notes,callback:function(e){t.notes=e},expression:"notes"}}),n("q-select",{attrs:{"use-input":"","input-debounce":"0",multiple:"","use-chips":"",options:t.filteredOptions,label:"Tags"},on:{"new-value":t.createTag,filter:t.tagFilter},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}}),n("div",[n("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}}),n("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",color:"primary",flat:""}})],1)],1)],1)},a=[],s=(n("4de4"),n("4160"),n("caad"),n("d81d"),n("fb6a"),n("b0c0"),n("ac1f"),n("2532"),n("1276"),n("498a"),n("159b"),n("96cf"),n("1da1")),i=n("4360"),o={name:"AddWord",beforeRouteEnter:function(t,e,n){return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].dispatch("fetchTags");case 2:n();case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{word:null,translation:null,notes:null,tags:[],filteredOptions:[]}},computed:{tagsArray:function(){return this.$store.getters.tagsArray},tagsStringArray:function(){return this.tagsArray.map((function(t){return t.name}))}},methods:{tagFilter:function(t,e){var n=this;e(""!==t?function(){if(n.tagsStringArray&&n.tagsStringArray.length){var e=t.toLowerCase();n.filteredOptions=n.tagsStringArray.filter((function(t){return t.toLowerCase().includes(e)}))}}:function(){n.filteredOptions=n.tagsStringArray})},createTag:function(t,e){var n=this;if(t.length>0){var r=(this.tags||[]).slice();t.split(/[,;|]+/).map((function(t){return t.trim()})).filter((function(t){return t.length>0})).forEach((function(t){n.tagsStringArray.includes(t)||n.$store.dispatch("saveNewTag",{name:t}),r.includes(t)||r.push(t)})),e(r),this.tags=r}},onSubmit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.word&&t.translation)try{n=t.tagsArray.filter((function(e){return t.tags.includes(e.name)})).map((function(t){return t.id})),t.$store.dispatch("saveNewCard",{word:t.word,translation:t.translation,notes:t.notes,tags:n}),t.onReset()}catch(r){console.log(r)}else t.$w.notify({type:"warning",message:"'Word and Translation field are mandatory."});case 1:case"end":return e.stop()}}),e)})))()},onReset:function(){this.word=null,this.translation=null,this.notes=null,this.tags=[],this.$refs.cardForm.resetValidation()}}},l=o,u=(n("c0ce"),n("2877")),c=n("fe09"),d=Object(u["a"])(l,r,a,!1,null,"20f35bc3",null);e["default"]=d.exports;d.options.components=Object.assign(Object.create(d.options.components||null),d.options.components||{},{QForm:c["f"],QInput:c["i"],QSelect:c["p"],QBtn:c["a"]})},1884:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Tags ")])},a=[],s={},i=s,o=n("2877"),l=Object(o["a"])(i,r,a,!1,null,"5b51129d",null);e["default"]=l.exports},a1d4:function(t,e,n){},c0ce:function(t,e,n){"use strict";var r=n("a1d4"),a=n.n(r);a.a}}]);
//# sourceMappingURL=about.d7e52aaf.js.map