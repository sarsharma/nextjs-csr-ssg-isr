(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5970)}])},887:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),i=n(9008),s=n.n(i),a=n(1163);let c={title:"Next.js Render Type",site_name:"Next.js Render Type",description:"A demo to differentiate CSR, SSR, SSG, and ISR",url:"https://next-render.theodorusclarence.com",image:"https://next-render.theodorusclarence.com/favicon/large-og.jpg",type:"website",robots:"follow, index"};function o(e){let t=(0,a.useRouter)(),n={...c,...e};return n.title=e.templateTitle?"".concat(e.templateTitle," | ").concat(n.site_name):n.title,(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:n.title}),(0,r.jsx)("meta",{name:"robots",content:n.robots}),(0,r.jsx)("meta",{content:n.description,name:"description"}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(n.url).concat(t.asPath)}),(0,r.jsx)("link",{rel:"canonical",href:"".concat(n.url).concat(t.asPath)}),(0,r.jsx)("meta",{property:"og:type",content:n.type}),(0,r.jsx)("meta",{property:"og:site_name",content:n.site_name}),(0,r.jsx)("meta",{property:"og:description",content:n.description}),(0,r.jsx)("meta",{property:"og:title",content:n.title}),(0,r.jsx)("meta",{name:"image",property:"og:image",content:n.image}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@th_clarence"}),(0,r.jsx)("meta",{name:"twitter:title",content:n.title}),(0,r.jsx)("meta",{name:"twitter:description",content:n.description}),(0,r.jsx)("meta",{name:"twitter:image",content:n.image}),n.date&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{property:"article:published_time",content:n.date}),(0,r.jsx)("meta",{name:"publish_date",property:"og:publish_date",content:n.date}),(0,r.jsx)("meta",{name:"author",property:"article:author",content:"Theodorus Clarence"})]}),l.map(e=>(0,r.jsx)("link",{...e},e.href)),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,r.jsx)("meta",{name:"msapplication-TileImage",content:"/favicon/ms-icon-144x144.png"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"})]})}let l=[{rel:"apple-touch-icon",sizes:"57x57",href:"/favicon/apple-icon-57x57.png"},{rel:"apple-touch-icon",sizes:"60x60",href:"/favicon/apple-icon-60x60.png"},{rel:"apple-touch-icon",sizes:"72x72",href:"/favicon/apple-icon-72x72.png"},{rel:"apple-touch-icon",sizes:"76x76",href:"/favicon/apple-icon-76x76.png"},{rel:"apple-touch-icon",sizes:"114x114",href:"/favicon/apple-icon-114x114.png"},{rel:"apple-touch-icon",sizes:"120x120",href:"/favicon/apple-icon-120x120.png"},{rel:"apple-touch-icon",sizes:"144x144",href:"/favicon/apple-icon-144x144.png"},{rel:"apple-touch-icon",sizes:"152x152",href:"/favicon/apple-icon-152x152.png"},{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-icon-180x180.png"},{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicon/android-icon-192x192.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"},{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon/favicon-96x96.png"},{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"},{rel:"manifest",href:"/favicon/manifest.json"}]},5939:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),i=n(6010),s=n(4775);function a(e){let{children:t,className:n="",...a}=e;return(0,r.jsx)(s.Z,{...a,className:(0,i.Z)("inline-flex items-center font-bold hover:text-primary-400 animated-underline","focus:outline-none focus-visible:text-primary-400 ",n),children:t})}},4775:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),i=n(6010),s=n(1664),a=n.n(s);function c(e){let{children:t,href:n,openNewTab:s,className:c,...o}=e,l=void 0!==s?s:n&&!n.startsWith("/")&&!n.startsWith("#");return l?(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:n,...o,className:(0,i.Z)(c,"cursor-[ne-resize]"),children:t}):(0,r.jsx)(a(),{href:n,children:(0,r.jsx)("a",{...o,className:c,children:t})})}},8791:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(1013),i=n(7294);function s(){let[e,t]=i.useState((0,r.Z)(new Date,"kk:mm:ss O"));return i.useEffect(()=>{let e=setInterval(()=>{t((0,r.Z)(new Date,"kk:mm:ss O"))},1e3);return()=>{clearInterval(e)}},[]),e}},5970:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893);n(7294);var i=n(8791),s=n(887),a=n(5939);function c(){let e=(0,i.Z)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{templateTitle:"Home"}),(0,r.jsx)("main",{children:(0,r.jsxs)("section",{className:"bg-dark",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen text-center text-white layout",children:[(0,r.jsx)("h1",{className:"text-2xl md:text-4xl",children:(0,r.jsx)(a.Z,{href:"https://github.com/theodorusclarence/nextjs-csr-ssg-isr",children:"Types of Next Rendering"})}),(0,r.jsx)("p",{className:"mt-2 text-sm text-gray-300",children:"Demo of Next.js rendering type using time API."}),(0,r.jsxs)("div",{className:"flex flex-col items-center mt-4 space-y-2",children:[(0,r.jsx)(a.Z,{href:"/render/csr",children:"CSR"}),(0,r.jsx)(a.Z,{href:"/render/ssr",children:"SSR"}),(0,r.jsx)(a.Z,{href:"/render/ssg",children:"SSG"}),(0,r.jsx)(a.Z,{href:"/render/isr",children:"ISR"}),(0,r.jsx)(a.Z,{href:"/render/isr-20",children:"ISR 20s"})]}),(0,r.jsxs)("footer",{className:"absolute text-gray-500 bottom-2",children:["\xa9 ",new Date().getFullYear()," By"," ",(0,r.jsx)(a.Z,{href:"https://theodorusclarence.com?ref=tsnextstarter",children:"Theodorus Clarence"})]})]}),(0,r.jsxs)("div",{className:"absolute text-sm font-medium text-right right-4 bottom-8 sm:bottom-4",children:[(0,r.jsx)("p",{className:"text-white",children:"Real Time:"}),(0,r.jsx)("p",{className:"text-primary-400",children:e})]})]})})]})}}},function(e){e.O(0,[6,13,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);