import{_ as s}from"./index.e75b0c64.js";import{d as f,a as i,r as d,e as m,o as p,f as g,g as c,h as _,u as n,n as v}from"./vendor.188cc96d.js";function E(a){return{all:a=a||new Map,on:function(o,t){var e=a.get(o);e?e.push(t):a.set(o,[t])},off:function(o,t){var e=a.get(o);e&&(t?e.splice(e.indexOf(t)>>>0,1):a.set(o,[]))},emit:function(o,t){var e=a.get(o);e&&e.slice().map(function(r){r(t)}),(e=a.get("*"))&&e.slice().map(function(r){r(o,t)})}}}const h=E(),x={class:"flex flex-col h-screen font-murecho text-slate-700"},y=f({setup(a){const o=i(()=>s(()=>import("./Header.1a21935c.js"),["assets/Header.1a21935c.js","assets/Header.c1bdd64c.css","assets/vendor.188cc96d.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/index.e75b0c64.js","assets/index.0353c622.css"])),t=i(()=>s(()=>import("./Form.cac07576.js"),["assets/Form.cac07576.js","assets/Form.4de60c0f.css","assets/vendor.188cc96d.js","assets/index.09179fa1.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/index.e75b0c64.js","assets/index.0353c622.css"])),e=i(()=>s(()=>import("./Body.69eb27f6.js"),["assets/Body.69eb27f6.js","assets/Body.a1f2e397.css","assets/index.09179fa1.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.188cc96d.js","assets/index.e75b0c64.js","assets/index.0353c622.css"])),r=i(()=>s(()=>import("./Footer.f3ca2835.js"),["assets/Footer.f3ca2835.js","assets/vendor.188cc96d.js","assets/index.e75b0c64.js","assets/index.0353c622.css"]));let l=d(!1);return m(async()=>{await h.on("changeMode",u=>{l.value=u})}),(u,O)=>(p(),g("main",x,[c("header",null,[_(n(o))]),c("div",null,[_(n(t))]),c("div",{class:v(["flex-grow",n(l)?"bg-gray-800":"bg-gray-50"])},[_(n(e))],2),c("footer",null,[_(n(r))])]))}});var V=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"}));export{V as I,h as e};
