exports.id=886,exports.ids=[886],exports.modules={1023:(e,t,i)=>{"use strict";i.d(t,{E:()=>r});var s=i(4287),a=i.n(s);let r=(e,t,i)=>a().fromTo(e,{opacity:0,...t},{opacity:1,...i,stagger:.2,ease:s.Power3.easeOut})},5625:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var s=i(997);i(6689);var a=i(1162),r=i(9954);let n=({children:e,type:t,onClick:i,classes:n})=>{let{theme:o}=(0,a.useTheme)();return"primary"===t?s.jsx("button",{onClick:i,type:"button",className:`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ${"dark"===o?"bg-white text-black":"bg-black text-white"}  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${r.showCursor&&"cursor-none"}  ${n}`,children:e}):s.jsx("button",{onClick:i,type:"button",className:`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${"dark"===o?"hover:bg-slate-600 text-white":"hover:bg-slate-100"} hover:scale-105 active:scale-100  tablet:first:ml-0  ${r.showCursor&&"cursor-none"} ${n} link`,children:e})}},6211:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var s=i(997),a=i(6689),r=i(1263),n=i.n(r);i(6814);var o=i(1162);let l=()=>{let e=(0,o.useTheme)(),[t,i]=(0,a.useState)();return(0,a.useEffect)(()=>{i(!0)},[]),s.jsx(s.Fragment,{children:t&&s.jsx(n(),{targets:[".link"],customClass:"custom-cursor",dimensions:30,fill:"dark"===e.theme?"#fff":"light"===e.theme?"#000":void 0,smoothness:{movement:.2,scale:.1,opacity:.2},targetOpacity:.5,targetScale:2})})}},471:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var s=i(997),a=i(8540),r=i(1162),n=i(1163),o=i(6689),l=i(5625),c=i(9954);let d=({handleWorkScroll:e,handleAboutScroll:t,isBlog:i})=>{let d=(0,n.useRouter)(),{theme:m,setTheme:h}=(0,r.useTheme)(),[p,u]=(0,o.useState)(!1),{name:g,showBlog:v,showResume:k}=c;return(0,o.useEffect)(()=>{u(!0)},[]),(0,s.jsxs)(s.Fragment,{children:[s.jsx(a.J,{className:"block tablet:hidden mt-5",children:({open:r})=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"flex items-center justify-between p-2 laptop:p-0",children:[s.jsx("img",{className:"h-6",src:"/images/image_transparent.png"}),(0,s.jsxs)("h1",{onClick:()=>d.push("/"),className:"font-medium p-2 laptop:p-0 link",children:[g,"."]}),(0,s.jsxs)("div",{className:"flex items-center",children:[c.darkMode&&s.jsx(l.Z,{onClick:()=>h("dark"===m?"light":"dark"),children:s.jsx("img",{className:"h-6",src:`/images/${"dark"===m?"moon.svg":"sun.svg"}`})}),s.jsx(a.J.Button,{children:s.jsx("img",{className:"h-5",src:`/images/${r?"light"===m?"cancel.svg":"cancel-white.svg":"dark"===m?"menu-white.svg":"menu.svg"}`})})]})]}),s.jsx(a.J.Panel,{className:`absolute right-0 z-10 w-11/12 p-4 ${"dark"===m?"bg-slate-800":"bg-white"} shadow-md rounded-md`,children:i?(0,s.jsxs)("div",{className:"grid grid-cols-1",children:[s.jsx(l.Z,{onClick:()=>d.push("/"),classes:"first:ml-1",children:"Home"}),v&&s.jsx(l.Z,{onClick:()=>d.push("/blog"),children:"Blog"}),k&&s.jsx(l.Z,{onClick:()=>d.push("/resume"),classes:"first:ml-1",children:"Resume"}),s.jsx(l.Z,{onClick:()=>window.open("mailto:viktoriya.mikhaylova@hotmail.com"),children:"Contact"})]}):(0,s.jsxs)("div",{className:"grid grid-cols-1",children:[s.jsx(l.Z,{onClick:e,children:"Projects"}),s.jsx(l.Z,{onClick:t,children:"About"}),v&&s.jsx(l.Z,{onClick:()=>d.push("/blog"),children:"Blog"}),k&&s.jsx(l.Z,{onClick:()=>window.open("mailto:viktoriya.mikhaylova@hotmail.com"),children:"Resume"}),s.jsx(l.Z,{onClick:()=>window.open("mailto:viktoriya.mikhaylova@hotmail.com"),children:"Contact"})]})})]})}),(0,s.jsxs)("div",{className:`mt-10 hidden flex-row items-center justify-between sticky ${"light"===m&&"bg-white"} dark:text-white top-0 z-10 tablet:flex`,children:[s.jsx("img",{className:"h-6",src:"/images/image_transparent.png"}),s.jsx("h1",{onClick:()=>d.push("/"),className:"font-medium cursor-pointer mob:p-2 laptop:p-0",children:g}),i?(0,s.jsxs)("div",{className:"flex",children:[s.jsx(l.Z,{onClick:()=>d.push("/"),children:"Home"}),v&&s.jsx(l.Z,{onClick:()=>d.push("/blog"),children:"Blog"}),k&&s.jsx(l.Z,{onClick:()=>d.push("/resume"),classes:"first:ml-1",children:"Resume"}),s.jsx(l.Z,{onClick:()=>window.open("mailto:viktoriya.mikhaylova@hotmail.com"),children:"Contact"}),p&&m&&c.darkMode&&s.jsx(l.Z,{onClick:()=>h("dark"===m?"light":"dark"),children:s.jsx("img",{className:"h-6",src:`/images/${"dark"===m?"moon.svg":"sun.svg"}`})})]}):(0,s.jsxs)("div",{className:"flex",children:[s.jsx(l.Z,{onClick:e,children:"Projects"}),s.jsx(l.Z,{onClick:t,children:"About"}),v&&s.jsx(l.Z,{onClick:()=>d.push("/blog"),children:"Blog"}),k&&s.jsx(l.Z,{onClick:()=>d.push("/resume"),classes:"first:ml-1",children:"Resume"}),s.jsx(l.Z,{onClick:()=>window.open("mailto:viktoriya.mikhaylova@hotmail.com"),children:"Contact"}),p&&m&&c.darkMode&&s.jsx(l.Z,{onClick:()=>h("dark"===m?"light":"dark"),children:s.jsx("img",{className:"h-6",src:`/images/${"dark"===m?"moon.svg":"sun.svg"}`})})]})]})]})}},4926:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var s=i(997);i(6764);var a=i(1162);let r=({Component:e,pageProps:t})=>s.jsx(a.ThemeProvider,{children:s.jsx(e,{...t})})},7517:(e,t,i)=>{"use strict";i.d(t,{KO:()=>a,LI:()=>s});let s=i(6689).useEffect;function a(e){if(e){let t=new Date(e);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}}},6764:()=>{},9954:e=>{"use strict";e.exports=JSON.parse('{"name":"Viktoriya Mihaylova","name1":"Viktoriya Mikhaylova","headerTaglineOne":"Hello","headerTaglineTwo":"I\'m Viktoriya - passionate","headerTaglineThree":"UI/UX designer","headerTaglineFour":"based in J\xe4rvenp\xe4\xe4, Finland.","showCursor":true,"showBlog":true,"darkMode":false,"showResume":true,"socials":[{"id":"1","title":"Github","link":"https://github.com/viktoriyamik"},{"id":"2","title":"LinkedIn","link":"https://www.linkedin.com/in/viktoriya-mikhaylova-91873b262/"},{"id":"3","title":"Email","link":"mailto:viktoriya.mikhaylova@hotmail.com"}],"projects":[{"id":"1","title":"Project One Test","description":"Web Design","imageSrc":"/images/image_transparent.png","url":"http://vmi394276.contaboserver.net/uxportfolio/"},{"id":"2","title":"Project Two","description":"Web Development","imageSrc":"/images/image_transparent.png","url":"http://vmi394276.contaboserver.net/uxportfolio/"},{"id":"3","title":"Project Three","description":"Design","imageSrc":"/images/image_transparent.png","url":"http://vmi394276.contaboserver.net/uxportfolio/"},{"id":"4","title":"Project Four","description":"Marketing","imageSrc":"/images/image_transparent.png","url":"http://vmi394276.contaboserver.net/uxportfolio/"},{"id":"5","title":"Project Five","description":"Development","imageSrc":"/images/image_transparent.png","url":"http://vmi394276.contaboserver.net/uxportfolio/"},{"id":"6","title":"Project Six","description":"Design & Development","imageSrc":"/images/image_transparent.png","url":"http://vmi394276.contaboserver.net/uxportfolio/"}],"services":[{"id":"1","title":"UI/UX Design","description":"I can combine creative design and technical skills to build striking visualisations that bring your project to life."},{"id":"2","title":"Branding","description":"I can design key brand elements such as the logo, color scheme, typography, and other design components that makes your brand stand out from competitors."},{"id":"3","title":"Web Design","description":"I can build and optimize your online presence.  Website is the digital entry point into your business and a powerful revenue channel."},{"id":"4","title":"Art Direction","description":"I can help with the creation and development of online advertising ideas, with particular focus on their visual appearance."}],"aboutpara":"I focus on providing innovative solutions that address clients\' needs while making a memorable impression. My commitment to user satisfaction and attention to design detail guarantee that every project achieves its fullest design potential.","aboutpara1":"I believe that great design is inclusive, thoughtful, and fun, and there are still countless ways to improve products and services through design. When I\'m not exploring how to make the world better with design, you can catch me at concerts, enjoying cake, or exercising in a gym.","resume":{"tagline":"I\'m a UI/UX designer, product designer.","description":"I have delivered world-class user experiences in several projects. Well-versed with Adobe CC, Figma, HTML, CSS, React, Javascript, and WordPress.","experiences":[{"id":"1","dates":"May 2023 - Aug 2023","dates1":"Oct 2022 - Dec 2022","type":"","position":"UI/UX design student at LuckanHub","bullets":"Engaged in all phases of the Lyckanhub project, leveraging a keen interest in understanding the practical aspects of UX design methodologies. Utilized various UX techniques such as Personas, Empathy Maps, Affinity Maps, Journey Maps, and Crazy 8’s; Facilitated requirement gathering, ideation, and co-creation workshops to foster collaborative design processes; Authored a Bachelor\'s Thesis titled \\"User-centered design and the implementation of a digital interactive platform\\" (https://urn.fi/URN:NBN:fi:amk-2023121838093), drawing insights from project experiences; Constructed, managed and tested the forum for the website https://www.lyckanhub.fi/."},{"id":"2","dates":"Jan 2021 - Apr 2022","dates1":"","type":"","position":"Graphic and Web Designer at Keuda","bullets":"Created the digital artwork \\"Owl\\" selected as the emblem for the \\"SAKUstars2022\\" competition: https://sakustars.fi/2022/; Designed visuals and served as the creative lead for the \\"Reusing the old is better\\" competition, encompassing logo creation, website graphics (https://sakustars.fi/2022/), and a diverse array of deliverables such as banners, roll- ups, posters, animations, postcards, and print designs for apparel, utilizing Adobe Creative Cloud tools;Developed, managed, and tested the WordPress website https://sakustars.fi/2022/."},{"id":"3","dates":"Jan 2021 - Apr 2022","dates1":"","type":"","position":"Graphic and Web Designer at Lupita","bullets":"Created the digital artwork \\"Owl\\" selected as the emblem for the \\"SAKUstars2022\\" competition: https://sakustars.fi/2022/; Designed visuals and served as the creative lead for the \\"Reusing the old is better\\" competition, encompassing logo creation, website graphics (https://sakustars.fi/2022/), and a diverse array of deliverables such as banners, roll- ups, posters, animations, postcards, and print designs for apparel, utilizing Adobe Creative Cloud tools;Developed, managed, and tested the WordPress website https://sakustars.fi/2022/."}],"education":{"universityName":"Laurea University of Applied Sciences","universityDate":"2021-Present","universityPara":"BBA in Business Information Technology. Major: Digital Services Development including Design of Applications, Applications Development and Testing & Quality Assurance. Grade: 4.86 (210 points)"},"education1":{"universityName":"Pekka Halonen Academy","universityDate":"2019-2021","universityPara":"Degree in Media and Visual Expression, Graphic Design"},"languages":["Javascript","HTML5","CSS","PHP"],"frameworks":["React","Typescript","NodeJs"],"others":["Figma","Adobe CC"],"CMS":["WordPress","Drupal"]}}')}};