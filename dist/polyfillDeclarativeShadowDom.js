const o=()=>{document.querySelectorAll("template[shadowroot]").forEach((o=>{var t;const e=o.getAttribute("shadowroot");(null===(t=null==o?void 0:o.parentNode)||void 0===t?void 0:t.attachShadow({mode:e})).appendChild(o.content),o.remove()}))};export{o as polyfillDeclarativeShadowDom};
