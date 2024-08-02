(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[3],{43:function(e,t,r){"use strict";t.a=r.p+"static/media/masscomweb.b0bb161f.png"},44:function(e,t,r){"use strict";t.a=r.p+"static/media/giddenhem.6e165434.png"},45:function(e,t,r){"use strict";t.a=r.p+"static/media/poster.1cf7502a.png"},46:function(e,t,r){"use strict";t.a=r.p+"static/media/historia.6daf0b32.png"},47:function(e,t,r){"use strict";t.a=r.p+"static/media/jiwapendekar.d449713f.png"},48:function(e,t,r){"use strict";t.a=r.p+"static/media/tetraevent.d5cf8daf.png"},49:function(e,t,r){"use strict";r.d(t,"a",(function(){return x})),r.d(t,"b",(function(){return g}));var a=r(8),i=r(2),s=r(43),c=r(44),n=r(45),l=r(46),o=r(47),d=r(48),m=[{id:1,title:"GiddenHem - Project Website",category:"Website",img:c.a,ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jan 10, 2024",tags:"Web Development"}},{id:2,title:"Historia - Project Game",category:"Game dev",img:l.a},{id:3,title:"JiwaPendekar - Social Media",category:"Social media",img:o.a},{id:4,title:"Technical Bureau - Tetrabit event",category:"Event",img:d.a},{id:5,title:"Poster I made",category:"Graphic Design",img:n.a},{id:6,title:"Masscom - Faculty website",category:"Website",img:s.a}],j=r(3),x=Object(i.createContext)(),g=function(e){var t=Object(i.useState)(m),r=Object(a.a)(t,2),s=r[0],c=r[1],n=Object(i.useState)(""),l=Object(a.a)(n,2),o=l[0],d=l[1],g=Object(i.useState)(""),u=Object(a.a)(g,2),b=u[0],p=u[1],y=s.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())||""===o?e:""})),h=s.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(b)}));return Object(j.jsx)(x.Provider,{value:{projects:s,setProjects:c,searchProject:o,setSearchProject:d,searchProjectsByTitle:y,selectProject:b,setSelectProject:p,selectProjectsByCategory:h},children:e.children})}},50:function(e,t,r){"use strict";var a=r(2),i=r(10),s=r(41),c=r(14),n=r(3),l=function(e){var t=e.title,r=e.category,a=e.image;return Object(n.jsx)(s.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(n.jsx)(c.b,{to:"/projects/single-project","aria-label":"Single Project",children:Object(n.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:a,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(n.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(n.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(n.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:r})]})]})})})},o=r(49),d=["Website","Game dev","Social media","Event","Graphic Design"],m=function(e){var t=e.setSelectProject;return Object(n.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium \r px-4\r sm:px-6\r py-2\r border\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r dark:font-medium\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",children:[Object(n.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((function(e){return Object(n.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})};t.a=function(){var e=Object(a.useContext)(o.a),t=e.projects,r=e.searchProject,s=e.setSearchProject,c=e.searchProjectsByTitle,d=e.selectProject,j=e.setSelectProject,x=e.selectProjectsByCategory;return Object(n.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(n.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(n.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:"Search projects by title or filter by category"}),Object(n.jsxs)("div",{className:"\r flex\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:[Object(n.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(n.jsx)("span",{className:"\r hidden\r sm:block\r bg-primary-light\r dark:bg-ternary-dark\r p-2.5\r shadow-sm\r rounded-xl\r cursor-pointer\r ",children:Object(n.jsx)(i.k,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(n.jsx)("input",{onChange:function(e){s(e.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(n.jsx)(m,{setSelectProject:j})]})]}),Object(n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:d?x.map((function(e){return Object(n.jsx)(l,{title:e.title,category:e.category,image:e.img},e.id)})):r?c.map((function(e){return Object(n.jsx)(l,{title:e.title,category:e.category,image:e.img},e.id)})):t.map((function(e){return Object(n.jsx)(l,{title:e.title,category:e.category,image:e.img},e.id)}))})]})}},58:function(e,t,r){"use strict";r.r(t);var a=r(14),i=r(8),s=r(24),c=r(10),n=r.p+"static/media/developer.05999cf8.svg",l=r.p+"static/media/developer-dark.05999cf8.svg",o=r(41),d=r(3),m=function(){var e=Object(s.a)(),t=Object(i.a)(e,1)[0];return Object(d.jsxs)(o.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[Object(d.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[Object(d.jsx)(o.a.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hi, Iam Haziq"}),Object(d.jsx)(o.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"A Masscom Student & Freelancer"}),Object(d.jsx)(o.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:Object(d.jsxs)("a",{download:"Haziq-Resume.pdf",href:"/files/Haziq-Resume.pdf",className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[Object(d.jsx)(c.a,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),Object(d.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Download CV"})]})})]}),Object(d.jsx)(o.a.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:Object(d.jsx)("img",{src:"dark"===t?n:l,alt:"Developer"})})]})},j=r(50),x=r(49),g=r(22);t.default=function(){return Object(d.jsxs)("div",{className:"container mx-auto",children:[Object(d.jsx)(m,{}),Object(d.jsx)(x.b,{children:Object(d.jsx)(j.a,{})}),Object(d.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:Object(d.jsx)(a.b,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:Object(d.jsx)(g.a,{title:"More Projects"})})})]})}}}]);
//# sourceMappingURL=3.21b7d4d3.chunk.js.map