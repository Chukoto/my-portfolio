(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],m=0,u=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,o=1;o<i.length;o++){var c=i[o];0!==n[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},n={app:0},s=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var p=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("Header"),i("SideNav"),i("v-main",[i("v-container",[i("router-view")],1)],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"outer-wrapper"}},[i("div",{attrs:{id:"inner-wrapper"}},[i("v-app-bar",{staticStyle:{position:"fixed",left:"0",top:"0",width:"100vw","z-index":"199"},attrs:{absolute:"",dark:"",color:"light-blue accent-3;",short:""},scopedSlots:t._u([{key:"extension",fn:function(){return[i("v-tabs",{staticClass:"hidden-xs-only",attrs:{"align-with-title":""}},[i("v-tab",{attrs:{to:{name:"Home"}}},[t._v("Home")]),i("v-tab",{attrs:{to:{name:"About"}}},[t._v("About")]),i("v-tab",{attrs:{to:{name:"Skill"}}},[t._v("Skill")]),i("v-tab",[t._v("Portfolio")]),i("v-tab",{attrs:{to:{name:"Contact"}}},[t._v("Contact")])],1),i("v-spacer")]},proxy:!0}])},[i("v-app-bar-title",{staticClass:"text-h5"},[t._v("My Portfolio")]),i("v-spacer"),i("v-app-bar-nav-icon",{staticClass:"hidden-sm-and-up",on:{click:t.toggleSideNav}})],1)],1)])},o=[],c=i("5530"),l=i("2f62"),p={name:"Header",data:function(){return{}},methods:Object(c["a"])({},Object(l["b"])(["toggleSideNav"]))},m=p,u=(i("ade5"),i("2877")),d=i("6544"),v=i.n(d),h=i("40dc"),f=i("5bc1"),b=i("bb78"),g=i("2fa4"),_=i("71a3"),x=i("fe57"),y=Object(u["a"])(m,r,o,!1,null,"5ce09488",null),w=y.exports;v()(y,{VAppBar:h["a"],VAppBarNavIcon:f["a"],VAppBarTitle:b["a"],VSpacer:g["a"],VTab:_["a"],VTabs:x["a"]});var C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-sheet",{staticClass:"overflow-hidden"},[i("v-navigation-drawer",{staticStyle:{position:"fixed",right:"0",top:"0","z-index":"200"},attrs:{absolute:"",temporary:"",right:""},model:{value:t.$store.state.drawer,callback:function(e){t.$set(t.$store.state,"drawer",e)},expression:"$store.state.drawer"}},[i("v-list",{attrs:{dense:""}},t._l(t.items,(function(e,a){return i("v-list-item",{key:a,attrs:{to:e.link}},[i("v-list-item-icon",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)},k=[],S={data:function(){return{drawer:null,items:[{title:"Home",icon:"mdi-home",link:{name:"Home"}},{title:"About",icon:"mdi-emoticon",link:{name:"About"}},{title:"Skill",icon:"mdi-brain",link:{name:"Skill"}},{title:"Portfolio",icon:"mdi-note-multiple",link:{name:"Portfolio"}},{title:"Contact",icon:"mdi-email",link:{name:"Contact"}}]}}},L=S,V=i("132d"),j=i("8860"),P=i("da13"),H=i("5d23"),O=i("34c3"),A=i("f774"),I=i("8dd9"),T=Object(u["a"])(L,C,k,!1,null,null,null),D=T.exports;v()(T,{VIcon:V["a"],VList:j["a"],VListItem:P["a"],VListItemContent:H["a"],VListItemIcon:O["a"],VListItemTitle:H["b"],VNavigationDrawer:A["a"],VSheet:I["a"]});var $={name:"App",components:{Header:w,SideNav:D},data:function(){return{}}},M=$,B=i("7496"),E=i("a523"),z=i("f6c4"),N=Object(u["a"])(M,n,s,!1,null,null,null),R=N.exports;v()(N,{VApp:B["a"],VContainer:E["a"],VMain:z["a"]});var Q=i("8c4f"),J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"home-wrapper"}},[i("div",[i("transition",[t.show?i("div",{attrs:{id:"bright-switcher"}}):t._e()]),i("div",{style:{opacity:t.opacity},attrs:{id:"bright-adjuster"}})],1),i("div",{attrs:{id:"back"}},[t._m(0),i("div",{staticClass:"animation-delay fade-up",attrs:{id:"remocon-body"}},[i("button",{staticClass:"pulse-btn",attrs:{id:"power-btn"},on:{click:function(e){t.show=!t.show}}},[i("v-list-item-icon",[i("v-icon",{attrs:{size:t.sizes["default"]}},[t._v("mdi-power")])],1)],1),i("button",{attrs:{id:"incr-btn"},on:{click:t.increaseBrightness}},[i("v-list-item-icon",[i("v-icon",{attrs:{size:t.sizes["default"]}},[t._v("mdi-chevron-up")])],1)],1),i("button",{attrs:{id:"decr-btn"},on:{click:t.decreaseBrightness}},[i("v-list-item-icon",[i("v-icon",{attrs:{size:t.sizes["default"]}},[t._v("mdi-chevron-down")])],1)],1),i("button",{attrs:{id:"incr-max-btn"},on:{click:t.increaseMaxBrightness}},[i("v-list-item-icon",[i("v-icon",{attrs:{size:t.sizes["small"]}},[t._v("mdi-brightness-5")])],1)],1)])])])},W=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{staticClass:"text-center grey--text text--darken-5"},[i("div",{attrs:{id:"first-text"}},[t._v("Haruki's room")])])}],q=(i("ac1f"),i("1276"),{data:function(){return{show:!1,opacity:0,sizes:{"x-small":"1rem",small:"2rem",default:"3rem",medium:"4rem",large:"5rem","x-large":"6rem"}}},methods:{increaseBrightness:function(){this.opacity>=.1&&!1===this.show&&(this.opacity-=.1)},decreaseBrightness:function(){this.opacity<.7&&!1===this.show&&(this.opacity+=.1)},increaseMaxBrightness:function(){this.opacity>0&&!1===this.show&&(this.opacity=0)}},mounted:function(){var t=this.$el.querySelector("#first-text"),e=t.textContent;t.textContent="";for(var i=e.split(""),a=[],n=0;n<i.length;n++){var s=i[n];" "===s?a.push(" "):a.push('<span><span style="animation-delay: '+.1*n+'s;">'+s+"</span></span>")}a.forEach((function(e){t.innerHTML+=e}))}}),F=q,U=(i("ab9b"),Object(u["a"])(F,J,W,!1,null,"11a79ce6",null)),K=U.exports;v()(U,{VIcon:V["a"],VListItemIcon:O["a"]});var G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"mb-5"},[i("h2",{staticClass:"text-center my-5"},[t._v(" About this site ")]),i("v-row",[i("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"1"}},[i("p",[i("img",{attrs:{src:"https://img.icons8.com/color/100/000000/document--v1.png"}})])]),i("v-col",{staticClass:"hidden-xs-only"},[i("p",{staticClass:"text-center"},[t._v(" ここはエンジニアHarukiのポートフォリオサイトです。"),i("br"),t._v(" これまでに手がけた制作物、身につけたスキルをまとめています。"),i("br"),t._v(" 皆さんに、より私のことを知ってほしいと思って作りました。"),i("br"),t._v(" どうぞ、ごゆっくりとサイト内を散策してください。 ")])])],1),i("v-row",[i("v-col",{staticClass:"hidden-sm-and-up"},[i("p",{staticClass:"text-center"},[t._v(" ここはエンジニアHarukiのポートフォリオサイトです。 これまでに手がけた制作物、身につけたスキルをまとめています。 皆さんに、より私のことを知ってほしいと思って作りました。 どうぞ、ごゆっくりとサイト内を散策してください。 ")])])],1)],1),i("v-divider"),i("div",{staticClass:"mt-8"},[i("h2",{staticClass:"text-center my-5"},[t._v(" About me ")]),i("div",[i("v-row",[i("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"1"}},[i("p",[i("img",{attrs:{src:"https://img.icons8.com/clouds/100/000000/kawaii-bread-1.png"}})])]),i("v-col",{staticClass:"hidden-xs-only",attrs:{cols:"11"}},[i("p",{staticClass:"text-center"},[t._v(" 神奈川県出身のエンジニア。大学で外国語学部・英語英文学科を専攻。"),i("br"),t._v(" 卒業後は電子部品を扱う専門商社に入社。"),i("br"),t._v(" その後、IT技術に惹かれ、IT業界へ転身。"),i("br"),t._v(" バックエンドエンジニアとして入社したものの、フロントエンドに興味を持っている。 ")])]),i("v-col",{staticClass:"hidden-sm-and-up",attrs:{cols:"12"}},[i("p",[t._v(" 神奈川県出身のエンジニア。大学で外国語学部・英語英文学科を専攻。 卒業後は電子部品を扱う専門商社に入社。 その後、IT技術に惹かれ、IT業界へ転身。 バックエンドエンジニアとして入社したものの、フロントエンドに興味を持っている。 ")])])],1)],1)]),t._m(0)],1)},X=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("a",{staticClass:"text-caption cyan--text text--lighten-5",attrs:{href:"https://icons8.com/icon/ofy7JDxeW34D/kawaii-bread"}},[t._v("Kawaii Soda icon by Icons8 ")]),i("br"),i("a",{staticClass:"text-caption cyan--text text--lighten-5",attrs:{href:"https://icons8.com/icon/12053/document"}},[t._v("Document icon by Icons8 ")])])}],Y={},Z=Y,tt=i("62ad"),et=i("ce7e"),it=i("0fd9"),at=Object(u["a"])(Z,G,X,!1,null,null,null),nt=at.exports;v()(at,{VCol:tt["a"],VDivider:et["a"],VRow:it["a"]});var st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",{staticClass:"text-center my-5"},[t._v(" Skill ")]),t._m(0),i("v-row",t._l(t.skills,(function(e,a){return i("v-col",{key:a,staticClass:"mb-5",attrs:{cols:"12",sm:"6"}},[i("div",{staticClass:"d-flex"},[i("p",{staticClass:"text-center hidden-sm-and-up",attrs:{cols:"12",sm:"1"}},[i("img",{attrs:{src:e.imageLink,alt:e.alt}})]),i("p",{staticClass:"hidden-xs-only",attrs:{cols:"12",sm:"1"}},[i("img",{attrs:{src:e.imageLink,alt:e.alt}})]),e.experience?i("p",{staticClass:"green--text"},[t._v(" ● ")]):t._e()]),i("p",{staticClass:"ml-2 font-weight-bold"},[t._v(" "+t._s(e.name)+" ")]),i("p",[t._v(" "+t._s(e.description)+" ")]),i("v-divider")],1)})),1)],1)},rt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",[i("span",{staticClass:"green--text"},[t._v("●")]),t._v(" = 実務経験あり")])])}],ot={name:"Skill",data:function(){return{skills:[{name:"HTML",imageLink:"https://img.icons8.com/color/48/000000/html-5--v1.png",alt:"htmlのロゴ",description:"HTMLを使用して、スムーズに静的なWebサイトを構築できる。CSS3と組み合わせてコーディングすることができる。",experience:!1},{name:"CSS",imageLink:"https://img.icons8.com/color/48/000000/css3.png",alt:"cssのロゴ",description:"CSSを使用したアニメーションを実装することができる。HTML5と組み合わせてコーディングすることができる。",experience:!1},{name:"JavaScript",imageLink:"https://img.icons8.com/color/48/000000/javascript--v1.png",alt:"JavaScriptのロゴ",description:"JavaScriptと HTML/CSS を駆使して、動的なWebサイトを構築できる。Create.jsでゲーム開発ができる。",experience:!0},{name:"Vue.js",imageLink:"https://img.icons8.com/color/48/000000/vue-js.png",alt:"Vue.jsのロゴ",description:"VueCLI, VueRouter, Vuetify, Vuexを利用し、SFCを扱ったWebサイトを構築できる。",experience:!1},{name:"Bootstrap",imageLink:"https://img.icons8.com/color/48/000000/bootstrap.png",alt:"Bootstrapのロゴ",description:"Bootstrapを用いて、ブラウザ環境に最適なレスポンシブWebデザインのサイトを作ることができる。",experience:!1},{name:"SQL",imageLink:"https://img.icons8.com/fluency/48/000000/database.png",alt:"SQLのロゴ",description:"DDL, DMLを用いたデータの定義や顧客データなどを扱うSQL操作できる。",experience:!0},{name:"mySQL",imageLink:"https://img.icons8.com/color/48/000000/mysql-logo.png",alt:"mySQLのロゴ",description:"mySQL・PostgreSQLを用いた実際のDB管理及びCRUD処理操作などができる。",experience:!0},{name:"Ruby",imageLink:"https://img.icons8.com/color/48/000000/ruby-programming-language.png",alt:"Rubyのロゴ",description:"簡単なCRUD処理を用いたアプリケーションの作成ができる。人生で一番初めに勉強をしたプログラミング言語。",experience:!1},{name:"PHP",imageLink:"https://img.icons8.com/dusk/48/000000/php-logo.png",alt:"PHPのロゴ",description:"PHP（FuelPHP、Laravel）を用いたアプリケーションの作成・改修作業ができる。（建築業界向けの経験あり）",experience:!0},{name:"Adobe Animate",imageLink:"https://img.icons8.com/color/48/000000/adobe-animate.png",alt:"Adobe Animateのロゴ",description:"Animateと組み合わせて、作成されたイラストの細かい挙動の調整・データの可視化ができる。",experience:!0},{name:"Adobe Illustrator",imageLink:"https://img.icons8.com/color/48/000000/adobe-illustrator--v1.png",alt:"Adobe Illustratorのロゴ",description:"イラストのデザイン調整・修正・切り取り作業の実務経験あり。",experience:!0},{name:"Docker",imageLink:"https://img.icons8.com/fluency/48/000000/docker.png",alt:"Dockerのロゴ",description:"Dockerを用いた、コンテナ仮想化・アプリケーション開発ができる。CentOS Stream, Apache 2.4.48, PHP 8.0.8, Larvel 8 の構築経験あり",experience:!0}]}}},ct=ot,lt=Object(u["a"])(ct,st,rt,!1,null,null,null),pt=lt.exports;v()(lt,{VCol:tt["a"],VDivider:et["a"],VRow:it["a"]});var mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",{staticClass:"text-center my-5"},[t._v(" Contact ")]),i("v-row",[i("v-col",{attrs:{cols:"2"}}),i("v-col",{attrs:{cols:"8"}},[i("p",[t._v(" 最後までご覧いただきありがとうございました。このサイトを通して、私のことを少しでも知っていただき幸いです。もしこのサイトや私について何かコメントがありましたら、下記よりTwitterのDMをご利用ください。 ")]),i("p",{staticClass:"text-center"},[i("a",{staticClass:"text-decoration-none",attrs:{href:"https://twitter.com/messages/compose?recipient_id=1308048457735651329",target:"_blank",rel:"noopener noreferrer"}},[i("img",{attrs:{src:"https://img.icons8.com/clouds/200/000000/twitter.png",alt:"Twitterのロゴ"}}),i("br"),i("span",{staticClass:"text-h5"},[t._v(" DMを送る ")])])]),i("v-col",{attrs:{cols:"2"}})],1)],1),t._m(0)],1)},ut=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("a",{attrs:{href:"https://icons8.com/icon/64156/twitter"}},[t._v("Twitter icon by Icons8 ")])])}],dt={name:"Contact",data:function(){return{contents:{name:'m&#97;i&#108;t&#111;:i&#97;&#109;p&#114;iv&#97;&#116;ee&#110;&#103;ineer&#64;&#103;&#109;&#97;&#105;l&#46;&#99;&#111;m">i&#97;&#109;p&#114;iv&#97;&#116;ee&#110;&#103;ineer&#64;&#103;&#109;&#97;&#105;l&#46;&#99;&#111;m'}}}},vt=dt,ht=Object(u["a"])(vt,mt,ut,!1,null,null,null),ft=ht.exports;v()(ht,{VCol:tt["a"],VRow:it["a"]}),a["a"].use(Q["a"]);var bt=[{path:"/",name:"Home",component:K},{path:"/about",name:"About",component:nt},{path:"/skill",name:"Skill",component:pt},{path:"/contact",name:"Contact",component:ft}],gt=new Q["a"]({mode:"history",base:"",routes:bt}),_t=gt;a["a"].use(l["a"]);var xt=new l["a"].Store({state:{drawer:!1},mutations:{toggleSideNav:function(t){t.drawer=!t.drawer}},actions:{toggleSideNav:function(t){var e=t.commit;e("toggleSideNav")}},modules:{}}),yt=i("f309");a["a"].use(yt["a"]);var wt=new yt["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:_t,store:xt,vuetify:wt,render:function(t){return t(R)}}).$mount("#app")},"94d7":function(t,e,i){},ab9b:function(t,e,i){"use strict";i("94d7")},ade5:function(t,e,i){"use strict";i("d630")},d630:function(t,e,i){}});
//# sourceMappingURL=app.7a41276e.js.map