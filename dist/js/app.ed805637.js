(function(t){function a(a){for(var s,n,l=a[0],c=a[1],r=a[2],f=0,d=[];f<l.length;f++)n=l[f],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(a);while(d.length)d.shift()();return o.push.apply(o,r||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],s=!0,l=1;l<e.length;l++){var c=e[l];0!==i[c]&&(s=!1)}s&&(o.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},i={app:0},o=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var r=0;r<l.length;r++)a(l[r]);var p=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"11db":function(t,a,e){t.exports=e.p+"img/me.f046bd76.jpeg"},"13ce":function(t,a,e){t.exports=e.p+"img/travel1.fc201b93.jpg"},5648:function(t,a,e){t.exports=e.p+"img/nuxt.fd557337.png"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"hidden-sm-and-down",staticStyle:{width:"100%",position:"fixed"}},[s("el-row",{attrs:{type:"flex",justify:"space-evenly",gutter:12}},[s("el-col",{attrs:{span:1}}),s("span",{staticClass:"logo",attrs:{float:"left"}},[s("img",{attrs:{width:"30",src:e("7a30")}})]),s("el-col",{attrs:{span:5,offset:5}},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[s("font-awesome-icon",{attrs:{icon:"home"}}),s("span",[t._v(" Home ")])],1)]),s("el-col",{attrs:{span:5}},[s("a",{staticClass:"nav-link",attrs:{href:"#about"}},[s("font-awesome-icon",{attrs:{icon:"user-alt"}}),t._v(" About me ")],1)]),s("el-col",{attrs:{span:5}},[s("a",{staticClass:"nav-link",attrs:{href:"#skill"}},[s("font-awesome-icon",{attrs:{icon:"tools"}}),t._v(" My skills ")],1)]),s("el-col",{attrs:{span:5}},[s("a",{staticClass:"nav-link",attrs:{href:"#interest"}},[s("font-awesome-icon",{attrs:{icon:"rocket"}}),t._v(" Interests ")],1)]),s("el-col",{attrs:{span:5}},[s("a",{staticClass:"nav-link",attrs:{href:"#footer"}},[s("font-awesome-icon",{attrs:{icon:"phone"}}),t._v(" Contact me ")],1)])],1)],1),s("nav",{staticClass:"hidden-md-and-up",staticStyle:{width:"100%",position:"fixed"}},[s("el-row",{attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:1}},[s("span",{staticClass:"logo",attrs:{float:"left"}},[s("img",{attrs:{width:"40",src:e("7a30")}})])]),s("el-col",{attrs:{span:4}},[s("font-awesome-icon",{staticStyle:{color:"white","font-size":"32px","margin-right":"8%"},attrs:{icon:"bars"},on:{click:function(a){t.navToggle=!t.navToggle}}})],1)],1),t.navToggle?s("div",{staticClass:"toggle"},[s("el-row",{staticClass:"nav-row",attrs:{type:"flex"}},[s("a",{attrs:{href:"#"},on:{click:function(a){t.navToggle=!1}}},[s("font-awesome-icon",{attrs:{icon:"home"}}),t._v("Home ")],1)]),s("el-row",{staticClass:"nav-row",attrs:{type:"flex"}},[s("a",{attrs:{href:"#about"},on:{click:function(a){t.navToggle=!1}}},[s("font-awesome-icon",{attrs:{icon:"user-alt"}}),t._v("About me ")],1)]),s("el-row",{staticClass:"nav-row",attrs:{type:"flex"}},[s("a",{attrs:{href:"#skill"},on:{click:function(a){t.navToggle=!1}}},[s("font-awesome-icon",{attrs:{icon:"tools"}}),t._v("My skills ")],1)]),s("el-row",{staticClass:"nav-row",attrs:{type:"flex"}},[s("a",{attrs:{href:"#interest"},on:{click:function(a){t.navToggle=!1}}},[s("font-awesome-icon",{attrs:{icon:"rocket"}}),t._v("Interests ")],1)]),s("el-row",{staticClass:"nav-row",attrs:{type:"flex"}},[s("a",{attrs:{href:"#"},on:{click:function(a){t.navToggle=!1}}},[s("font-awesome-icon",{attrs:{icon:"phone"}}),t._v("Contact me ")],1)])],1):t._e()],1),s("section",{staticClass:"particle"},[s("vue-particles",{attrs:{color:"#deaaae",shapeType:"cirle"}}),s("div",{attrs:{id:"app-container"}},[t.navToggle?s("div",{staticStyle:{"padding-top":"120px"}}):t._e(),s("header",[s("h1",{staticClass:"greet"},[t._v("Hello world !")]),s("el-row",{attrs:{type:"flex",justify:"center"}},[s("img",{staticClass:"header-img",attrs:{src:e("57e9")}})]),s("el-row",{attrs:{type:"flex",justify:"center"}},[s("el-col",{attrs:{span:24}},[s("h1",{staticClass:"header-h1",staticStyle:{border:"none"}},[t._v("I'm Gitam")])])],1),s("hr",{staticStyle:{width:"50%"}}),s("el-row",{attrs:{type:"flex",justify:"center"}},[s("span",{staticStyle:{color:"#fff"}},[s("typewriter",{attrs:{speed:50,"full-erase":!1,interval:300,words:["Web developer..","UI/UX designer..","Music Freak..","Football Maniac.."],cursor:!1}}),t._v("| ")],1)]),s("el-row",{staticStyle:{"margin-top":"20px"},attrs:{type:"flex",justify:"center",gutter:24}},[s("el-col",{staticClass:"social-icon"},[s("a",{attrs:{href:"https://fb.com/giittam"}},[s("div",{staticClass:"social-ico"},[s("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}})],1)])]),s("el-col",{staticClass:"social-icon"},[s("a",{attrs:{href:"https://github.com/gitamgadtaula/"}},[s("div",{staticClass:"social-ico"},[s("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)])]),s("el-col",{staticClass:"social-icon"},[s("a",{attrs:{href:"https://twitter.com/gitamgadtaula"}},[s("div",{staticClass:"social-ico"},[s("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])]),s("el-col",{staticClass:"social-icon"},[s("a",{attrs:{href:"https://instagram.com/gitamgadtaula"}},[s("div",{staticClass:"social-ico"},[s("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)])]),s("el-col",{staticClass:"social-icon"},[s("a",{attrs:{href:"https://www.quora.com/profile/Gitam-Gadtaula"}},[s("div",{staticClass:"social-ico"},[s("font-awesome-icon",{attrs:{icon:["fab","quora"]}})],1)])]),s("el-col",{staticClass:"social-icon"},[s("a",{attrs:{href:"https://www.linkedin.com/in/gitamgadtaula/"}},[s("div",{staticClass:"social-ico"},[s("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}})],1)])])],1)],1),t._m(0)])],1),s("section",{staticClass:"main hidden-sm-and-down",attrs:{id:"about"}},[s("el-row",{attrs:{type:"flex",justify:"space-between",direction:"column"}},[s("el-col",{attrs:{span:9}},[s("img",{staticClass:"main-img",attrs:{src:e("11db")}})]),s("el-col",{attrs:{span:15}},[s("h1",{staticClass:"header-h1"},[t._v("About Myself")]),s("h2",{staticStyle:{"margin-top":"10px","font-weight":"200"}},[t._v(" I'm Gitam Gadtaula. "),s("p",{staticStyle:{"font-size":"18px","font-weight":"400"}},[t._v(" A simple, creative and a fun-loving person who likes to create things out of imagination. ")]),s("p",{staticStyle:{"font-size":"18px","font-weight":"400","padding-top":"3px"}},[t._v(' I am just among any other sapiens who is strolling around with some purpose and ambition in their life. But in the meantime I find myself to be carefree because worry does not empty tomorrow of its sorrow but it empties today of its strength. I enjoy nature, adventure, literature, art, humor, computers and technology, science, sports just to name a few. I\'m a star gazer and always "hey look at the moon" kinda person. I love fantasies and science fiction. I keep fantasizing myself in places god only know exists. And sometimes when I look at people I make myself try and feel them as more than just a random person walking by. ')])])])],1)],1),s("section",{staticClass:"main hidden-md-and-up"},[s("el-row",{attrs:{type:"flex",justify:"space-between",direction:"column"}},[s("el-col",{attrs:{span:10}},[s("img",{staticClass:"main-img",staticStyle:{width:"120px","border-radius":"50%"},attrs:{src:e("11db")}})]),s("el-col",{staticStyle:{"margin-top":"60px"},attrs:{span:14}},[s("h3",{staticStyle:{"margin-top":"10px","font-weight":"100"}},[t._v(" I'm Gitam Gadtaula. ")]),s("p",{staticStyle:{"font-size":"13px","font-weight":"400"}},[t._v(" A simple, creative and a fun-loving person who likes to create things out of imagination. ")])])],1),s("el-row",[s("el-col",{attrs:{span:24}},[s("p",{staticStyle:{"font-size":"13px","font-weight":"400"}},[t._v(' I am just among any other sapiens who is strolling around with some purpose and ambition in their life. But in the meantime I find myself to be carefree because worry does not empty tomorrow of its sorrow but it empties today of its strength. I enjoy nature, adventure, literature, art, humor, computers and technology, science, sports just to name a few. I\'m a star gazer and always "hey look at the moon" kinda person. I love fantasies and science fiction. I keep fantasizing myself in places god only know exists. And sometimes when I look at people I make myself try and feel them as more than just a random person walking by. ')])])],1)],1),s("section",{staticClass:"work"},[s("h1",{staticClass:"header-h1",staticStyle:{color:"black"}},[t._v(" Education "),s("font-awesome-icon",{attrs:{icon:"university"}})],1),s("h3",[t._v(" Computer Science "),s("font-awesome-icon",{attrs:{icon:"graduation-cap"}})],1),s("h2",[t._v("Kathmandu University")]),s("el-divider",[s("el-col",{attrs:{span:3}},[s("i",{staticClass:"el-icon-star-off"})])],1),s("h1",{staticClass:"header-h1",staticStyle:{color:"black"}},[t._v(" Profession "),s("font-awesome-icon",{attrs:{icon:"industry"}})],1),s("h3",[s("font-awesome-icon",{attrs:{icon:"terminal"}}),t._v(" Web Developer ")],1),s("h2",[t._v("Rasello Nepal ")])],1),s("section",{staticClass:"skill",attrs:{id:"skill"}},[s("h1",{staticClass:"header-h1"},[t._v(" MY SKILLS "),s("font-awesome-icon",{attrs:{icon:"tools"}})],1),s("div",{staticStyle:{"margin-top":"20px",color:"white"}},[s("p",{staticClass:"skill-desc"},[t._v(" I'm a fresh computer science graduate and a web developer by profession. I have been doing computer programming since way back in school. For me, its another way of me expressing things and I am more than delighted to actually make a living out of it. I'm a progressive and a stoic learner. I like being acquainted with new technologies, solving problems, designing a responsive UI, automating things on web and whatnot. I'm also a very keen enthusiast of Machine learning and Data science. My skills are listed below but are not only limited to : ")]),s("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:11}},[s("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","html5"]}}),s("p",{staticClass:"skill-name"},[t._v("HTML5")]),s("div",{staticClass:"skill-container"},[s("div",{staticClass:"skill-container-child",staticStyle:{width:"90%"}})])],1),s("el-col",{attrs:{span:11}},[s("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","sass"]}}),s("p",{staticClass:"skill-name"},[t._v("CSS3/Sass")]),s("div",{staticClass:"skill-container"},[s("div",{staticClass:"skill-container-child",staticStyle:{width:"90%"}})])],1)],1),s("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:11}},[s("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","js-square"]}}),s("p",{staticClass:"skill-name"},[t._v("Javascript")]),s("div",{staticClass:"skill-container"},[s("div",{staticClass:"skill-container-child",staticStyle:{width:"75%"}})])],1),s("el-col",{attrs:{span:11}},[s("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","php"]}}),s("p",{staticClass:"skill-name"},[t._v("PHP")]),s("div",{staticClass:"skill-container"},[s("div",{staticClass:"skill-container-child",staticStyle:{width:"80%"}})])],1)],1),s("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:11}},[s("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","vuejs"]}}),s("p",{staticClass:"skill-name"},[t._v("Vue js")]),s("div",{staticClass:"skill-container"},[s("div",{staticClass:"skill-container-child",staticStyle:{width:"75%"}})])],1),s("el-col",{attrs:{span:11}},[s("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","laravel"]}}),s("p",{staticClass:"skill-name"},[t._v("Laravel")]),s("div",{staticClass:"skill-container"},[s("div",{staticClass:"skill-container-child",staticStyle:{width:"65%"}})])],1)],1),s("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:11}},[s("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","node-js"]}}),s("p",{staticClass:"skill-name"},[t._v("Node JS")]),s("div",{staticClass:"skill-container"},[s("div",{staticClass:"skill-container-child",staticStyle:{width:"65%"}})])],1),s("el-col",{attrs:{span:11}},[s("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","github"]}}),s("p",{staticClass:"skill-name"},[t._v("Github")]),s("div",{staticClass:"skill-container"},[s("div",{staticClass:"skill-container-child",staticStyle:{width:"90%"}})])],1)],1),s("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:11}},[s("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","python"]}}),s("p",{staticClass:"skill-name"},[t._v("Python")]),s("div",{staticClass:"skill-container"},[s("div",{staticClass:"skill-container-child",staticStyle:{width:"50%"}})])],1),s("el-col",{attrs:{span:11}},[s("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","adobe"]}}),s("p",{staticClass:"skill-name"},[t._v("Photoshop")]),s("div",{staticClass:"skill-container"},[s("div",{staticClass:"skill-container-child",staticStyle:{width:"55%"}})])],1)],1)],1)]),s("div",{},[s("section",{staticClass:"interest",attrs:{id:"interest"}},[s("h1",{staticClass:"header-h1",staticStyle:{"margin-bottom":"10px"}},[t._v(" MY INTERESTS "),s("font-awesome-icon",{attrs:{icon:"rocket"}})],1),s("carousel-3d",{staticStyle:{border:"none"},attrs:{width:620,height:560,autoplay:!0,"autoplay-timeout":5e3,"controls-visible":!0}},t._l(t.assets,(function(a,e){return s("slide",{key:e,attrs:{index:e},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.index,o=e.isCurrent,n=e.leftIndex,l=e.rightIndex;return[s("img",{class:{current:o,onLeft:n>=0,onRight:l>=0},attrs:{"data-index":i,src:a.img}}),s("h3",{staticClass:"c-caption"},[t._v(t._s(a.caption))]),s("h3",{staticClass:"c-desc"},[t._v(t._s(a.desc))])]}}],null,!0)})})),1)],1),s("section",{staticClass:"footer",attrs:{id:"footer"}},[t._m(1),s("p",[s("font-awesome-icon",{attrs:{icon:"envelope"}}),t._v(" gitamgadtaula@gmail.com ")],1),s("p",[s("font-awesome-icon",{attrs:{icon:"map-marker-alt"}}),t._v(" Kathmandu Nepal ")],1),s("div",{staticStyle:{"max-width":"50%","margin-left":"auto","margin-right":"auto",display:"block"}},[s("el-divider",[s("el-col",{attrs:{span:3}},[s("i",{staticClass:"el-icon-star-on"})])],1)],1),s("h3",{staticStyle:{"margin-bottom":"10px"}},[t._v("Powered by")]),s("img",{attrs:{src:e("cf05"),height:"40"}}),s("img",{attrs:{src:e("5648"),height:"40"}}),s("img",{attrs:{src:e("84be"),height:"40"}})])])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mousey"},[e("div",{staticClass:"scroller"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h2",{staticStyle:{"font-weight":"100"}},[t._v(" Made with "),e("span",{staticStyle:{color:"red"}},[t._v(" ❤️ ")]),t._v(" in Quarantine. ")])}],n=e("58d7"),l=e("8ab0"),c=e("13ce"),r={name:"App",data:function(){return{navToggle:!1,assets:[{img:n,caption:"Football",desc:"Football is not just another game, it's emotion. We don't have to speak or dress a certain way or even know the same language to communicate with another football fan or a player. It's a sport for the whole universe."},{img:l,caption:"Music",desc:"Music is far more than just a pleasant sound to the ear. I never find myself alone cause wherever I go music goes along with me. I love playing guitar, its therapeutic and releases a hepty amount of dopamine in my brains."},{img:c,caption:"Travelling",desc:"Travelling helps open my mind and makes me realize that there's no one way to live life. By being exposed to new places, people and cultures, it helps me develop a wider world view."}]}}},p=r,f=(e("f449"),e("2877")),d=Object(f["a"])(p,i,o,!1,null,"0f82496d",null),m=d.exports,u=e("98c9"),h=e("7d8c"),g=e.n(h),v=(e("0fae"),e("e05f"),e("77ed"),e("7d05"),e("5c96")),w=e.n(v),y=e("3cf7"),b=e.n(y),k=e("ecee"),C=e("c074"),x=e("f2d1"),_=e("ad3d");k["c"].add(C["a"],x["a"]),s["default"].component("font-awesome-icon",_["a"]),s["default"].use(b.a),s["default"].use(w.a),s["default"].use(g.a),s["default"].use(u["a"]),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(m)}}).$mount("#app")},"57e9":function(t,a,e){t.exports=e.p+"img/3.67fa1cad.jpeg"},"58d7":function(t,a,e){t.exports=e.p+"img/football2.b363775c.jpg"},"7a30":function(t,a,e){t.exports=e.p+"img/gitam.c2b5539d.png"},"7d05":function(t,a,e){},"7db5":function(t,a,e){},"84be":function(t,a,e){t.exports=e.p+"img/element.ba99f6df.svg"},"8ab0":function(t,a,e){t.exports=e.p+"img/guitar.38770dc8.jpg"},cf05:function(t,a,e){t.exports=e.p+"img/logo.82b9c7a5.png"},f449:function(t,a,e){"use strict";var s=e("7db5"),i=e.n(s);i.a}});
//# sourceMappingURL=app.ed805637.js.map