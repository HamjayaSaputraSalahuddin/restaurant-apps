if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const f=e=>n(e,r),a={module:{uri:r},exports:c,require:f};i[r]=Promise.all(s.map((e=>a[e]||f(e)))).then((e=>(o(...e),c)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"5d982326781d6f8ea98b.jpg",revision:null},{url:"app.bundle.js",revision:"879f266d41fec26d081643d44130c33b"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"7f07a30c79a4811e0ae36b0e8ec2f0c1"},{url:"favicon.png",revision:"8c6c219ed63fa0ac08fb91c15780f4d5"},{url:"icons/maskable_icon_x128.png",revision:"b77abb723bb71e5c9d2133dbf584f203"},{url:"icons/maskable_icon_x192.png",revision:"0863f80a934bddbd34c6766db74e3304"},{url:"icons/maskable_icon_x250.png",revision:"8c6c219ed63fa0ac08fb91c15780f4d5"},{url:"icons/maskable_icon_x48.png",revision:"d30050b659c3a41d2555a8d1fe879556"},{url:"icons/maskable_icon_x72.png",revision:"7e7434ca1f53bfd87e26d1ebf23cacb3"},{url:"icons/maskable_icon_x96.png",revision:"53f04f29e86774acf455820e73d79ab3"},{url:"images/heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"index.html",revision:"b4652941535768710bde3340f3917bfb"}],{})}));
//# sourceMappingURL=sw.bundle.js.map
