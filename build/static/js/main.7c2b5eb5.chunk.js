(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[0],{22:function(e,t,r){"use strict";var a=r(1);t.a=()=>{const[e,t]=Object(a.useState)(localStorage.theme),r="dark"===e?"light":"dark";return Object(a.useEffect)((()=>{const t=window.document.documentElement;t.classList.remove(r),t.classList.add(e),localStorage.setItem("theme",e)}),[e,r]),[r,t]}},26:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){"use strict";r.r(t);r(26);var a=r(39),s=r(1),c=r(13),l=r(4);var n=()=>{const{pathname:e}=Object(l.m)();return Object(s.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null},i=r(9),o=r(21),d=r(5);var x=function(){return Object(d.jsx)("div",{className:"font-general-regular flex justify-center items-center text-center",children:Object(d.jsxs)("div",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:["\xa9 ",(new Date).getFullYear(),Object(d.jsx)("a",{href:"https://react.dev/",target:"__blank",className:"hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500",children:"React & Tailwind CSS"}),".",Object(d.jsx)("a",{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",target:"__blank",className:"text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500",children:"surprise"})]})})};const m=[{id:1,icon:Object(d.jsx)(i.d,{}),url:"https://haziqmastakin.online/"},{id:2,icon:Object(d.jsx)(o.a,{}),url:"https://discord.gg/RCNja9rw"},{id:4,icon:Object(d.jsx)(i.e,{}),url:"https://www.linkedin.com/in/haziq-mastakin-955a562b1/"}];var b=()=>Object(d.jsx)("div",{className:"container mx-auto",children:Object(d.jsxs)("div",{className:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark",children:[Object(d.jsxs)("div",{className:"font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28",children:[Object(d.jsx)("p",{className:"text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5",children:"Follow me"}),Object(d.jsx)("ul",{className:"flex gap-4 sm:gap-8",children:m.map((e=>Object(d.jsx)("a",{href:e.url,target:"__blank",className:"text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300",children:Object(d.jsx)("i",{className:"text-xl sm:text-2xl md:text-3xl",children:e.icon})},e.id)))})]}),Object(d.jsx)(x,{})]})}),j=r(22),h=r.p+"static/media/logo-light.f3657441.svg",g=r.p+"static/media/logo-dark.e8a5a9b3.svg",y=r(38);var k=()=>{const[e,t]=Object(s.useState)(!1),[r,a]=Object(j.a)();return Object(d.jsx)(y.a.nav,{initial:{opacity:0},animate:{opacity:1},id:"nav",className:"sm:container sm:mx-auto",children:Object(d.jsxs)("div",{className:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6",children:[Object(d.jsxs)("div",{className:"flex justify-between items-center px-4 sm:px-0",children:[Object(d.jsx)("div",{children:Object(d.jsx)(c.b,{to:"/",children:"dark"===r?Object(d.jsx)("img",{src:g,className:"w-36",alt:"Dark Logo"}):Object(d.jsx)("img",{src:h,className:"w-36",alt:"Dark Logo"})})}),Object(d.jsx)("div",{onClick:()=>a(r),"aria-label":"Theme Switcher",className:"block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",children:"dark"===r?Object(d.jsx)(i.i,{className:"text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"}):Object(d.jsx)(i.l,{className:"text-gray-200 hover:text-gray-50 text-xl"})}),Object(d.jsx)("div",{className:"sm:hidden",children:Object(d.jsx)("button",{onClick:function(){t(!e)},type:"button",className:"focus:outline-none","aria-label":"Hamburger Menu",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light",children:e?Object(d.jsx)(i.n,{className:"text-3xl"}):Object(d.jsx)(i.h,{className:"text-3xl"})})})})]}),Object(d.jsxs)("div",{className:e?"block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none":"hidden",children:[Object(d.jsx)(c.b,{to:"/projects",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Projects",children:"Projects"}),Object(d.jsx)(c.b,{to:"/about",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"About Me",children:"About Me"}),Object(d.jsx)(c.b,{to:"/contact",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Contact",children:"Contact"})]}),Object(d.jsxs)("div",{className:"font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none",children:[Object(d.jsx)(c.b,{to:"/projects",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Projects",children:"Projects"}),Object(d.jsx)(c.b,{to:"/about",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"About Me",children:"About Me"}),Object(d.jsx)(c.b,{to:"/contact",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Contact",children:"Contact"})]}),Object(d.jsx)("div",{className:"hidden sm:flex justify-between items-center flex-col md:flex-row",children:Object(d.jsx)("div",{onClick:()=>a(r),"aria-label":"Theme Switcher",className:"ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",children:"dark"===r?Object(d.jsx)(i.i,{className:"text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"}):Object(d.jsx)(i.l,{className:"text-gray-200 hover:text-gray-50 text-xl"})})})]})})};r(35);var p=()=>{const[e,t]=Object(s.useState)(!1);Object(s.useEffect)((()=>(window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)})));const r=()=>{!e&&window.pageYOffset>400?t(!0):e&&window.pageYOffset<=400&&t(!1)};return window.addEventListener("scroll",r),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(i.b,{className:"scrollToTop",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},style:{height:45,width:45,borderRadius:50,right:50,bottom:50,display:e?"flex":"none",padding:5}})})};const u=Object(s.lazy)((()=>r.e(6).then(r.bind(null,53)))),O=Object(s.lazy)((()=>r.e(7).then(r.bind(null,55)))),v=Object(s.lazy)((()=>r.e(3).then(r.bind(null,56)))),f=Object(s.lazy)((()=>r.e(4).then(r.bind(null,51)))),w=Object(s.lazy)((()=>r.e(5).then(r.bind(null,54))));var N=function(){return Object(d.jsx)(a.a,{children:Object(d.jsxs)("div",{className:" bg-secondary-light dark:bg-primary-dark transition duration-300",children:[Object(d.jsxs)(c.a,{children:[Object(d.jsx)(n,{}),Object(d.jsx)(k,{}),Object(d.jsx)(s.Suspense,{fallback:"",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",element:Object(d.jsx)(v,{})}),Object(d.jsx)(l.a,{path:"projects",element:Object(d.jsx)(f,{})}),Object(d.jsx)(l.a,{path:"projects/single-project",element:Object(d.jsx)(w,{})}),Object(d.jsx)(l.a,{path:"about",element:Object(d.jsx)(u,{})}),Object(d.jsx)(l.a,{path:"contact",element:Object(d.jsx)(O,{})})]})}),Object(d.jsx)(b,{})]}),Object(d.jsx)(p,{})]})})};var C=e=>{e&&e instanceof Function&&r.e(8).then(r.bind(null,52)).then((t=>{let{getCLS:r,getFID:a,getFCP:s,getLCP:c,getTTFB:l}=t;r(e),a(e),s(e),c(e),l(e)}))},S=r(24);const L=document.getElementById("root");Object(S.createRoot)(L).render(Object(d.jsx)(N,{})),C()}},[[36,1,2]]]);
//# sourceMappingURL=main.7c2b5eb5.chunk.js.map