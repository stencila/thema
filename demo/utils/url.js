!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("thema",[],t):"object"==typeof exports?exports.thema=t():e.thema=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/thema/",n(n.s=82)}({82:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeQuery=t.upsertQuery=t.parseQueries=void 0,t.parseQueries=e=>window.location.search.replace("?","").split("&").reduce((t,n)=>{const[o,r]=n.split("=");return e.includes(o)?{...t,[o]:decodeURIComponent(r)}:t},{});const o=e=>new RegExp(`(&?${e})=([^&]+)`);t.upsertQuery=(e,t)=>{const n=new URL(window.location.href),r=decodeURIComponent(n.search);if(r.includes(e))return n.search=r.replace(o(e),"$1="+t),history.replaceState(null,"none",n.toString()),n.toString();const u=r.startsWith("?")?`&${encodeURIComponent(e)}=${encodeURIComponent(t)}`:`?${encodeURIComponent(e)}=${encodeURIComponent(t)}`;return n.search=r+u,history.replaceState(null,"none",n.toString()),n.toString()},t.removeQuery=e=>{const t=window.location.href.replace(o(e),"");history.replaceState(null,"none",t)}}})}));