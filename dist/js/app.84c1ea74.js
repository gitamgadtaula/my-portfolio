(function(t){function e(e){for(var s,n,l=e[0],r=e[1],c=e[2],d=0,f=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&f.push(i[n][0]),i[n]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,l=1;l<a.length;l++){var r=a[l];0!==i[r]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=r;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0ec7":function(t,e,a){"use strict";var s=a("6f24"),i=a.n(s);i.a},"11db":function(t,e,a){t.exports=a.p+"img/me.f046bd76.jpeg"},"13ce":function(t,e,a){t.exports=a.p+"img/travel1.fc201b93.jpg"},5648:function(t,e,a){t.exports=a.p+"img/nuxt.fd557337.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"hidden-sm-and-down",staticStyle:{width:"100%",position:"fixed"}},[s("el-row",{attrs:{type:"flex",justify:"space-evenly",gutter:12}},[s("el-col",{attrs:{span:1}}),s("span",{staticClass:"logo",attrs:{float:"left"}},[s("img",{attrs:{width:"30",src:a("7a30")}})]),s("el-col",{attrs:{span:5,offset:5}},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"home"}}),s("span",[t._v(" Home ")])],1)]),s("el-col",{attrs:{span:5}},[s("a",{staticClass:"nav-link",attrs:{href:"#about"}},[s("font-awesome-icon",{attrs:{icon:"user-alt"}}),t._v(" About me ")],1)]),s("el-col",{attrs:{span:5}},[s("a",{staticClass:"nav-link",attrs:{href:"#skill"}},[s("font-awesome-icon",{attrs:{icon:"tools"}}),t._v(" My skills ")],1)]),s("el-col",{attrs:{span:5}},[s("a",{staticClass:"nav-link",attrs:{href:"#interest"}},[s("font-awesome-icon",{attrs:{icon:"rocket"}}),t._v(" Interests ")],1)]),s("el-col",{attrs:{span:5}},[s("a",{staticClass:"nav-link",attrs:{href:"#footer"}},[s("font-awesome-icon",{attrs:{icon:"phone"}}),t._v(" Contact me ")],1)])],1)],1),s("nav",{staticClass:"hidden-md-and-up",staticStyle:{width:"100%",position:"fixed"}},[s("el-row",{attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:1}},[s("span",{staticClass:"logo",attrs:{float:"left"}},[s("img",{attrs:{width:"40",src:a("7a30")}})])]),s("el-col",{attrs:{span:4}},[s("font-awesome-icon",{staticStyle:{color:"white","font-size":"32px","margin-right":"8%"},attrs:{icon:"bars"},on:{click:function(e){t.navToggle=!t.navToggle}}})],1)],1),t.navToggle?s("div",{staticClass:"toggle"},[s("el-row",{staticClass:"nav-row",attrs:{type:"flex"}},[s("a",{attrs:{href:"#"},on:{click:function(e){t.navToggle=!1}}},[s("font-awesome-icon",{attrs:{icon:"home"}}),t._v("Home ")],1)]),s("el-row",{staticClass:"nav-row",attrs:{type:"flex"}},[s("a",{attrs:{href:"#about"},on:{click:function(e){t.navToggle=!1}}},[s("font-awesome-icon",{attrs:{icon:"user-alt"}}),t._v("About me ")],1)]),s("el-row",{staticClass:"nav-row",attrs:{type:"flex"}},[s("a",{attrs:{href:"#skill"},on:{click:function(e){t.navToggle=!1}}},[s("font-awesome-icon",{attrs:{icon:"tools"}}),t._v("My skills ")],1)]),s("el-row",{staticClass:"nav-row",attrs:{type:"flex"}},[s("a",{attrs:{href:"#interest"},on:{click:function(e){t.navToggle=!1}}},[s("font-awesome-icon",{attrs:{icon:"rocket"}}),t._v("Interests ")],1)]),s("el-row",{staticClass:"nav-row",attrs:{type:"flex"}},[s("a",{attrs:{href:"#"},on:{click:function(e){t.navToggle=!1}}},[s("font-awesome-icon",{attrs:{icon:"phone"}}),t._v("Contact me ")],1)])],1):t._e()],1),s("section",{staticClass:"particle"},[s("vue-particles",{attrs:{color:"#deaaae",shapeType:"cirle"}}),s("div",{attrs:{id:"app-container"}},[t.navToggle?s("div",{staticStyle:{"padding-top":"120px"}}):t._e(),s("header",[s("h1",{staticClass:"greet"},[t._v("Hello world !")]),s("el-row",{attrs:{type:"flex",justify:"center"}},[s("img",{staticClass:"header-img",attrs:{src:a("57e9")}})]),s("el-row",{attrs:{type:"flex",justify:"center"}},[s("el-col",{attrs:{span:24}},[s("h1",{staticClass:"header-h1"},[t._v("I'm Gitam")])])],1),s("hr"),s("el-row",{attrs:{type:"flex",justify:"center"}},[s("span",{staticStyle:{color:"#fff"}},[s("typewriter",{attrs:{speed:50,"full-erase":!1,interval:300,words:["Web developer..","UI/UX designer..","Music Freak..","Football Maniac.."],cursor:!1}}),t._v("| ")],1)]),s("el-row",{staticStyle:{"margin-top":"20px"},attrs:{type:"flex",justify:"center",gutter:24}},[s("el-col",{attrs:{xl:2,lg:2,md:1}},[s("a",{attrs:{href:"https://fb.com/giittam"}},[s("div",{staticClass:"social-icon"},[s("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}})],1)])]),s("el-col",{attrs:{xl:2,lg:2,md:1}},[s("a",{attrs:{href:"https://github.com/gitamgadtaula/"}},[s("div",{staticClass:"social-icon"},[s("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)])]),s("el-col",{attrs:{xl:2,lg:2,md:1}},[s("a",{attrs:{href:"https://twitter.com/gitamgadtaula"}},[s("div",{staticClass:"social-icon"},[s("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])]),s("el-col",{attrs:{xl:2,lg:2,md:2}},[s("a",{attrs:{href:"https://instagram.com/gitamgadtaula"}},[s("div",{staticClass:"social-icon"},[s("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)])]),s("el-col",{attrs:{xl:2,lg:2,md:2}},[s("a",{attrs:{href:"https://www.quora.com/profile/Gitam-Gadtaula"}},[s("div",{staticClass:"social-icon"},[s("font-awesome-icon",{attrs:{icon:["fab","quora"]}})],1)])]),s("el-col",{attrs:{xl:2,lg:2,md:2}},[s("a",{attrs:{href:"https://www.linkedin.com/in/gitamgadtaula/"}},[s("div",{staticClass:"social-icon"},[s("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}})],1)])])],1)],1),t._m(0)])],1),s("div",{staticStyle:{"background-color":"black"}},[s("section",{staticClass:"main hidden-sm-and-down",attrs:{id:"about"}},[s("el-row",{attrs:{type:"flex",justify:"space-between",direction:"column"}},[s("el-col",{attrs:{span:9}},[s("img",{staticClass:"main-img",attrs:{src:a("11db")}})]),s("el-col",{attrs:{span:15}},[s("h1",{staticClass:"header-h1",staticStyle:{color:"#111110"}},[t._v("About Myself")]),s("h2",{staticStyle:{"margin-top":"10px","font-weight":"200"}},[t._v(" I'm Gitam Gadtaula. "),s("p",{staticStyle:{"font-size":"18px","font-weight":"400"}},[t._v(" A simple, creative and a fun-loving person who likes to create things out of imagination. ")]),s("p",{staticStyle:{"font-size":"18px","font-weight":"400","padding-top":"6px"}},[t._v(' I am just among any other sapiens who strolls around with some purpose and ambition in their life. In the meantime I also find myself to be carefree because somebody said, "worry does not empty tomorrow of its sorrow, it empties today of its strength". I prefer to think myself as a citizen of this obsolete singularity since these borders are merely a construct. I enjoy nature, literature, art, technology and computers, adventure, just to name a few. And when I look at people I sometimes make myself try and feel them as more than just a random person walking by. ')])])])],1)],1),s("section",{staticClass:"main hidden-md-and-up"},[s("el-row",{attrs:{type:"flex",justify:"space-between",direction:"column"}},[s("el-col",{attrs:{span:4}},[s("img",{staticClass:"main-img",staticStyle:{width:"120px","border-radius":"50%"},attrs:{src:a("11db")}})])],1),s("el-row",[s("el-col",{attrs:{span:24}},[s("h1",{staticClass:"header-h1",staticStyle:{color:"#111110"}},[t._v("About myself")]),s("h2",{staticStyle:{"margin-top":"10px","font-weight":"200"}},[t._v(" I'm Gitam Gadtaula. "),s("p",{staticStyle:{"font-size":"15px","font-weight":"400"}},[t._v(" A simple, creative and a fun-loving person who likes to create things out of imagination. ")]),s("br"),s("p",{staticStyle:{"font-size":"15px","font-weight":"400"}},[t._v(' I am just among any other sapiens who strolls around with some purpose and ambition in their life. In the meantime I also find myself to be carefree because somebody said, "worry does not empty tomorrow of its sorrow, it empties today of its strength". I prefer to think myself as a citizen of this obsolete singularity since these borders are merely a construct. I enjoy nature, literature, art, technology and computers, adventure, just to name a few. And when I look at people I sometimes make myself try and feel them as more than just a random person walking by. ')])])])],1)],1),s("section",{staticClass:"work"},[s("el-row",{attrs:{type:"flex",justify:"space-between"}},[s("el-col",{staticClass:"animated bounceInRight",staticStyle:{"text-align":"left"},attrs:{span:12}},[s("h1",[t._v(" Education "),s("font-awesome-icon",{attrs:{icon:"university"}})],1),s("h3",[t._v(" Computer science "),s("font-awesome-icon",{attrs:{icon:"graduation-cap"}})],1),s("h2",[t._v("Kathmandu University")])]),s("el-col",{staticClass:"animated bounceInLeft",staticStyle:{"text-align":"right"},attrs:{span:12}},[s("h1",[s("font-awesome-icon",{attrs:{icon:"building"}}),t._v(" Work ")],1),s("h3",[s("font-awesome-icon",{attrs:{icon:"terminal"}}),t._v(" Web Developer ")],1),s("h2",[t._v("Rasello Nepal")])])],1)],1)]),s("section",{staticClass:"skill",attrs:{id:"skill"}},[s("h1",{staticClass:"header-h1"},[t._v(" MY SKILLS "),s("font-awesome-icon",{attrs:{icon:"tools"}})],1),s("div",{staticStyle:{"margin-top":"20px",color:"white"}},[s("p",{staticClass:"skill-desc"},[t._v(" I'm a fresh computer science graduate and a web developer by profession. I have been doing computer programming since back in 8th standard in school. For me, its another way of me expressing things and I am more than delighted to actually make a living out of it. I like being acquainted with new technologies, solving problems, automating things on web, and I'm also a very keen enthusiast of Machine learning and Data science. My skills are listed below but are not only limited to : ")]),s("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:11}},[s("p",{staticClass:"skill-name"},[t._v("HTML5")]),s("div",{staticClass:"skill-container"},[s("div",{staticClass:"skill-container-child",staticStyle:{width:"90%"}})])]),s("el-col",{attrs:{span:11}},[s("p",{staticClass:"skill-name"},[t._v("CSS3/Sass")]),s("div",{staticClass:"skill-container"},[s("div",{staticClass:"skill-container-child",staticStyle:{width:"90%"}})])])],1),s("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:11}},[s("p",{staticClass:"skill-name"},[t._v("Javascript")]),s("div",{staticClass:"skill-container"},[s("div",{staticClass:"skill-container-child",staticStyle:{width:"75%"}})])]),s("el-col",{attrs:{span:11}},[s("p",{staticClass:"skill-name"},[t._v("PHP")]),s("div",{staticClass:"skill-container"},[s("div",{staticClass:"skill-container-child",staticStyle:{width:"80%"}})])])],1),s("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:11}},[s("p",{staticClass:"skill-name"},[t._v("Vue js")]),s("div",{staticClass:"skill-container"},[s("div",{staticClass:"skill-container-child",staticStyle:{width:"70%"}})])]),s("el-col",{attrs:{span:11}},[s("p",{staticClass:"skill-name"},[t._v("Laravel")]),s("div",{staticClass:"skill-container"},[s("div",{staticClass:"skill-container-child",staticStyle:{width:"65%"}})])])],1),s("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:11}},[s("p",{staticClass:"skill-name"},[t._v("Python")]),s("div",{staticClass:"skill-container"},[s("div",{staticClass:"skill-container-child",staticStyle:{width:"50%"}})])]),s("el-col",{attrs:{span:11}},[s("p",{staticClass:"skill-name"},[t._v("Photoshop")]),s("div",{staticClass:"skill-container"},[s("div",{staticClass:"skill-container-child",staticStyle:{width:"55%"}})])])],1)],1)]),s("div",{},[s("section",{staticClass:"interest",attrs:{id:"interest"}},[s("h1",{staticClass:"header-h1",staticStyle:{"margin-bottom":"10px"}},[t._v(" MY INTERESTS "),s("font-awesome-icon",{attrs:{icon:"rocket"}})],1),s("carousel-3d",{staticStyle:{border:"none"},attrs:{width:620,height:560,autoplay:!0,"autoplay-timeout":5e3,"controls-visible":!0}},t._l(t.assets,(function(e,a){return s("slide",{key:a,attrs:{index:a},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.index,o=a.isCurrent,n=a.leftIndex,l=a.rightIndex;return[s("img",{class:{current:o,onLeft:n>=0,onRight:l>=0},attrs:{"data-index":i,src:e.img}}),s("h3",{staticClass:"c-caption"},[t._v(t._s(e.caption))]),s("h3",{staticClass:"c-desc"},[t._v(t._s(e.desc))])]}}],null,!0)})})),1)],1),s("section",{staticClass:"footer",attrs:{id:"footer"}},[t._v(" Made with "),s("span",{staticStyle:{color:"red"}},[s("font-awesome-icon",{attrs:{icon:"heart"}})],1),t._v(" in Quarantine. "),s("p",[s("font-awesome-icon",{attrs:{icon:"envelope"}}),t._v(" gitamgadtaula@gmail.com ")],1),s("p",[s("font-awesome-icon",{attrs:{icon:"map-marker-alt"}}),t._v(" Kathmandu Nepal ")],1),s("div",{staticStyle:{"max-width":"50%","margin-left":"auto","margin-right":"auto",display:"block"}},[s("el-divider",[s("el-col",{attrs:{span:3}},[s("i",{staticClass:"el-icon-star-on"})])],1)],1),s("h3",{staticStyle:{"margin-bottom":"10px"}},[t._v("Powered by")]),s("img",{attrs:{src:a("cf05"),height:"40"}}),s("img",{attrs:{src:a("5648"),height:"40"}}),s("img",{attrs:{src:a("84be"),height:"40"}})])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mousey"},[a("div",{staticClass:"scroller"})])}],n=a("58d7"),l=a("8ab0"),r=a("13ce"),c={name:"App",data:function(){return{navToggle:!1,assets:[{img:n,caption:"Football",desc:"Football is not just another game, it's emotion. We don't have to speak or dress a certain way or even know the same language to communicate with another football fan or a player. It's a sport for the whole universe."},{img:l,caption:"Music",desc:"Music is far more than just a pleasant sound to the ear. I never find myself alone cause wherever I go music goes along with me. I love playing guitar, its therapeutic and releases a hepty amount of dopamine in my brains."},{img:r,caption:"Travelling",desc:"Travelling helps open my mind. You realize that there's no one way to live life. Meeting people from other places will show you that your world view isn't the same as everyone else's.  By being exposed to new places, people and cultures, it helps me develop a wider world view."}]}}},p=c,d=(a("0ec7"),a("2877")),f=Object(d["a"])(p,i,o,!1,null,"50f3a532",null),m=f.exports,u=a("98c9"),h=a("7d8c"),g=a.n(h),v=(a("0fae"),a("e05f"),a("77ed"),a("7d05"),a("5c96")),w=a.n(v),y=a("3cf7"),b=a.n(y),k=a("ecee"),C=a("c074"),x=a("f2d1"),_=a("ad3d");k["c"].add(C["a"],x["a"]),s["default"].component("font-awesome-icon",_["a"]),s["default"].use(b.a),s["default"].use(w.a),s["default"].use(g.a),s["default"].use(u["a"]),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(m)}}).$mount("#app")},"57e9":function(t,e,a){t.exports=a.p+"img/3.67fa1cad.jpeg"},"58d7":function(t,e,a){t.exports=a.p+"img/football2.b363775c.jpg"},"6f24":function(t,e,a){},"7a30":function(t,e,a){t.exports=a.p+"img/gitam.c2b5539d.png"},"7d05":function(t,e,a){},"84be":function(t,e,a){t.exports=a.p+"img/element.ba99f6df.svg"},"8ab0":function(t,e,a){t.exports=a.p+"img/guitar.38770dc8.jpg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.84c1ea74.js.map