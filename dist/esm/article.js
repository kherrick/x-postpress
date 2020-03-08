import{d as e,N as t,i as n,h as r}from"./lit-element-6721defd.js";import{removeSubdomain as a,formatDate as o}from"./misc.js";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s=new WeakMap,i=e(e=>r=>{if(!(r instanceof t))throw new Error("unsafeHTML can only be used in text bindings");const a=s.get(r);if(void 0!==a&&n(e)&&e===a.value&&r.value===a.fragment)return;const o=document.createElement("template");o.innerHTML=e;const i=document.importNode(o.content,!0);r.setValue(i),s.set(r,{value:e,fragment:i})});export default({content:e,date_gmt:t,errorMessage:n,link:s,title:d},c,l)=>r`
  <article>
    <h1>
      ${i(`\n        <a\n          href="${c?a(s,l):s}"\n        >\n          ${d.rendered}\n        </a>\n      `)}
    </h1>
    <h2>${n||(t?o(t):"")}</h2>
    <p>${i(e.rendered)}</p>
    <hr />
  </article>
`;
