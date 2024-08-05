(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[3],{41:function(e,t,r){"use strict";t.a=r.p+"static/media/masscomweb.b0bb161f.png"},42:function(e,t,r){"use strict";t.a=r.p+"static/media/giddenhem.6e165434.png"},43:function(e,t,r){"use strict";t.a=r.p+"static/media/poster.1cf7502a.png"},44:function(e,t,r){"use strict";t.a=r.p+"static/media/historia.6daf0b32.png"},45:function(e,t,r){"use strict";t.a=r.p+"static/media/jiwapendekar.d449713f.png"},46:function(e,t,r){"use strict";t.a=r.p+"static/media/tetraevent.d5cf8daf.png"},47:function(e,t,r){"use strict";r.d(t,"a",(function(){return x})),r.d(t,"b",(function(){return j}));var a=r(1),s=r(41),i=r(42),c=r(43),n=r(44),l=r(45),o=r(46);const d=[{id:1,title:"GiddenHem - Project Website",category:"Website",img:i.a,ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jan 10, 2024",tags:"Web Development"}},{id:2,title:"Historia - Project Game",category:"Game dev",img:n.a},{id:3,title:"JiwaPendekar - Social Media",category:"Social media",img:l.a},{id:4,title:"Technical Bureau - Tetrabit event",category:"Event",img:o.a},{id:5,title:"Poster I made",category:"Graphic Design",img:c.a},{id:6,title:"Masscom - Faculty website",category:"Website",img:s.a}];var m=r(4);const x=Object(a.createContext)(),j=e=>{const[t,r]=Object(a.useState)(d),[s,i]=Object(a.useState)(""),[c,n]=Object(a.useState)(""),l=t.filter((e=>e.title.toLowerCase().includes(s.toLowerCase())||""===s?e:"")),o=t.filter((e=>(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(c)));return Object(m.jsx)(x.Provider,{value:{projects:t,setProjects:r,searchProject:s,setSearchProject:i,searchProjectsByTitle:l,selectProject:c,setSelectProject:n,selectProjectsByCategory:o},children:e.children})}},48:function(e,t,r){"use strict";var a=r(1),s=r(9),i=r(39),c=r(13),n=r(4);var l=e=>{let{title:t,category:r,image:a}=e;return Object(n.jsx)(i.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(n.jsx)(c.b,{to:"/projects/single-project","aria-label":"Single Project",children:Object(n.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:a,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(n.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(n.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(n.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:r})]})]})})})},o=r(47);const d=["Website","Game dev","Social media","Event","Graphic Design"];var m=e=>{let{setSelectProject:t}=e;return Object(n.jsxs)("select",{onChange:e=>{t(e.target.value)},className:"font-general-medium \r px-4\r sm:px-6\r py-2\r border\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r dark:font-medium\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",children:[Object(n.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((e=>Object(n.jsx)("option",{className:"text-normal sm:text-md",children:e},e)))]})};t.a=()=>{const{projects:e,searchProject:t,setSearchProject:r,searchProjectsByTitle:i,selectProject:c,setSelectProject:d,selectProjectsByCategory:x}=Object(a.useContext)(o.a);return Object(n.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(n.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(n.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:"Search projects by title or filter by category"}),Object(n.jsxs)("div",{className:"\r flex\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:[Object(n.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(n.jsx)("span",{className:"\r hidden\r sm:block\r bg-primary-light\r dark:bg-ternary-dark\r p-2.5\r shadow-sm\r rounded-xl\r cursor-pointer\r ",children:Object(n.jsx)(s.k,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(n.jsx)("input",{onChange:e=>{r(e.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(n.jsx)(m,{setSelectProject:d})]})]}),Object(n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:c?x.map((e=>Object(n.jsx)(l,{title:e.title,category:e.category,image:e.img},e.id))):t?i.map((e=>Object(n.jsx)(l,{title:e.title,category:e.category,image:e.img},e.id))):e.map((e=>Object(n.jsx)(l,{title:e.title,category:e.category,image:e.img},e.id)))})]})}},56:function(e,t,r){"use strict";r.r(t);var a=r(13),s=r(23),i=r(9),c=r.p+"static/media/developer.05999cf8.svg",n=r.p+"static/media/developer-dark.05999cf8.svg",l=r(39),o=r(4);var d=()=>{const[e]=Object(s.a)();return Object(o.jsxs)(l.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[Object(o.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[Object(o.jsx)(l.a.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hi, Iam Haziq"}),Object(o.jsx)(l.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"A Masscom Student & Freelancer"}),Object(o.jsx)(l.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:Object(o.jsxs)("a",{download:"Haziq-Resume.pdf",href:"/files/Haziq-Resume.pdf",className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[Object(o.jsx)(i.a,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),Object(o.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Download CV"})]})})]}),Object(o.jsx)(l.a.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:Object(o.jsx)("img",{src:"dark"===e?c:n,alt:"Developer"})})]})},m=r(48),x=r(47),j=r(21);t.default=()=>Object(o.jsxs)("div",{className:"container mx-auto",children:[Object(o.jsx)(d,{}),Object(o.jsx)(x.b,{children:Object(o.jsx)(m.a,{})}),Object(o.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:Object(o.jsx)(a.b,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:Object(o.jsx)(j.a,{title:"More Projects"})})})]})}}]);
//# sourceMappingURL=3.cfd30c48.chunk.js.map