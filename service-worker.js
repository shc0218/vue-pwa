if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let c={};const l=e=>i(e,r),t={module:{uri:r},exports:c,require:l};n[r]=Promise.all(s.map((e=>t[e]||l(e)))).then((e=>(o(...e),c)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"yewon-pretty-no"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/chunk-vendors.0833f3cd.css",revision:null},{url:"/icons/icon-192x192.png",revision:"0de71780bcc168e7ad06ab2527343daa"},{url:"/icons/icon-256x256.png",revision:"44b34daf068e09a1e6266f90b2058554"},{url:"/icons/icon-384x384.png",revision:"374f897997b486fcbd8017cc70c197d5"},{url:"/icons/icon-512x512.png",revision:"6d830c04a449b61a35b5e289c087a579"},{url:"/index.html",revision:"7947c860381295c87e28ac513b4f61f5"},{url:"/js/app.5e6df9d3.js",revision:null},{url:"/js/chunk-vendors.eaa72014.js",revision:null},{url:"/manifest.json",revision:"f94b2a6b1194e970714b0aa19118fee0"}],{})}));
//# sourceMappingURL=service-worker.js.map
