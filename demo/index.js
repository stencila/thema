!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}({16:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(6);t.examples=r.examples,t.isExample=e=>e in r.examples,t.resolveExample=e=>{const n=void 0===e?"":e.trim();return t.isExample(n)?r.examples[n]:r.examples.articleKitchenSink}},19:function(e,t,n){"use strict";var r,s,l,o;Object.defineProperty(t,"__esModule",{value:!0});const a=n(16),i=n(5),c=new URL(window.location.href);var u;!function(e){e.EXAMPLE="example",e.THEME="theme",e.HEADER="header"}(u||(u={}));const p={EXAMPLE:a.examples.articleReadme,THEME:"stencila",HEADER:"true"};const m=e=>{c.searchParams.set(u.EXAMPLE,e),history.pushState(null,"none",c.toString()),sessionStorage.setItem(u.EXAMPLE,e),null!==d&&(d.value=e);const t=new XMLHttpRequest;t.open("GET",`examples/${a.resolveExample(e)}.html`,!1),t.send(null);const n=t.responseText,r=(new DOMParser).parseFromString(n,"text/html");document.getElementsByTagName("main")[0].innerHTML=r.body.innerHTML},d=document.querySelector("#example-select");null!==d&&(d.innerHTML=Object.keys(a.examples).map(e=>`<option value="${e}">${e.replace(/^([a-z]+)([A-Z][a-z])*/g,"$1: $2")}</option>`).join(""),d.addEventListener("change",e=>{const t=e.currentTarget;null!==t&&m(t.value)})),m(null!=(s=null!=(r=c.searchParams.get(u.EXAMPLE))?r:sessionStorage.getItem(u.EXAMPLE))?s:p.EXAMPLE);const E=e=>{c.searchParams.set(u.THEME,e),history.pushState(null,"none",c.toString()),sessionStorage.setItem(u.THEME,e),null!==h&&(h.value=e),document.querySelectorAll('link.theme[rel="stylesheet"]').forEach(t=>t.disabled=t.id!==e),document.querySelectorAll("script.themeScript").forEach(e=>{document.body.removeChild(e)});const t=document.createElement("script");t.type="text/javascript",t.src=`themes/${e}/index.js`,t.classList.add("themeScript"),document.body.appendChild(t),setTimeout(()=>{document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0,cancelable:!0}))},300)},h=document.querySelector("#theme-select");null!==h&&(h.innerHTML=Object.keys(i.themes).map(e=>`<option value="${e}">${e.replace(/^([a-z])([A-Z][a-z])*/g,"$1$2")}</option>`).join(""),h.addEventListener("change",e=>{const t=e.currentTarget;null!==t&&E(t.value)})),E(null!=(o=null!=(l=c.searchParams.get(u.THEME))?l:sessionStorage.getItem(u.THEME))?o:p.THEME);const f=document.querySelector("#header");null!==f&&(f.style.display="false"===c.searchParams.get(u.HEADER)?"none":"block")},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.themes={bootstrap:"bootstrap",elife:"elife",nature:"nature",plos:"plos",rpng:"rpng",skeleton:"skeleton",stencila:"stencila"}},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3);t.themes=r.themes;const s="1.6.4".split(".")[0];t.styleEntry="styles.css",t.scriptEntry="index.js",t.isTheme=e=>Object.keys(r.themes).includes(e.toLowerCase().trim()),t.generateCDNUrl=e=>`https://unpkg.com/@stencila/thema@${s}/${e}`.replace(/\\/g,"/"),t.resolveTheme=(e,n=!1)=>{if(!t.isTheme(e))return;const r=`dist/browser/themes/${e}/${t.styleEntry}`,s=`dist/browser/themes/${e}/${t.scriptEntry}`,l=e=>n?e.map(t.generateCDNUrl):e;return{styles:l([r]),scripts:l([s])}}},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples={articleReadme:"articleReadme",articleKitchenSink:"articleKitchenSink",articleDrosophila:"articleDrosophila",articleAntibodies:"articleAntibodies"}}});