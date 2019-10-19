import{d as e,N as t,i as n,h as r}from"./lit-element-6721defd.js";import{removeSubdomain as a,formatDate as o}from"./misc.js";const s=new WeakMap,i=e(e=>r=>{if(!(r instanceof t))throw new Error("unsafeHTML can only be used in text bindings");const a=s.get(r);if(void 0!==a&&n(e)&&e===a.value&&r.value===a.fragment)return;const o=document.createElement("template");o.innerHTML=e;const i=document.importNode(o.content,!0);r.setValue(i),s.set(r,{value:e,fragment:i})});export default({content:e,date_gmt:t,errorMessage:n,link:s,title:d},c,l)=>r`
  <article>
    <h1>
      ${i(`\n        <a\n          href="${c?a(s,l):s}"\n        >\n          ${d.rendered}\n        </a>\n      `)}
    </h1>
    <h2>${n||(t?o(t):"")}</h2>
    <p>${i(e.rendered)}</p>
    <hr />
  </article>
`;
