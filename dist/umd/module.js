!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self)["x-postpress"]={})}(this,(function(t){"use strict";function e(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o}const s=new WeakMap,i=t=>"function"==typeof t&&s.has(t),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},o={},a={},l=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${l}--\x3e`,c=new RegExp(`${l}|${h}`),p="$lit$";class d{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],r=document.createTreeWalker(e.content,133,null,!1);let n=0,o=-1,a=0;const{strings:h,values:{length:d}}=t;for(;a<d;){const t=r.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)u(e[t].name,p)&&i++;for(;i-- >0;){const e=h[a],s=y.exec(e)[2],i=s.toLowerCase()+p,r=t.getAttribute(i);t.removeAttribute(i);const n=r.split(c);this.parts.push({type:"attribute",index:o,name:s,strings:n}),a+=n.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(l)>=0){const i=t.parentNode,r=e.split(c),n=r.length-1;for(let e=0;e<n;e++){let s,n=r[e];if(""===n)s=g();else{const t=y.exec(n);null!==t&&u(t[2],p)&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-p.length)+t[3]),s=document.createTextNode(n)}i.insertBefore(s,t),this.parts.push({type:"node",index:++o})}""===r[n]?(i.insertBefore(g(),t),s.push(t)):t.data=r[n],a+=n}}else if(8===t.nodeType)if(t.data===l){const e=t.parentNode;null!==t.previousSibling&&o!==n||(o++,e.insertBefore(g(),t)),n=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(s.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(l,e+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const u=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},m=t=>-1!==t.index,g=()=>document.createComment(""),y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class f{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let n,o=0,a=0,l=i.nextNode();for(;o<s.length;)if(n=s[o],m(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=e.pop(),l=i.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return r&&(document.adoptNode(t),customElements.upgrade(t)),t}}const _=` ${l} `;class v{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],r=t.lastIndexOf("\x3c!--");s=(r>-1||s)&&-1===t.indexOf("--\x3e",r+1);const n=y.exec(t);e+=null===n?t+(s?_:h):t.substr(0,n.index)+n[1]+n[2]+p+n[3]+l}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const S=t=>null===t||!("object"==typeof t||"function"==typeof t),w=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class b{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(S(t)||!w(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===o||S(t)&&t===this.value||(this.value=t,i(t)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const t=this.value;this.value=o,t(this)}this.value!==o&&this.committer.commit()}}class x{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(g()),this.endNode=t.appendChild(g())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=g()),t.__insert(this.endNode=g())}insertAfterPart(t){t.__insert(this.startNode=g()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}const t=this.__pendingValue;t!==o&&(S(t)?t!==this.value&&this.__commitText(t):t instanceof v?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):w(t)?this.__commitIterable(t):t===a?(this.value=a,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof f&&this.value.template===e)this.value.update(t.values);else{const s=new f(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const r of t)void 0===(s=e[i])&&(s=new x(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(r),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class C{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}if(this.__pendingValue===o)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=o}}class N extends b{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends P{}let T=!1;try{const t={get capture(){return T=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class E{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}if(this.__pendingValue===o)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=k(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=o}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const k=t=>t&&(T?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);const V=new class{handleAttributeExpressions(t,e,s,i){const r=e[0];if("."===r){return new N(t,e.slice(1),s).parts}return"@"===r?[new E(t,e.slice(1),i.eventContext)]:"?"===r?[new C(t,e.slice(1),s)]:new b(t,e,s).parts}handleTextExpression(t){return new x(t)}};function O(t){let e=$.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},$.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(l);return void 0===(s=e.keyString.get(i))&&(s=new d(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const $=new Map,M=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const U=(t,...e)=>new v(t,e,"html",V),H=133;function R(t,e){const{element:{content:s},parts:i}=t,r=document.createTreeWalker(s,H,null,!1);let n=L(i),o=i[n],a=-1,l=0;const h=[];let c=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(h.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-l,o=i[n=L(i,n)]}h.forEach(t=>t.parentNode.removeChild(t))}const j=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,H,null,!1);for(;s.nextNode();)e++;return e},L=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(m(e))return s}return-1};const q=(t,e)=>`${t}--${e}`;let z=!0;void 0===window.ShadyCSS?z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),z=!1);const X=t=>e=>{const s=q(e.type,t);let i=$.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},$.set(s,i));let r=i.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(l);if(void 0===(r=i.keyString.get(n))){const s=e.getTemplateElement();z&&window.ShadyCSS.prepareTemplateDom(s,t),r=new d(e,s),i.keyString.set(n,r)}return i.stringsArray.set(e.strings,r),r},F=["html","svg"],D=new Set,B=(t,e,s)=>{D.add(t);const i=s?s.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<n;t++){const e=r[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{F.forEach(e=>{const s=$.get(q(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),R(t,s)})})})(t);const a=i.content;s?function(t,e,s=null){const{element:{content:i},parts:r}=t;if(null==s)return void i.appendChild(e);const n=document.createTreeWalker(i,H,null,!1);let o=L(r),a=0,l=-1;for(;n.nextNode();){for(l++,n.currentNode===s&&(a=j(e),s.parentNode.insertBefore(e,s));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=L(r,o);return}o=L(r,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),R(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const I={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},W=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:W},G=Promise.resolve(!0),Q=1,Y=4,K=8,Z=16,tt=32,et="finalized";class st extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=G,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const i=this[t];this[s]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(et)||t.finalize(),this[et]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=W){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||I,r="function"==typeof i?i:i.fromAttribute;return r?r(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||I.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|tt,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=J){const i=this.constructor,r=i._attributeNameForProperty(t,s);if(void 0!==r){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|K,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=this._updateState&~K}}_attributeToProperty(t,e){if(this._updateState&K)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i)||J;this._updateState=this._updateState|Z,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~Z}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,r=i._classProperties.get(t)||J;i._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||this._updateState&Z||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|Y;const s=this._updatePromise;this._updatePromise=new Promise((s,i)=>{t=s,e=i});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&tt}get _hasRequestedUpdate(){return this._updateState&Y}get hasUpdated(){return this._updateState&Q}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&Q||(this._updateState=this._updateState|Q,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Y}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}st[et]=!0;const it=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}}:Object.assign({},e,{finisher(s){s.createProperty(e.key,t)}}),rt=(t,e,s)=>{e.constructor.createProperty(s,t)};function nt(t){return(e,s)=>void 0!==s?rt(t,e,s):it(t,e)}const ot="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol();class lt{constructor(t,e){if(e!==at)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(ot?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const ht=t=>t.flat?t.flat(1/0):function t(e,s=[]){for(let i=0,r=e.length;i<r;i++){const r=e[i];Array.isArray(r)?t(r,s):s.push(r)}return s}(t);class ct extends st{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){ht(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ot?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof v&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}ct.finalized=!0,ct.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,r=M.has(e),o=z&&11===e.nodeType&&!!e.host,a=o&&!D.has(i),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let i=M.get(e);void 0===i&&(n(e,e.firstChild),M.set(e,i=new x(Object.assign({templateFactory:O},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:X(i)},s)),a){const t=M.get(l);M.delete(l);const s=t.value instanceof f?t.value.template:void 0;B(i,l,s),n(e,e.firstChild),e.appendChild(l),M.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)};const pt=(t,e)=>`${t.apiHost}${t.apiPath}/posts${((t,e)=>{let s="";return Object.keys(t).forEach(i=>{-1!==e.indexOf(i)&&(s||!t[i]?s&&t[i]&&(s=`${s}&${i}=${t[i]}`):s=`?${i}=${t[i]}`)}),s})(t,e)}`,dt=new WeakMap,ut=(t=>(...e)=>{const i=t(...e);return s.set(i,!0),i})(t=>e=>{if(!(e instanceof x))throw new Error("unsafeHTML can only be used in text bindings");const s=dt.get(e);if(void 0!==s&&S(t)&&t===s.value&&e.value===s.fragment)return;const i=document.createElement("template");i.innerHTML=t;const r=document.importNode(i.content,!0);e.setValue(r),dt.set(e,{value:t,fragment:r})});var mt=({content:t,date_gmt:e,errorMessage:s,link:i,title:r},n,o)=>U`
  <article>
    <h1>
      ${ut(`\n        <a\n          href="${n?((t,e)=>t?t.replace(`//${e}.`,"//"):"")(i,o):i}"\n        >\n          ${r.rendered}\n        </a>\n      `)}
    </h1>
    <h2>${s||(e?(t=>{const e=t.split("T")[0],s=new Date(e),i=s.getUTCFullYear().toString(),r=(t=>t<10?`0${t}`:`${t}`)(s.getUTCDate());return`${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][s.getUTCDay()]}, ${r} ${["January","February","March","April","May","June","July","August","September","October","November","December"][s.getUTCMonth()]} ${i}`})(e):"")}</h2>
    <p>${ut(t.rendered)}</p>
    <hr />
  </article>
`;const gt=[mt({errorMessage:"",date_gmt:"",link:"",title:{rendered:"Loading..."},content:{rendered:""}},!1,"")];var yt=((t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof lt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new lt(s,at)})`
  a,
  a:link,
  a:visited {
    color: var(--a-color, #000);
    text-decoration: var(--a-text-decoration, none);
  }

  a:hover {
    text-decoration: var(--a-hover-text-decoration, underline);
  }

  article {
    clear: var(--article-clear, inherit);
    margin-bottom: var(--article-margin-bottom, 1rem);
    margin-left: var(--article-margin-left, auto);
    margin-right: var(--article-margin-right, auto);
    margin-top: var(--article-margin-top, 0);
    width: var(--article-width, 80%);
  }

  article .gallery {
    display: var(--article-gallery-display, inherit);
  }

  article .gallery-item {
    margin: var(--article-gallery-item-margin, inherit);
    flex: var(--article-gallery-item-flex, inherit);
  }

  h1 {
    font-size: var(--h1-font-size, inherit);
  }

  h2 {
    color: var(--h2-color, #333);
    font-size: var(--h2-font-size, smaller);
  }

  hr {
    clear: var(--hr-clear, both);
    display: var(--hr-display, block);
  }

  img {
    display: var(--img-display, inherit);
    float: var(--img-float, inherit);
    height: var(--img-height, auto);
    max-height: var(--img-max-height, inherit);
    max-width: var(--img-max-width, 100%);
    padding-bottom: var(--img-padding-bottom, inherit);
    padding-left: var(--img-padding-left, inherit);
    padding-right: var(--img-padding-right, inherit);
    padding-top: var(--img-padding-top, inherit);
    width: var(--img-width, auto);
  }

  ul {
    list-style-type: var(--ul-list-style-type, inherit);
  }

  p {
    clear: var(--p-clear, inherit);
    text-align: var(--p-text-align, inherit);
  }

  pre {
    overflow: auto;
  }
`;t.XPostpress=class extends ct{constructor(){super(),this.apiHost="",this.apiPath="/wp-json/wp/v2",this.removeArticleHeaderLinkSubDomain=!1,this.articleHeaderLinkSubDomain="",this.categories="",this.include="",this.page="",this.per_page="",this.tags="",this.search="",this.slug="",this.urlAttributes=["apiHost","apiPath"],this.builtQueryStringAttributes=["categories","include","page","per_page","search","slug","tags"],this.didGetPosts=!1,this.articles=gt}requestPosts(){(t=>new Promise((e,s)=>fetch(t).then(t=>{if(t.ok)return t.json();throw new Error(`status: ${t.status}\n          ${t.statusText?` | statusText: ${t.statusText}`:""}\n        `)}).then(t=>e(t)).catch(t=>s(t))))(pt({apiHost:this.apiHost,apiPath:this.apiPath,categories:this.categories,include:this.include,page:this.page,per_page:this.per_page,search:this.search,slug:this.slug,tags:this.tags},this.builtQueryStringAttributes)).then(t=>((t,e,s)=>t.map(t=>mt(t,e,s)))(t,this.removeArticleHeaderLinkSubDomain,this.articleHeaderLinkSubDomain)).catch(t=>(t=>[mt({errorMessage:`${t.message}`,date_gmt:"",link:"",title:{rendered:"Error"},content:{rendered:"<p>Posts are unavailable. Please check the error and try again.</p>"}},!1,"")])(t)).then(t=>{this.didGetPosts=!0,this.articles=t})}firstUpdated(){this.apiHost&&this.requestPosts()}updated(t){if(this.didGetPosts&&this.apiHost){const e=[...this.urlAttributes,...this.builtQueryStringAttributes],s=t.keys();let i=s.next();for(;!i.done;){if(-1!==e.indexOf(i.value)){this.requestPosts();break}i=s.next()}}}render(){return U`
      <slot name="articles"></slot>
      ${this.apiHost&&this.articles}
    `}},t.XPostpress.styles=yt,e([nt({type:String,reflect:!0})],t.XPostpress.prototype,"apiHost",void 0),e([nt({type:String,reflect:!0})],t.XPostpress.prototype,"apiPath",void 0),e([nt({type:Boolean,reflect:!0})],t.XPostpress.prototype,"removeArticleHeaderLinkSubDomain",void 0),e([nt({type:String,reflect:!0})],t.XPostpress.prototype,"articleHeaderLinkSubDomain",void 0),e([nt({type:String,reflect:!0})],t.XPostpress.prototype,"categories",void 0),e([nt({type:String,reflect:!0})],t.XPostpress.prototype,"include",void 0),e([nt({type:String,reflect:!0})],t.XPostpress.prototype,"page",void 0),e([nt({type:String,reflect:!0})],t.XPostpress.prototype,"per_page",void 0),e([nt({type:String,reflect:!0})],t.XPostpress.prototype,"tags",void 0),e([nt({type:String,reflect:!0})],t.XPostpress.prototype,"search",void 0),e([nt({type:String,reflect:!0})],t.XPostpress.prototype,"slug",void 0),e([nt({type:Array})],t.XPostpress.prototype,"urlAttributes",void 0),e([nt({type:Array})],t.XPostpress.prototype,"builtQueryStringAttributes",void 0),e([nt({type:Boolean})],t.XPostpress.prototype,"didGetPosts",void 0),e([nt({type:Object,noAccessor:!1})],t.XPostpress.prototype,"articles",void 0),t.XPostpress=e([(t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e))("x-postpress")],t.XPostpress),Object.defineProperty(t,"__esModule",{value:!0})}));
