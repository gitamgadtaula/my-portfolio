(function(t){function a(a){for(var e,n,l=a[0],c=a[1],r=a[2],p=0,f=[];p<l.length;p++)n=l[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&f.push(i[n][0]),i[n]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);d&&d(a);while(f.length)f.shift()();return o.push.apply(o,r||[]),s()}function s(){for(var t,a=0;a<o.length;a++){for(var s=o[a],e=!0,l=1;l<s.length;l++){var c=s[l];0!==i[c]&&(e=!1)}e&&(o.splice(a--,1),t=n(n.s=s[0]))}return t}var e={},i={app:0},o=[];function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,a,s){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)n.d(s,e,function(a){return t[a]}.bind(null,e));return s},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var r=0;r<l.length;r++)a(l[r]);var d=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"11db":function(t,a,s){t.exports=s.p+"img/me.f046bd76.jpeg"},"13ce":function(t,a,s){t.exports=s.p+"img/travel1.fc201b93.jpg"},5648:function(t,a,s){t.exports=s.p+"img/nuxt.fd557337.png"},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("nav",{staticClass:"hidden-sm-and-down",staticStyle:{width:"100%",position:"fixed"}},[e("el-row",{attrs:{type:"flex",justify:"space-evenly",gutter:12}},[e("el-col",{attrs:{span:1}}),e("span",{staticClass:"logo",attrs:{float:"left"}},[e("img",{attrs:{width:"30",src:s("7a30")}})]),e("el-col",{attrs:{span:5,offset:5}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("font-awesome-icon",{attrs:{icon:"home"}}),e("span",[t._v(" Home ")])],1)]),e("el-col",{attrs:{span:5}},[e("a",{staticClass:"nav-link",attrs:{href:"#about"}},[e("font-awesome-icon",{attrs:{icon:"user-alt"}}),t._v(" About me ")],1)]),e("el-col",{attrs:{span:5}},[e("a",{staticClass:"nav-link",attrs:{href:"#skill"}},[e("font-awesome-icon",{attrs:{icon:"tools"}}),t._v(" My skills ")],1)]),e("el-col",{attrs:{span:5}},[e("a",{staticClass:"nav-link",attrs:{href:"#interest"}},[e("font-awesome-icon",{attrs:{icon:"rocket"}}),t._v(" Interests ")],1)]),e("el-col",{attrs:{span:5}},[e("a",{staticClass:"nav-link",attrs:{href:"#footer"}},[e("font-awesome-icon",{attrs:{icon:"phone"}}),t._v(" Contact me ")],1)])],1)],1),e("nav",{staticClass:"hidden-md-and-up",staticStyle:{width:"100%",position:"fixed"}},[e("el-row",{attrs:{type:"flex",justify:"space-between"}},[e("el-col",{attrs:{span:1}},[e("span",{staticClass:"logo",attrs:{float:"left"}},[e("img",{attrs:{width:"40",src:s("7a30")}})])]),e("el-col",{attrs:{span:4}},[e("font-awesome-icon",{staticStyle:{color:"white","font-size":"32px","margin-right":"8%"},attrs:{icon:"bars"},on:{click:function(a){t.navToggle=!t.navToggle}}})],1)],1),t.navToggle?e("div",{staticClass:"toggle"},[e("a",{attrs:{href:"#"},on:{click:function(a){t.navToggle=!1}}},[e("el-row",{staticClass:"nav-row",attrs:{type:"flex"}},[e("font-awesome-icon",{attrs:{icon:"home"}}),t._v("Home ")],1)],1),e("a",{attrs:{href:"#about"},on:{click:function(a){t.navToggle=!1}}},[e("el-row",{staticClass:"nav-row",attrs:{type:"flex"}},[e("font-awesome-icon",{attrs:{icon:"user-alt"}}),t._v("About me ")],1)],1),e("a",{attrs:{href:"#skill"},on:{click:function(a){t.navToggle=!1}}},[e("el-row",{staticClass:"nav-row",attrs:{type:"flex"}},[e("font-awesome-icon",{attrs:{icon:"tools"}}),t._v("My skills ")],1)],1),e("a",{attrs:{href:"#interest"},on:{click:function(a){t.navToggle=!1}}},[e("el-row",{staticClass:"nav-row",attrs:{type:"flex"}},[e("font-awesome-icon",{attrs:{icon:"rocket"}}),t._v("Interests ")],1)],1),e("a",{attrs:{href:"#"},on:{click:function(a){t.navToggle=!1}}},[e("el-row",{staticClass:"nav-row",attrs:{type:"flex"}},[e("font-awesome-icon",{attrs:{icon:"phone"}}),t._v("Contact me ")],1)],1)]):t._e()],1),e("section",{staticClass:"particle"},[e("vue-particles",{attrs:{color:"#deaaae",shapeType:"cirle"}}),e("div",{attrs:{id:"app-container"}},[t.navToggle?e("div",{staticStyle:{"padding-top":"120px"}}):t._e(),e("header",[e("h1",{staticClass:"greet"},[t._v("Hello world !")]),e("el-row",{attrs:{type:"flex",justify:"center"}},[e("img",{staticClass:"header-img",attrs:{src:s("57e9"),alt:"gitam gadtaula"}})]),e("el-row",{attrs:{type:"flex",justify:"center"}},[e("el-col",{attrs:{span:24}},[e("h1",{staticClass:"header-h1",staticStyle:{border:"none","font-size":"20px"}},[t._v(" I'm Gitam Gadtaula ")])])],1),e("hr",{staticStyle:{width:"50%"}}),e("el-row",{attrs:{type:"flex",justify:"center"}},[e("span",{staticStyle:{color:"#fff"}},[e("typewriter",{attrs:{speed:50,"full-erase":!1,interval:300,words:["Software developer..","UI/UX designer..","Music Freak..","Football Maniac.."],cursor:!1}}),t._v("| ")],1)]),e("el-row",{staticStyle:{"margin-top":"20px"},attrs:{type:"flex",justify:"center",gutter:24}},[e("el-col",{staticClass:"social-icon"},[e("a",{attrs:{href:"https://fb.com/giittam"}},[e("div",{staticClass:"social-ico"},[e("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}})],1)])]),e("el-col",{staticClass:"social-icon"},[e("a",{attrs:{href:"https://github.com/gitamgadtaula/"}},[e("div",{staticClass:"social-ico"},[e("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)])]),e("el-col",{staticClass:"social-icon"},[e("a",{attrs:{href:"https://twitter.com/gitamgadtaula"}},[e("div",{staticClass:"social-ico"},[e("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])]),e("el-col",{staticClass:"social-icon"},[e("a",{attrs:{href:"https://instagram.com/gitamgadtaula"}},[e("div",{staticClass:"social-ico"},[e("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)])]),e("el-col",{staticClass:"social-icon"},[e("a",{attrs:{href:"https://www.quora.com/profile/Gitam-Gadtaula"}},[e("div",{staticClass:"social-ico"},[e("font-awesome-icon",{attrs:{icon:["fab","quora"]}})],1)])]),e("el-col",{staticClass:"social-icon"},[e("a",{attrs:{href:"https://www.linkedin.com/in/gitamgadtaula/"}},[e("div",{staticClass:"social-ico"},[e("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}})],1)])])],1)],1),t._m(0)])],1),e("section",{staticClass:"main hidden-sm-and-down",attrs:{id:"about"}},[e("el-row",{attrs:{type:"flex",justify:"space-between",direction:"column"}},[e("el-col",{attrs:{span:9}},[e("img",{staticClass:"main-img",attrs:{src:s("11db"),alt:"gitam gadtaula"}})]),e("el-col",{attrs:{span:15}},[e("h1",{staticClass:"header-h1"},[t._v("About Myself")]),e("p",{staticClass:"main-desc cursive"},[t._v(" A simple, creative and a fun-loving person who likes to create things out of imagination. ")]),e("p",{staticClass:"main-desc cursive"},[t._v(" "+t._s(t.aboutMe)+" ")])])],1)],1),e("section",{staticClass:"main hidden-md-and-up"},[e("el-row",{attrs:{type:"flex",justify:"space-between",direction:"column"}},[e("el-col",{attrs:{span:10}},[e("img",{staticClass:"main-img",staticStyle:{width:"120px","border-radius":"50%"},attrs:{src:s("11db")}})]),e("el-col",{staticStyle:{"margin-top":"0px"},attrs:{span:14}},[e("p",{staticClass:"main-desc cursive"},[t._v(" A simple, creative and a fun-loving person who likes to create things out of imagination. ")])])],1),e("el-row",[e("el-col",{attrs:{span:24}},[e("p",{staticClass:"main-desc cursive"},[t._v(" "+t._s(t.aboutMe)+" ")])])],1)],1),e("section",{staticClass:"work"},[e("h1",{staticClass:"header-h1",staticStyle:{color:"black"}},[t._v(" Education "),e("font-awesome-icon",{attrs:{icon:"university"}})],1),e("h3",[t._v(" Computer Science "),e("font-awesome-icon",{attrs:{icon:"graduation-cap"}})],1),e("h2",[t._v("Kathmandu University")]),e("el-divider",[e("el-col",{attrs:{span:3}},[e("i",{staticClass:"el-icon-star-off"})])],1),e("h1",{staticClass:"header-h1",staticStyle:{color:"black"}},[t._v(" Profession "),e("font-awesome-icon",{attrs:{icon:"industry"}})],1),e("h3",[e("font-awesome-icon",{attrs:{icon:"terminal"}}),t._v(" Software Developer")],1),e("h2",[t._v("Rasello Nepal")])],1),e("section",{staticClass:"skill",attrs:{id:"skill"}},[e("h1",{staticClass:"header-h1"},[t._v(" MY SKILLS "),e("font-awesome-icon",{attrs:{icon:"tools"}})],1),e("div",{staticStyle:{"margin-top":"20px",color:"white"}},[e("p",{staticClass:"skill-desc"},[t._v(" I'm a fresh computer science graduate and a software developer by profession. I have been doing computer programming since way back in school. For me, its another way of me expressing things and I am more than delighted to actually make a living out of it. I'm a progressive and a stoic learner. I like being acquainted with new technologies, solving problems, designing responsive UI with a good user experience, automating things on web and so on. I'm also a very keen enthusiast of Machine learning and Data science. Listed below are my skills but just not limited to : ")]),e("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",justify:"space-between"}},[e("el-col",{attrs:{span:11}},[e("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","html5"]}}),e("p",{staticClass:"skill-name"},[t._v("HTML5")]),e("div",{staticClass:"skill-container"},[e("div",{staticClass:"skill-container-child",staticStyle:{width:"90%"}})])],1),e("el-col",{attrs:{span:11}},[e("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","sass"]}}),e("p",{staticClass:"skill-name"},[t._v("CSS3/Sass")]),e("div",{staticClass:"skill-container"},[e("div",{staticClass:"skill-container-child",staticStyle:{width:"90%"}})])],1)],1),e("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",justify:"space-between"}},[e("el-col",{attrs:{span:11}},[e("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","js-square"]}}),e("p",{staticClass:"skill-name"},[t._v("Javascript")]),e("div",{staticClass:"skill-container"},[e("div",{staticClass:"skill-container-child",staticStyle:{width:"75%"}})])],1),e("el-col",{attrs:{span:11}},[e("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","php"]}}),e("p",{staticClass:"skill-name"},[t._v("PHP")]),e("div",{staticClass:"skill-container"},[e("div",{staticClass:"skill-container-child",staticStyle:{width:"80%"}})])],1)],1),e("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",justify:"space-between"}},[e("el-col",{attrs:{span:11}},[e("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","vuejs"]}}),e("p",{staticClass:"skill-name"},[t._v("Vue js")]),e("div",{staticClass:"skill-container"},[e("div",{staticClass:"skill-container-child",staticStyle:{width:"75%"}})])],1),e("el-col",{attrs:{span:11}},[e("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","laravel"]}}),e("p",{staticClass:"skill-name"},[t._v("Laravel")]),e("div",{staticClass:"skill-container"},[e("div",{staticClass:"skill-container-child",staticStyle:{width:"65%"}})])],1)],1),e("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",justify:"space-between"}},[e("el-col",{attrs:{span:11}},[e("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","node-js"]}}),e("p",{staticClass:"skill-name"},[t._v("Node JS")]),e("div",{staticClass:"skill-container"},[e("div",{staticClass:"skill-container-child",staticStyle:{width:"65%"}})])],1),e("el-col",{attrs:{span:11}},[e("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","github"]}}),e("p",{staticClass:"skill-name"},[t._v("Github")]),e("div",{staticClass:"skill-container"},[e("div",{staticClass:"skill-container-child",staticStyle:{width:"90%"}})])],1)],1),e("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",justify:"space-between"}},[e("el-col",{attrs:{span:11}},[e("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","python"]}}),e("p",{staticClass:"skill-name"},[t._v("Python")]),e("div",{staticClass:"skill-container"},[e("div",{staticClass:"skill-container-child",staticStyle:{width:"50%"}})])],1),e("el-col",{attrs:{span:11}},[e("font-awesome-icon",{staticClass:"skills-icon",attrs:{icon:["fab","adobe"]}}),e("p",{staticClass:"skill-name"},[t._v("Photoshop")]),e("div",{staticClass:"skill-container"},[e("div",{staticClass:"skill-container-child",staticStyle:{width:"55%"}})])],1)],1)],1)]),e("div",{},[e("section",{staticClass:"interest",attrs:{id:"interest"}},[e("h1",{staticClass:"header-h1",staticStyle:{"margin-bottom":"10px"}},[t._v(" MY INTERESTS "),e("font-awesome-icon",{attrs:{icon:"rocket"}})],1),e("carousel-3d",{staticStyle:{border:"none"},attrs:{width:620,height:560,autoplay:!0,"autoplay-timeout":5e3,"controls-visible":!0}},t._l(t.assets,(function(a,s){return e("slide",{key:s,attrs:{index:s},scopedSlots:t._u([{key:"default",fn:function(s){var i=s.index,o=s.isCurrent,n=s.leftIndex,l=s.rightIndex;return[e("img",{class:{current:o,onLeft:n>=0,onRight:l>=0},attrs:{"data-index":i,src:a.img}}),e("h3",{staticClass:"c-caption"},[t._v(t._s(a.caption))]),e("h3",{staticClass:"c-desc"},[t._v(t._s(a.desc))])]}}],null,!0)})})),1)],1),e("section",{staticClass:"footer",attrs:{id:"footer"}},[t._m(1),e("p",[e("font-awesome-icon",{attrs:{icon:"envelope"}}),t._v(" gitamgadtaula@gmail.com ")],1),e("p",[e("font-awesome-icon",{attrs:{icon:"map-marker-alt"}}),t._v(" Kathmandu Nepal")],1),e("div",{staticStyle:{"max-width":"50%","margin-left":"auto","margin-right":"auto",display:"block"}},[e("el-divider",[e("el-col",{attrs:{span:3}},[e("i",{staticClass:"el-icon-star-on"})])],1)],1),e("h3",{staticStyle:{"margin-bottom":"10px"}},[t._v("Powered by")]),e("img",{attrs:{src:s("cf05"),height:"40"}}),e("img",{attrs:{src:s("5648"),height:"40"}}),e("img",{attrs:{src:s("84be"),height:"40"}})])])])},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mousey"},[s("div",{staticClass:"scroller"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h2",{staticClass:"cursive",staticStyle:{"font-weight":"100"}},[t._v(" Made with "),s("span",{staticStyle:{color:"red"}},[t._v(" ❤️ ")]),t._v(" in Quarantine. ")])}],n=s("58d7"),l=s("8ab0"),c=s("13ce"),r="I am just among any other sapiens who is strolling around with some purpose and\n\t\t\t\t\t\t  ambition in their life. But in the meantime I find\n\t\t\t\t\t\t  myself to be carefree because worry only empties today of its strength but does not empty tomorrow of its sorrow. \n\t\t\t\t\t\t  I enjoy nature, adventure, literature and philosophy, art, humor, technology, sports, music, science and whatnot.\n\t\t\t\t\t\t  I'm a star gazer and I always prefer watching sunsets over netflix. I love fantasies and fiction. \n\t\t\t\t\t\t  I keep fantasizing myself in places god only know exists. And sometimes when I look\n\t\t\t\t\t\t  at people I make myself try and feel them as more than just\n\t\t\t\t\t\t  a random person walking by. ",d={name:"App",data:function(){return{navToggle:!1,aboutMe:r,assets:[{img:n,caption:"Football",desc:"Football is not just another game, it's emotion. We don't have to speak or dress a certain way or even know the same language to communicate with another football fan or a player. It's a sport for the whole universe."},{img:l,caption:"Music",desc:"Music is far more than just a pleasant sound to the ear. I never find myself alone cause wherever I go music goes along with me. I love playing guitar, its therapeutic and releases a hepty amount of dopamine in my brains."},{img:c,caption:"Travelling",desc:"Travelling helps open my mind and makes me realize that there's no one way to live life. By being exposed to new places, people and cultures, it helps me develop a wider world view."}]}}},p=d,f=(s("a706"),s("2877")),u=Object(f["a"])(p,i,o,!1,null,"94953508",null),m=u.exports,h=s("98c9"),v=s("7d8c"),g=s.n(v),w=(s("0fae"),s("e05f"),s("7d05"),s("5c96")),y=s("3cf7"),b=s.n(y),C=s("ecee"),k=s("c074"),_=s("f2d1"),x=s("ad3d");C["c"].add(k["a"],_["a"]),e["default"].component("font-awesome-icon",x["a"]),e["default"].use(b.a),e["default"].use(w["Row"]),e["default"].use(w["Col"]),e["default"].use(w["Divider"]),e["default"].use(g.a),e["default"].use(h["a"]),e["default"].config.productionTip=!1,new e["default"]({render:function(t){return t(m)}}).$mount("#app")},"57e9":function(t,a,s){t.exports=s.p+"img/3.67fa1cad.jpeg"},"58d7":function(t,a,s){t.exports=s.p+"img/football2.b363775c.jpg"},"7a30":function(t,a,s){t.exports=s.p+"img/gitam.c2b5539d.png"},"7d05":function(t,a,s){},"84be":function(t,a,s){t.exports=s.p+"img/element.ba99f6df.svg"},"8ab0":function(t,a,s){t.exports=s.p+"img/guitar.2f606306.jpg"},a706:function(t,a,s){"use strict";var e=s("b79d"),i=s.n(e);i.a},b79d:function(t,a,s){},cf05:function(t,a,s){t.exports=s.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.659a26ce.js.map