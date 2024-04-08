(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{27:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var s=c(7),n=c(1),l=c(0);const a=Object(n.createContext)(),i=e=>{let{children:t}=e;const[c,s]=Object(n.useState)("light");Object(n.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");s(e.matches?"dark":"light"),e.addEventListener("change",(e=>{s(e.matches?"dark":"light")}))}),[]);return Object(l.jsx)(a.Provider,{value:[{themeName:c,toggleTheme:()=>{const e="dark"===c?"light":"dark";localStorage.setItem("themeName",e),s(e)}}],children:t})},r={homepage:"https://josephlyh.github.io",title:"JL."},j={name:"Lam Yuen Ho Joseph",role:"Software Engineer",description:"Passionate in developing software applications and solving problems.",resume:"Resume_2024_03_04.pdf",social:{linkedin:"https://www.linkedin.com/in/lam-yuen-ho-joseph",github:"https://github.com/JosephLYH",email:"yuenholam@gmail.com",mobile:"+85291726708"}},o=[],b=["Git","SQL","Python","C/C++","Lua","HTML","CSS","JavaScript","React","Docker","AWS"];var h=c(13),m=c.n(h),d=c(11),O=c.n(d),u=c(15),x=c.n(u),p=c(14),k=c.n(p);c(27);var v=()=>{const[{themeName:e,toggleTheme:t}]=Object(n.useContext)(a),[c,s]=Object(n.useState)(!1),i=()=>s(!c);return Object(l.jsxs)("nav",{className:"center nav",children:[Object(l.jsxs)("ul",{style:{display:c?"flex":null},className:"nav__list",children:[o.length?Object(l.jsx)("li",{className:"nav__list-item",children:Object(l.jsx)("a",{href:"#projects",onClick:i,className:"link link--nav",children:"Projects"})}):null,b.length?Object(l.jsx)("li",{className:"nav__list-item",children:Object(l.jsx)("a",{href:"#skills",onClick:i,className:"link link--nav",children:"Skills"})}):null,null]}),Object(l.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(l.jsx)(O.a,{}):Object(l.jsx)(m.a,{})}),Object(l.jsx)("button",{type:"button",onClick:i,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:c?Object(l.jsx)(k.a,{}):Object(l.jsx)(x.a,{})})]})};c(31);var N=()=>{const{homepage:e,title:t}=r;return Object(l.jsxs)("header",{className:"header center",children:[Object(l.jsx)("h3",{children:e?Object(l.jsx)("a",{href:e,className:"link",children:t}):t}),Object(l.jsx)(v,{})]})},_=c(8),f=c.n(_),g=c(16),w=c.n(g),C=c(17),S=c.n(C),y=c(18),L=c.n(y);c(32);var E=()=>{const{name:e,role:t,description:c,resume:s,social:n}=j;return Object(l.jsxs)("div",{className:"about center",children:[e&&Object(l.jsxs)("h1",{children:["Hi, I am ",Object(l.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(l.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(l.jsx)("p",{className:"about__desc",children:c&&c}),s&&Object(l.jsx)("a",{href:s,"aria-label":"resume",className:"about__contact",children:Object(l.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),Object(l.jsx)("div",{className:"about__contact center",children:n&&Object(l.jsxs)(l.Fragment,{children:[n.github&&Object(l.jsx)("a",{href:n.github,"aria-label":"github",className:"link link--icon",children:Object(l.jsx)(f.a,{})}),n.linkedin&&Object(l.jsx)("a",{href:n.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(l.jsx)(w.a,{})}),n.email&&Object(l.jsx)("a",{href:"mailto:".concat(n.email),"aria-label":"email",className:"link link--icon",children:Object(l.jsx)(S.a,{})}),n.mobile&&Object(l.jsx)("a",{href:"tel:".concat(n.mobile),"aria-label":"mobile",className:"link link--icon",children:Object(l.jsx)(L.a,{})})]})})]})},P=c(6),J=c.n(P),H=c(19),I=c.n(H);c(34);var R=e=>{let{project:t}=e;return Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("h3",{children:t.name}),Object(l.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(l.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(l.jsx)("li",{className:"project__stack-item",children:e},J()())))}),t.sourceCode&&Object(l.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(l.jsx)(f.a,{})}),t.livePreview&&Object(l.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(l.jsx)(I.a,{})})]})};c(35);var T=()=>o.length?Object(l.jsxs)("section",{id:"projects",className:"section projects",children:[Object(l.jsx)("h2",{className:"section__title",children:"Projects"}),Object(l.jsx)("div",{className:"projects__grid",children:o.map((e=>Object(l.jsx)(R,{project:e},J()())))})]}):null;c(36);var Y=()=>b.length?Object(l.jsxs)("section",{className:"section skills",id:"skills",children:[Object(l.jsx)("h2",{className:"section__title",children:"Skills"}),Object(l.jsx)("ul",{className:"skills__list",children:b.map((e=>Object(l.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},J()())))})]}):null,A=c(20),B=c.n(A);c(37);var M=()=>{const[e,t]=Object(n.useState)(!1);return Object(n.useEffect)((()=>{const e=()=>window.scrollY>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(l.jsx)("div",{className:"scroll-top",children:Object(l.jsx)("a",{href:"#top","aria-label":"scroll to top",children:Object(l.jsx)(B.a,{fontSize:"large"})})}):null};c(38);var z=()=>null;c(39);var D=()=>{const{social:e}=j;return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsxs)("a",{href:e.github,className:"link footer__link",children:["Created By ",j.name]})})};c(40);var F=()=>{const[{themeName:e}]=Object(n.useContext)(a);return Object(l.jsxs)("div",{id:"top",className:"".concat(e," app"),children:[Object(l.jsx)(N,{}),Object(l.jsxs)("main",{children:[Object(l.jsx)(E,{}),Object(l.jsx)(T,{}),Object(l.jsx)(Y,{}),Object(l.jsx)(z,{})]}),Object(l.jsx)(M,{}),Object(l.jsx)(D,{})]})};c(41);Object(s.render)(Object(l.jsx)(i,{children:Object(l.jsx)(F,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.7d91f123.chunk.js.map