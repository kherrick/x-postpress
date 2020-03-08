!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self)["x-postpress"]={})}(this,(function(t){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */function e(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o
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
     */}const s=new WeakMap,i=t=>"function"==typeof t&&s.has(t),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},o={},a={},l=`{{lit-${String(Math.random()).slice(2)}}}`,p=`\x3c!--${l}--\x3e`,h=new RegExp(`${l}|${p}`);class c{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],r=document.createTreeWalker(e.content,133,null,!1);let n=0,o=-1,a=0;const{strings:p,values:{length:c}}=t;for(;a<c;){const t=r.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)d(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=p[a],s=m.exec(e)[2],i=s.toLowerCase()+"$lit$",r=t.getAttribute(i);t.removeAttribute(i);const n=r.split(h);this.parts.push({type:"attribute",index:o,name:s,strings:n}),a+=n.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(l)>=0){const i=t.parentNode,r=e.split(h),n=r.length-1;for(let e=0;e<n;e++){let s,n=r[e];if(""===n)s=g();else{const t=m.exec(n);null!==t&&d(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(n)}i.insertBefore(s,t),this.parts.push({type:"node",index:++o})}""===r[n]?(i.insertBefore(g(),t),s.push(t)):t.data=r[n],a+=n}}else if(8===t.nodeType)if(t.data===l){const e=t.parentNode;null!==t.previousSibling&&o!==n||(o++,e.insertBefore(g(),t)),n=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(s.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(l,e+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const d=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},u=t=>-1!==t.index,g=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class y{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let n,o=0,a=0,l=i.nextNode();for(;o<s.length;)if(n=s[o],u(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=e.pop(),l=i.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return r&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
     */const f=` ${l} `;class v{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],r=t.lastIndexOf("\x3c!--");s=(r>-1||s)&&-1===t.indexOf("--\x3e",r+1);const n=m.exec(t);e+=null===n?t+(s?f:p):t.substr(0,n.index)+n[1]+n[2]+"$lit$"+n[3]+l}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
     */const _=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new w(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(_(t)||!x(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===o||_(t)&&t===this.value||(this.value=t,i(t)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const t=this.value;this.value=o,t(this)}this.value!==o&&this.committer.commit()}}class b{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(g()),this.endNode=t.appendChild(g())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=g()),t.__insert(this.endNode=g())}insertAfterPart(t){t.__insert(this.startNode=g()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}const t=this.__pendingValue;t!==o&&(_(t)?t!==this.value&&this.__commitText(t):t instanceof v?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):x(t)?this.__commitIterable(t):t===a?(this.value=a,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const s=new y(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const r of t)s=e[i],void 0===s&&(s=new b(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(r),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}if(this.__pendingValue===o)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=o}}class C extends S{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends w{}let k=!1;try{const t={get capture(){return k=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class A{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}if(this.__pendingValue===o)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=T(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=o}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const T=t=>t&&(k?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
     */;const E=new class{handleAttributeExpressions(t,e,s,i){const r=e[0];if("."===r){return new C(t,e.slice(1),s).parts}return"@"===r?[new A(t,e.slice(1),i.eventContext)]:"?"===r?[new P(t,e.slice(1),s)]:new S(t,e,s).parts}handleTextExpression(t){return new b(t)}};
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
     */function $(t){let e=V.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},V.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(l);return s=e.keyString.get(i),void 0===s&&(s=new c(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const V=new Map,O=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const M=(t,...e)=>new v(t,e,"html",E)
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
     */;function U(t,e){const{element:{content:s},parts:i}=t,r=document.createTreeWalker(s,133,null,!1);let n=R(i),o=i[n],a=-1,l=0;const p=[];let h=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(p.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,n=R(i,n),o=i[n]}p.forEach(t=>t.parentNode.removeChild(t))}const H=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},R=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(u(e))return s}return-1};
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
const j=(t,e)=>`${t}--${e}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),L=!1);const z=t=>e=>{const s=j(e.type,t);let i=V.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},V.set(s,i));let r=i.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(l);if(r=i.keyString.get(n),void 0===r){const s=e.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(s,t),r=new c(e,s),i.keyString.set(n,r)}return i.stringsArray.set(e.strings,r),r},X=["html","svg"],q=new Set,D=(t,e,s)=>{q.add(t);const i=s?s.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<n;t++){const e=r[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{X.forEach(e=>{const s=V.get(j(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),U(t,s)})})})(t);const a=i.content;s?function(t,e,s=null){const{element:{content:i},parts:r}=t;if(null==s)return void i.appendChild(e);const n=document.createTreeWalker(i,133,null,!1);let o=R(r),a=0,l=-1;for(;n.nextNode();){for(l++,n.currentNode===s&&(a=H(e),s.parentNode.insertBefore(e,s));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=R(r,o);return}o=R(r,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),U(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const F={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},B=(t,e)=>e!==t&&(e==e||t==t),I={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:B},W=Promise.resolve(!0);class J extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=W,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=I){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const i=this[t];this[s]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=B){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||F,r="function"==typeof i?i:i.fromAttribute;return r?r(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||F.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=I){const i=this.constructor,r=i._attributeNameForProperty(t,s);if(void 0!==r){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i)||I;this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,r=i._classProperties.get(t)||I;i._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=4|this._updateState;const s=this._updatePromise;this._updatePromise=new Promise((s,i)=>{t=s,e=i});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}J.finalized=!0;
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
const Q=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}}:Object.assign({},e,{finisher(s){s.createProperty(e.key,t)}});function Y(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):Q(t,e)}
/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */const G="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class Z{constructor(t,e){if(e!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const tt=t=>t.flat?t.flat(1/0):function t(e,s=[]){for(let i=0,r=e.length;i<r;i++){const r=e[i];Array.isArray(r)?t(r,s):s.push(r)}return s}(t);class et extends J{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){tt(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof v&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}et.finalized=!0,et.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,r=O.has(e),o=L&&11===e.nodeType&&!!e.host,a=o&&!q.has(i),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let i=O.get(e);void 0===i&&(n(e,e.firstChild),O.set(e,i=new b(Object.assign({templateFactory:$},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:z(i)},s)),a){const t=O.get(l);O.delete(l);const s=t.value instanceof y?t.value.template:void 0;D(i,l,s),n(e,e.firstChild),e.appendChild(l),O.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)};const st=(t,e)=>`${t.apiHost}${t.apiPath}/posts${((t,e)=>{let s="";return Object.keys(t).forEach(i=>{-1!==e.indexOf(i)&&(s||!t[i]?s&&t[i]&&(s=`${s}&${i}=${t[i]}`):s=`?${i}=${t[i]}`)}),s})(t,e)}`
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
     */,it=new WeakMap,rt=(nt=t=>e=>{if(!(e instanceof b))throw new Error("unsafeHTML can only be used in text bindings");const s=it.get(e);if(void 0!==s&&_(t)&&t===s.value&&e.value===s.fragment)return;const i=document.createElement("template");i.innerHTML=t;const r=document.importNode(i.content,!0);e.setValue(r),it.set(e,{value:t,fragment:r})},(...t)=>{const e=nt(...t);return s.set(e,!0),e});var nt,ot=({content:t,date_gmt:e,errorMessage:s,link:i,title:r},n,o)=>M`
  <article>
    <h1>
      ${rt(`\n        <a\n          href="${n?((t,e)=>t?t.replace(`//${e}.`,"//"):"")(i,o):i}"\n        >\n          ${r.rendered}\n        </a>\n      `)}
    </h1>
    <h2>${s||(e?(t=>{const e=t.split("T")[0],s=new Date(e),i=s.getUTCFullYear().toString(),r=(n=s.getUTCDate())<10?`0${n}`:`${n}`;var n;return`${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][s.getUTCDay()]}, ${r} ${["January","February","March","April","May","June","July","August","September","October","November","December"][s.getUTCMonth()]} ${i}`})(e):"")}</h2>
    <p>${rt(t.rendered)}</p>
    <hr />
  </article>
`;const at=[ot({errorMessage:"",date_gmt:"",link:"",title:{rendered:"Loading..."},content:{rendered:""}},!1,"")];var lt,pt=(t,e,s)=>t.map(t=>ot(t,e,s)),ht=((t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof Z)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new Z(s,K)})`
  a,
  a:link,
  a:visited {
    color: var(--x-postpress-a-color, #000);
    text-decoration: var(--x-postpress-a-text-decoration, none);
  }

  a:hover {
    text-decoration: var(--x-postpress-a-hover-text-decoration, underline);
  }

  article, ::slotted(article) {
    clear: var(--x-postpress-article-clear, inherit);
    margin-bottom: var(--x-postpress-article-margin-bottom, 1rem);
    margin-left: var(--x-postpress-article-margin-left, auto);
    margin-right: var(--x-postpress-article-margin-right, auto);
    margin-top: var(--x-postpress-article-margin-top, 0);
    width: var(--x-postpress-article-width, 80%);
  }

  article .gallery {
    display: var(--x-postpress-article-gallery-display, inherit);
  }

  article .gallery-item {
    margin: var(--x-postpress-article-gallery-item-margin, inherit);
    flex: var(--x-postpress-article-gallery-item-flex, inherit);
  }

  h1 {
    color: var(--x-postpress-h1-color, inherit);
    font-weight: var(--x-postpress-h1-font-weight, inherit);
    font-size: var(--x-postpress-h1-font-size, inherit);
    text-align: var(--x-postpress-h1-text-align, initial);
  }

  h2 {
    color: var(--x-postpress-h2-color, #333);
    font-size: var(--x-postpress-h2-font-size, smaller);
    text-align: var(--x-postpress-h2-text-align, initial);
  }

  hr {
    clear: var(--x-postpress-hr-clear, both);
    display: var(--x-postpress-hr-display, block);
  }

  .wp-block-gallery img {
    display: var(--x-postpress-wp-block-gallery-img-display, inherit);
    float: var(--x-postpress-wp-block-gallery-img-float, inherit);
    height: var(--x-postpress-wp-block-gallery-img-height, auto);
    margin-bottom: var(--x-postpress-wp-block-gallery-img-margin-bottom, inherit);
    margin-left: var(--x-postpress-wp-block-gallery-img-margin-left, inherit);
    margin-right: var(--x-postpress-wp-block-gallery-img-margin-right, inherit);
    margin-top: var(--x-postpress-wp-block-gallery-img-margin-top, inherit);
    max-height: var(--x-postpress-wp-block-gallery-img-max-height, inherit);
    max-width: var(--x-postpress-wp-block-gallery-img-max-width, inherit);
    min-height: var(--x-postpress-wp-block-gallery-img-min-height, inherit);
    min-width: var(--x-postpress-wp-block-gallery-img-min-width, inherit);
    padding-bottom: var(--x-postpress-wp-block-gallery-img-padding-bottom, inherit);
    padding-left: var(--x-postpress-wp-block-gallery-img-padding-left, inherit);
    padding-right: var(--x-postpress-wp-block-gallery-img-padding-right, inherit);
    padding-top: var(--x-postpress-wp-block-gallery-img-padding-top, inherit);
    width: var(--x-postpress-wp-block-gallery-img-width, auto);
  }

  img {
    display: var(--x-postpress-img-display, inherit);
    float: var(--x-postpress-img-float, inherit);
    height: var(--x-postpress-img-height, auto);
    margin-bottom: var(--x-postpress-img-margin-bottom, inherit);
    margin-left: var(--x-postpress-img-margin-left, inherit);
    margin-right: var(--x-postpress-img-margin-right, inherit);
    margin-top: var(--x-postpress-img-margin-top, inherit);
    max-height: var(--x-postpress-img-max-height, inherit);
    max-width: var(--x-postpress-img-max-width, inherit);
    min-height: var(--x-postpress-img-min-height, inherit);
    min-width: var(--x-postpress-img-min-width, inherit);
    padding-bottom: var(--x-postpress-img-padding-bottom, inherit);
    padding-left: var(--x-postpress-img-padding-left, inherit);
    padding-right: var(--x-postpress-img-padding-right, inherit);
    padding-top: var(--x-postpress-img-padding-top, inherit);
    width: var(--x-postpress-img-width, auto);
  }

  ul {
    display: var(--x-postpress-ul-display, inherit);
    list-style-type: var(--x-postpress-ul-list-style-type, inherit);
    margin: var(--x-postpress-ul-margin, inherit);
    padding: var(--x-postpress-ul-padding, inherit);
  }

  li {
    display: var(--x-postpress-li-display, inherit);
    margin: var(--x-postpress-li-margin, inherit);
    padding: var(--x-postpress-li-padding, inherit);
  }

  p {
    clear: var(--x-postpress-p-clear, inherit);
    text-align: var(--x-postpress-p-text-align, inherit);
  }

  pre {
    overflow: auto;
  }
`;t.XPostpress=class extends et{constructor(){super(...arguments),this.apiHost="",this.apiPath="/wp-json/wp/v2",this.removeArticleHeaderLinkSubDomain=!1,this.articleHeaderLinkSubDomain="",this.categories="",this.include="",this.page="",this.per_page="",this.tags="",this.search="",this.slug="",this.urlAttributes=["apiHost","apiPath"],this.builtQueryStringAttributes=["categories","include","page","per_page","search","slug","tags"],this.articles=at,this.articlePayload=[]}requestPosts(){const t=st({apiHost:this.apiHost,apiPath:this.apiPath,categories:this.categories,include:(e=this.include,e&&"undefined"!==e?e:""),page:this.page,per_page:this.per_page,search:this.search,slug:this.slug,tags:this.tags},this.builtQueryStringAttributes);var e,s;this.articlePayload.length>0?this.articles=pt(this.articlePayload,this.removeArticleHeaderLinkSubDomain,this.articleHeaderLinkSubDomain):(s=t,new Promise((t,e)=>fetch(s).then(t=>{if(t.ok)return t.json();throw new Error(`status: ${t.status}\n          ${t.statusText?` | statusText: ${t.statusText}`:""}\n        `)}).then(e=>t(e)).catch(t=>e(t)))).then(t=>pt(t,this.removeArticleHeaderLinkSubDomain,this.articleHeaderLinkSubDomain)).catch(t=>(t=>[ot({errorMessage:`${t.message}`,date_gmt:"",link:"",title:{rendered:"Error"},content:{rendered:"<p>Posts are unavailable. Please check the error and try again.</p>"}},!1,"")])(t)).then(t=>{this.articles=t})}updated(t){if(this.apiHost){const e=[...this.urlAttributes,...this.builtQueryStringAttributes],s=t.keys();let i=s.next();for(;!i.done;){if(-1!==e.indexOf(i.value)){this.requestPosts();break}i=s.next()}}}render(){return M`
      <slot name="articles"></slot>
      ${this.apiHost&&this.articles}
    `}},t.XPostpress.styles=ht,e([Y({type:String,reflect:!0})],t.XPostpress.prototype,"apiHost",void 0),e([Y({type:String,reflect:!0})],t.XPostpress.prototype,"apiPath",void 0),e([Y({type:Boolean,reflect:!0})],t.XPostpress.prototype,"removeArticleHeaderLinkSubDomain",void 0),e([Y({type:String,reflect:!0})],t.XPostpress.prototype,"articleHeaderLinkSubDomain",void 0),e([Y({type:String,reflect:!0})],t.XPostpress.prototype,"categories",void 0),e([Y({type:String,reflect:!0})],t.XPostpress.prototype,"include",void 0),e([Y({type:String,reflect:!0})],t.XPostpress.prototype,"page",void 0),e([Y({type:String,reflect:!0})],t.XPostpress.prototype,"per_page",void 0),e([Y({type:String,reflect:!0})],t.XPostpress.prototype,"tags",void 0),e([Y({type:String,reflect:!0})],t.XPostpress.prototype,"search",void 0),e([Y({type:String,reflect:!0})],t.XPostpress.prototype,"slug",void 0),e([Y({type:Array})],t.XPostpress.prototype,"urlAttributes",void 0),e([Y({type:Array})],t.XPostpress.prototype,"builtQueryStringAttributes",void 0),e([Y({type:Object,noAccessor:!1})],t.XPostpress.prototype,"articles",void 0),e([Y({type:Object,noAccessor:!1})],t.XPostpress.prototype,"articlePayload",void 0),t.XPostpress=e([(lt="x-postpress",t=>"function"==typeof t?((t,e)=>(window.customElements.define(t,e),e))(lt,t):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){window.customElements.define(t,e)}}})(lt,t))],t.XPostpress),Object.defineProperty(t,"__esModule",{value:!0})}));
