const customElement=tagName=>clazz=>{window.customElements.define(tagName,clazz);return clazz},property=options=>(proto,name)=>{proto.constructor.createProperty(name,options)},query=_query((target,selector)=>target.querySelector(selector)),queryAll=_query((target,selector)=>target.querySelectorAll(selector));function _query(queryFn){return selector=>(proto,propName)=>{Object.defineProperty(proto,propName,{get(){return queryFn(this.renderRoot,selector)},enumerable:!0,configurable:!0})}}const eventOptions=options=>(proto,name)=>{Object.assign(proto[name],options)};var decorators={customElement:customElement,property:property,query:query,queryAll:queryAll,eventOptions:eventOptions};const fromBooleanAttribute=value=>null!==value,toBooleanAttribute=value=>value?"":null,notEqual=(value,old)=>{return old!==value&&(old===old||value===value)},defaultPropertyDeclaration={attribute:!0,type:String,reflect:!1,hasChanged:notEqual},microtaskPromise=new Promise(resolve=>resolve(!0)),STATE_HAS_UPDATED=1,STATE_UPDATE_REQUESTED=1<<2,STATE_IS_REFLECTING=1<<3;class UpdatingElement extends HTMLElement{constructor(){super();this._updateState=0;this._instanceProperties=void 0;this._updatePromise=microtaskPromise;this._changedProperties=new Map;this._reflectingProperties=void 0;this.initialize()}static get observedAttributes(){this._finalize();const attributes=[];for(const[p,v]of this._classProperties){const attr=this._attributeNameForProperty(p,v);if(attr!==void 0){this._attributeToPropertyMap.set(attr,p);attributes.push(attr)}}return attributes}static createProperty(name,options=defaultPropertyDeclaration){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const superProperties=Object.getPrototypeOf(this)._classProperties;if(superProperties!==void 0){superProperties.forEach((v,k)=>this._classProperties.set(k,v))}}this._classProperties.set(name,options);if(this.prototype.hasOwnProperty(name)){return}const key="symbol"===typeof name?Symbol():`__${name}`;Object.defineProperty(this.prototype,name,{get(){return this[key]},set(value){const oldValue=this[name];this[key]=value;this._requestPropertyUpdate(name,oldValue,options)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized){return}const superCtor=Object.getPrototypeOf(this);if("function"===typeof superCtor._finalize){superCtor._finalize()}this._finalized=!0;this._attributeToPropertyMap=new Map;const props=this.properties,propKeys=[...Object.getOwnPropertyNames(props),...("function"===typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(props):[])];for(const p of propKeys){this.createProperty(p,props[p])}}static _attributeNameForProperty(name,options){const attribute=options!==void 0&&options.attribute;return!1===attribute?void 0:"string"===typeof attribute?attribute:"string"===typeof name?name.toLowerCase():void 0}static _valueHasChanged(value,old,hasChanged=notEqual){return hasChanged(value,old)}static _propertyValueFromAttribute(value,options){const type=options&&options.type;if(type===void 0){return value}const fromAttribute=type===Boolean?fromBooleanAttribute:"function"===typeof type?type:type.fromAttribute;return fromAttribute?fromAttribute(value):value}static _propertyValueToAttribute(value,options){if(options===void 0||options.reflect===void 0){return}const toAttribute=options.type===Boolean?toBooleanAttribute:options.type&&options.type.toAttribute||String;return toAttribute(value)}initialize(){this.renderRoot=this.createRenderRoot();this._saveInstanceProperties()}_saveInstanceProperties(){for(const[p]of this.constructor._classProperties){if(this.hasOwnProperty(p)){const value=this[p];delete this[p];if(!this._instanceProperties){this._instanceProperties=new Map}this._instanceProperties.set(p,value)}}}_applyInstanceProperties(){for(const[p,v]of this._instanceProperties){this[p]=v}this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){if(this._updateState&STATE_HAS_UPDATED){if(window.ShadyCSS!==void 0){window.ShadyCSS.styleElement(this)}}else{this.requestUpdate()}}disconnectedCallback(){}attributeChangedCallback(name,old,value){if(old!==value){this._attributeToProperty(name,value)}}_propertyToAttribute(name,value,options=defaultPropertyDeclaration){const ctor=this.constructor,attrValue=ctor._propertyValueToAttribute(value,options);if(attrValue!==void 0){const attr=ctor._attributeNameForProperty(name,options);if(attr!==void 0){this._updateState=this._updateState|STATE_IS_REFLECTING;if(null===attrValue){this.removeAttribute(attr)}else{this.setAttribute(attr,attrValue)}this._updateState=this._updateState&~STATE_IS_REFLECTING}}}_attributeToProperty(name,value){if(!(this._updateState&STATE_IS_REFLECTING)){const ctor=this.constructor,propName=ctor._attributeToPropertyMap.get(name);if(propName!==void 0){const options=ctor._classProperties.get(propName);this[propName]=ctor._propertyValueFromAttribute(value,options)}}}requestUpdate(name,oldValue){if(name!==void 0){const options=this.constructor._classProperties.get(name)||defaultPropertyDeclaration;return this._requestPropertyUpdate(name,oldValue,options)}return this._invalidate()}_requestPropertyUpdate(name,oldValue,options){if(!this.constructor._valueHasChanged(this[name],oldValue,options.hasChanged)){return this.updateComplete}if(!this._changedProperties.has(name)){this._changedProperties.set(name,oldValue)}if(!0===options.reflect){if(this._reflectingProperties===void 0){this._reflectingProperties=new Map}this._reflectingProperties.set(name,options)}return this._invalidate()}async _invalidate(){if(!this._hasRequestedUpdate){this._updateState=this._updateState|STATE_UPDATE_REQUESTED;let resolver;const previousValidatePromise=this._updatePromise;this._updatePromise=new Promise(r=>resolver=r);await previousValidatePromise;this._validate();resolver(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&STATE_UPDATE_REQUESTED}_validate(){if(this._instanceProperties){this._applyInstanceProperties()}if(this.shouldUpdate(this._changedProperties)){const changedProperties=this._changedProperties;this.update(changedProperties);this._markUpdated();if(!(this._updateState&STATE_HAS_UPDATED)){this._updateState=this._updateState|STATE_HAS_UPDATED;this.firstUpdated(changedProperties)}this.updated(changedProperties)}else{this._markUpdated()}}_markUpdated(){this._changedProperties=new Map;this._updateState=this._updateState&~STATE_UPDATE_REQUESTED}get updateComplete(){return this._updatePromise}shouldUpdate(_changedProperties){return!0}update(_changedProperties){if(this._reflectingProperties!==void 0&&0<this._reflectingProperties.size){for(const[k,v]of this._reflectingProperties){this._propertyToAttribute(k,this[k],v)}this._reflectingProperties=void 0}}updated(_changedProperties){}firstUpdated(_changedProperties){}}UpdatingElement._attributeToPropertyMap=new Map;UpdatingElement._finalized=!0;UpdatingElement._classProperties=new Map;UpdatingElement.properties={};var updatingElement={notEqual:notEqual,UpdatingElement:UpdatingElement};const directives=new WeakMap,directive=f=>(...args)=>{const d=f(...args);directives.set(d,!0);return d},isDirective=o=>"function"===typeof o&&directives.has(o);var directive$1={directive:directive,isDirective:isDirective};const isCEPolyfill=window.customElements!==void 0&&window.customElements.polyfillWrapFlushCallback!==void 0,reparentNodes=(container,start,end=null,before=null)=>{let node=start;while(node!==end){const n=node.nextSibling;container.insertBefore(node,before);node=n}},removeNodes=(container,startNode,endNode=null)=>{let node=startNode;while(node!==endNode){const n=node.nextSibling;container.removeChild(node);node=n}};var dom={isCEPolyfill:isCEPolyfill,reparentNodes:reparentNodes,removeNodes:removeNodes};const noChange={};var part={noChange:noChange};const marker=`{{lit-${(Math.random()+"").slice(2)}}}`,nodeMarker=`<!--${marker}-->`,markerRegex=new RegExp(`${marker}|${nodeMarker}`),boundAttributeSuffix="$lit$";class Template{constructor(result,element){this.parts=[];this.element=element;let index=-1,partIndex=0;const nodesToRemove=[],_prepareTemplate=template=>{const content=template.content,walker=document.createTreeWalker(content,133,null,!1);let previousNode,currentNode;while(walker.nextNode()){index++;previousNode=currentNode;const node=currentNode=walker.currentNode;if(1===node.nodeType){if(node.hasAttributes()){const attributes=node.attributes;let count=0;for(let i=0;i<attributes.length;i++){if(0<=attributes[i].value.indexOf(marker)){count++}}while(0<count--){const stringForPart=result.strings[partIndex],name=lastAttributeNameRegex.exec(stringForPart)[2],attributeLookupName=name.toLowerCase()+boundAttributeSuffix,attributeValue=node.getAttribute(attributeLookupName),strings=attributeValue.split(markerRegex);this.parts.push({type:"attribute",index,name,strings});node.removeAttribute(attributeLookupName);partIndex+=strings.length-1}}if("TEMPLATE"===node.tagName){_prepareTemplate(node)}}else if(3===node.nodeType){const nodeValue=node.nodeValue;if(0>nodeValue.indexOf(marker)){continue}const parent=node.parentNode,strings=nodeValue.split(markerRegex),lastIndex=strings.length-1;partIndex+=lastIndex;for(let i=0;i<lastIndex;i++){parent.insertBefore(""===strings[i]?createMarker():document.createTextNode(strings[i]),node);this.parts.push({type:"node",index:index++})}parent.insertBefore(""===strings[lastIndex]?createMarker():document.createTextNode(strings[lastIndex]),node);nodesToRemove.push(node)}else if(8===node.nodeType){if(node.nodeValue===marker){const parent=node.parentNode,previousSibling=node.previousSibling;if(null===previousSibling||previousSibling!==previousNode||previousSibling.nodeType!==Node.TEXT_NODE){parent.insertBefore(createMarker(),node)}else{index--}this.parts.push({type:"node",index:index++});nodesToRemove.push(node);if(null===node.nextSibling){parent.insertBefore(createMarker(),node)}else{index--}currentNode=previousNode;partIndex++}else{let i=-1;while(-1!==(i=node.nodeValue.indexOf(marker,i+1))){this.parts.push({type:"node",index:-1})}}}}};_prepareTemplate(element);for(const n of nodesToRemove){n.parentNode.removeChild(n)}}}const isTemplatePartActive=part=>-1!==part.index,createMarker=()=>document.createComment(""),lastAttributeNameRegex=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;var template={marker:marker,nodeMarker:nodeMarker,markerRegex:markerRegex,boundAttributeSuffix:boundAttributeSuffix,Template:Template,isTemplatePartActive:isTemplatePartActive,createMarker:createMarker,lastAttributeNameRegex:lastAttributeNameRegex};class TemplateInstance{constructor(template,processor,options){this._parts=[];this.template=template;this.processor=processor;this.options=options}update(values){let i=0;for(const part of this._parts){if(part!==void 0){part.setValue(values[i])}i++}for(const part of this._parts){if(part!==void 0){part.commit()}}}_clone(){const fragment=isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),parts=this.template.parts;let partIndex=0,nodeIndex=0;const _prepareInstance=fragment=>{const walker=document.createTreeWalker(fragment,133,null,!1);let node=walker.nextNode();while(partIndex<parts.length&&null!==node){const part=parts[partIndex];if(!isTemplatePartActive(part)){this._parts.push(void 0);partIndex++}else if(nodeIndex===part.index){if("node"===part.type){const part=this.processor.handleTextExpression(this.options);part.insertAfterNode(node);this._parts.push(part)}else{this._parts.push(...this.processor.handleAttributeExpressions(node,part.name,part.strings,this.options))}partIndex++}else{nodeIndex++;if("TEMPLATE"===node.nodeName){_prepareInstance(node.content)}node=walker.nextNode()}}};_prepareInstance(fragment);if(isCEPolyfill){document.adoptNode(fragment);customElements.upgrade(fragment)}return fragment}}var templateInstance={TemplateInstance:TemplateInstance};class TemplateResult{constructor(strings,values,type,processor){this.strings=strings;this.values=values;this.type=type;this.processor=processor}getHTML(){const endIndex=this.strings.length-1;let html="";for(let i=0;i<endIndex;i++){const s=this.strings[i];let addedMarker=!1;html+=s.replace(lastAttributeNameRegex,(_match,whitespace,name,value)=>{addedMarker=!0;return whitespace+name+boundAttributeSuffix+value+marker});if(!addedMarker){html+=nodeMarker}}return html+this.strings[endIndex]}getTemplateElement(){const template=document.createElement("template");template.innerHTML=this.getHTML();return template}}class SVGTemplateResult extends TemplateResult{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const template=super.getTemplateElement(),content=template.content,svgElement=content.firstChild;content.removeChild(svgElement);reparentNodes(content,svgElement.firstChild);return template}}var templateResult={TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult};const isPrimitive=value=>null===value||!("object"===typeof value||"function"===typeof value);class AttributeCommitter{constructor(element,name,strings){this.dirty=!0;this.element=element;this.name=name;this.strings=strings;this.parts=[];for(let i=0;i<strings.length-1;i++){this.parts[i]=this._createPart()}}_createPart(){return new AttributePart(this)}_getValue(){const strings=this.strings,l=strings.length-1;let text="";for(let i=0;i<l;i++){text+=strings[i];const part=this.parts[i];if(part!==void 0){const v=part.value;if(null!=v&&(Array.isArray(v)||"string"!==typeof v&&v[Symbol.iterator])){for(const t of v){text+="string"===typeof t?t:t+""}}else{text+="string"===typeof v?v:v+""}}}text+=strings[l];return text}commit(){if(this.dirty){this.dirty=!1;this.element.setAttribute(this.name,this._getValue())}}}class AttributePart{constructor(comitter){this.value=void 0;this.committer=comitter}setValue(value){if(value!==noChange&&(!isPrimitive(value)||value!==this.value)){this.value=value;if(!isDirective(value)){this.committer.dirty=!0}}}commit(){while(isDirective(this.value)){const directive$$1=this.value;this.value=noChange;directive$$1(this)}if(this.value===noChange){return}this.committer.commit()}}class NodePart{constructor(options){this.value=void 0;this._pendingValue=void 0;this.options=options}appendInto(container){this.startNode=container.appendChild(createMarker());this.endNode=container.appendChild(createMarker())}insertAfterNode(ref){this.startNode=ref;this.endNode=ref.nextSibling}appendIntoPart(part){part._insert(this.startNode=createMarker());part._insert(this.endNode=createMarker())}insertAfterPart(ref){ref._insert(this.startNode=createMarker());this.endNode=ref.endNode;ref.endNode=this.startNode}setValue(value){this._pendingValue=value}commit(){while(isDirective(this._pendingValue)){const directive$$1=this._pendingValue;this._pendingValue=noChange;directive$$1(this)}const value=this._pendingValue;if(value===noChange){return}if(isPrimitive(value)){if(value!==this.value){this._commitText(value)}}else if(value instanceof TemplateResult){this._commitTemplateResult(value)}else if(value instanceof Node){this._commitNode(value)}else if(Array.isArray(value)||value[Symbol.iterator]){this._commitIterable(value)}else{this._commitText(value)}}_insert(node){this.endNode.parentNode.insertBefore(node,this.endNode)}_commitNode(value){if(this.value===value){return}this.clear();this._insert(value);this.value=value}_commitText(value){const node=this.startNode.nextSibling;value=null==value?"":value;if(node===this.endNode.previousSibling&&node.nodeType===Node.TEXT_NODE){node.textContent=value}else{this._commitNode(document.createTextNode("string"===typeof value?value:value+""))}this.value=value}_commitTemplateResult(value){const template=this.options.templateFactory(value);if(this.value&&this.value.template===template){this.value.update(value.values)}else{const instance=new TemplateInstance(template,value.processor,this.options),fragment=instance._clone();instance.update(value.values);this._commitNode(fragment);this.value=instance}}_commitIterable(value){if(!Array.isArray(this.value)){this.value=[];this.clear()}const itemParts=this.value;let partIndex=0,itemPart;for(const item of value){itemPart=itemParts[partIndex];if(itemPart===void 0){itemPart=new NodePart(this.options);itemParts.push(itemPart);if(0===partIndex){itemPart.appendIntoPart(this)}else{itemPart.insertAfterPart(itemParts[partIndex-1])}}itemPart.setValue(item);itemPart.commit();partIndex++}if(partIndex<itemParts.length){itemParts.length=partIndex;this.clear(itemPart&&itemPart.endNode)}}clear(startNode=this.startNode){removeNodes(this.startNode.parentNode,startNode.nextSibling,this.endNode)}}class BooleanAttributePart{constructor(element,name,strings){this.value=void 0;this._pendingValue=void 0;if(2!==strings.length||""!==strings[0]||""!==strings[1]){throw new Error("Boolean attributes can only contain a single expression")}this.element=element;this.name=name;this.strings=strings}setValue(value){this._pendingValue=value}commit(){while(isDirective(this._pendingValue)){const directive$$1=this._pendingValue;this._pendingValue=noChange;directive$$1(this)}if(this._pendingValue===noChange){return}const value=!!this._pendingValue;if(this.value!==value){if(value){this.element.setAttribute(this.name,"")}else{this.element.removeAttribute(this.name)}}this.value=value;this._pendingValue=noChange}}class PropertyCommitter extends AttributeCommitter{constructor(element,name,strings){super(element,name,strings);this.single=2===strings.length&&""===strings[0]&&""===strings[1]}_createPart(){return new PropertyPart(this)}_getValue(){if(this.single){return this.parts[0].value}return super._getValue()}commit(){if(this.dirty){this.dirty=!1;this.element[this.name]=this._getValue()}}}class PropertyPart extends AttributePart{}let eventOptionsSupported=!1;try{const options={get capture(){eventOptionsSupported=!0;return!1}};window.addEventListener("test",options,options);window.removeEventListener("test",options,options)}catch(_e){}class EventPart{constructor(element,eventName,eventContext){this.value=void 0;this._pendingValue=void 0;this.element=element;this.eventName=eventName;this.eventContext=eventContext;this._boundHandleEvent=e=>this.handleEvent(e)}setValue(value){this._pendingValue=value}commit(){while(isDirective(this._pendingValue)){const directive$$1=this._pendingValue;this._pendingValue=noChange;directive$$1(this)}if(this._pendingValue===noChange){return}const newListener=this._pendingValue,oldListener=this.value,shouldRemoveListener=null==newListener||null!=oldListener&&(newListener.capture!==oldListener.capture||newListener.once!==oldListener.once||newListener.passive!==oldListener.passive),shouldAddListener=null!=newListener&&(null==oldListener||shouldRemoveListener);if(shouldRemoveListener){this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options)}if(shouldAddListener){this._options=getOptions(newListener);this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)}this.value=newListener;this._pendingValue=noChange}handleEvent(event){if("function"===typeof this.value){this.value.call(this.eventContext||this.element,event)}else{this.value.handleEvent(event)}}}const getOptions=o=>o&&(eventOptionsSupported?{capture:o.capture,passive:o.passive,once:o.once}:o.capture);var parts={isPrimitive:isPrimitive,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,NodePart:NodePart,BooleanAttributePart:BooleanAttributePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,EventPart:EventPart};class DefaultTemplateProcessor{handleAttributeExpressions(element,name,strings,options){const prefix=name[0];if("."===prefix){const comitter=new PropertyCommitter(element,name.slice(1),strings);return comitter.parts}if("@"===prefix){return[new EventPart(element,name.slice(1),options.eventContext)]}if("?"===prefix){return[new BooleanAttributePart(element,name.slice(1),strings)]}const comitter=new AttributeCommitter(element,name,strings);return comitter.parts}handleTextExpression(options){return new NodePart(options)}}const defaultTemplateProcessor=new DefaultTemplateProcessor;var defaultTemplateProcessor$1={DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor};function templateFactory(result){let templateCache=templateCaches.get(result.type);if(templateCache===void 0){templateCache={stringsArray:new WeakMap,keyString:new Map};templateCaches.set(result.type,templateCache)}let template=templateCache.stringsArray.get(result.strings);if(template!==void 0){return template}const key=result.strings.join(marker);template=templateCache.keyString.get(key);if(template===void 0){template=new Template(result,result.getTemplateElement());templateCache.keyString.set(key,template)}templateCache.stringsArray.set(result.strings,template);return template}const templateCaches=new Map;var templateFactory$1={templateFactory:templateFactory,templateCaches:templateCaches};const parts$1=new WeakMap,render=(result,container,options)=>{let part=parts$1.get(container);if(part===void 0){removeNodes(container,container.firstChild);parts$1.set(container,part=new NodePart(Object.assign({templateFactory},options)));part.appendInto(container)}part.setValue(result);part.commit()};var render$1={parts:parts$1,render:render};const html=(strings,...values)=>new TemplateResult(strings,values,"html",defaultTemplateProcessor),svg=(strings,...values)=>new SVGTemplateResult(strings,values,"svg",defaultTemplateProcessor);var litHtml={html:html,svg:svg,DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor,directive:directive,isDirective:isDirective,removeNodes:removeNodes,reparentNodes:reparentNodes,noChange:noChange,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,BooleanAttributePart:BooleanAttributePart,EventPart:EventPart,isPrimitive:isPrimitive,NodePart:NodePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,parts:parts$1,render:render,templateCaches:templateCaches,templateFactory:templateFactory,TemplateInstance:TemplateInstance,SVGTemplateResult:SVGTemplateResult,TemplateResult:TemplateResult,createMarker:createMarker,isTemplatePartActive:isTemplatePartActive,Template:Template};const walkerNodeFilter=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;function removeNodesFromTemplate(template,nodesToRemove){const{element:{content},parts}=template,walker=document.createTreeWalker(content,walkerNodeFilter,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),part=parts[partIndex],nodeIndex=-1,removeCount=0;const nodesToRemoveInTemplate=[];let currentRemovingNode=null;while(walker.nextNode()){nodeIndex++;const node=walker.currentNode;if(node.previousSibling===currentRemovingNode){currentRemovingNode=null}if(nodesToRemove.has(node)){nodesToRemoveInTemplate.push(node);if(null===currentRemovingNode){currentRemovingNode=node}}if(null!==currentRemovingNode){removeCount++}while(part!==void 0&&part.index===nodeIndex){part.index=null!==currentRemovingNode?-1:part.index-removeCount;partIndex=nextActiveIndexInTemplateParts(parts,partIndex);part=parts[partIndex]}}nodesToRemoveInTemplate.forEach(n=>n.parentNode.removeChild(n))}const countNodes=node=>{let count=node.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const walker=document.createTreeWalker(node,walkerNodeFilter,null,!1);while(walker.nextNode()){count++}return count},nextActiveIndexInTemplateParts=(parts,startIndex=-1)=>{for(let i=startIndex+1;i<parts.length;i++){const part=parts[i];if(isTemplatePartActive(part)){return i}}return-1};function insertNodeIntoTemplate(template,node,refNode=null){const{element:{content},parts}=template;if(null===refNode||refNode===void 0){content.appendChild(node);return}const walker=document.createTreeWalker(content,walkerNodeFilter,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),insertCount=0,walkerIndex=-1;while(walker.nextNode()){walkerIndex++;const walkerNode=walker.currentNode;if(walkerNode===refNode){insertCount=countNodes(node);refNode.parentNode.insertBefore(node,refNode)}while(-1!==partIndex&&parts[partIndex].index===walkerIndex){if(0<insertCount){while(-1!==partIndex){parts[partIndex].index+=insertCount;partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}return}partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}}}var modifyTemplate={removeNodesFromTemplate:removeNodesFromTemplate,insertNodeIntoTemplate:insertNodeIntoTemplate};const getTemplateCacheKey=(type,scopeName)=>`${type}--${scopeName}`;let compatibleShadyCSSVersion=!0;if("undefined"===typeof window.ShadyCSS){compatibleShadyCSSVersion=!1}else if("undefined"===typeof window.ShadyCSS.prepareTemplateDom){console.warn(`Incompatible ShadyCSS version detected.`+`Please update to at least @webcomponents/webcomponentsjs@2.0.2 and`+`@webcomponents/shadycss@1.3.1.`);compatibleShadyCSSVersion=!1}const shadyTemplateFactory=scopeName=>result=>{const cacheKey=getTemplateCacheKey(result.type,scopeName);let templateCache=templateCaches.get(cacheKey);if(templateCache===void 0){templateCache={stringsArray:new WeakMap,keyString:new Map};templateCaches.set(cacheKey,templateCache)}let template=templateCache.stringsArray.get(result.strings);if(template!==void 0){return template}const key=result.strings.join(marker);template=templateCache.keyString.get(key);if(template===void 0){const element=result.getTemplateElement();if(compatibleShadyCSSVersion){window.ShadyCSS.prepareTemplateDom(element,scopeName)}template=new Template(result,element);templateCache.keyString.set(key,template)}templateCache.stringsArray.set(result.strings,template);return template},TEMPLATE_TYPES=["html","svg"],removeStylesFromLitTemplates=scopeName=>{TEMPLATE_TYPES.forEach(type=>{const templates=templateCaches.get(getTemplateCacheKey(type,scopeName));if(templates!==void 0){templates.keyString.forEach(template=>{const{element:{content}}=template,styles=new Set;Array.from(content.querySelectorAll("style")).forEach(s=>{styles.add(s)});removeNodesFromTemplate(template,styles)})}})},shadyRenderSet=new Set,prepareTemplateStyles=(renderedDOM,template,scopeName)=>{shadyRenderSet.add(scopeName);const styles=renderedDOM.querySelectorAll("style");if(0===styles.length){return}const condensedStyle=document.createElement("style");for(let i=0;i<styles.length;i++){const style=styles[i];style.parentNode.removeChild(style);condensedStyle.textContent+=style.textContent}removeStylesFromLitTemplates(scopeName);insertNodeIntoTemplate(template,condensedStyle,template.element.content.firstChild);window.ShadyCSS.prepareTemplateStyles(template.element,scopeName);if(window.ShadyCSS.nativeShadow){const style=template.element.content.querySelector("style");renderedDOM.insertBefore(style.cloneNode(!0),renderedDOM.firstChild)}else{template.element.content.insertBefore(condensedStyle,template.element.content.firstChild);const removes=new Set([condensedStyle]);removeNodesFromTemplate(template,removes)}},render$2=(result,container,options)=>{const scopeName=options.scopeName,hasRendered=parts$1.has(container),needsScoping=container instanceof ShadowRoot&&compatibleShadyCSSVersion&&result instanceof TemplateResult,firstScopeRender=needsScoping&&!shadyRenderSet.has(scopeName),renderContainer=firstScopeRender?document.createDocumentFragment():container;render(result,renderContainer,Object.assign({templateFactory:shadyTemplateFactory(scopeName)},options));if(firstScopeRender){const part=parts$1.get(renderContainer);parts$1.delete(renderContainer);if(part.value instanceof TemplateInstance){prepareTemplateStyles(renderContainer,part.value.template,scopeName)}removeNodes(container,container.firstChild);container.appendChild(renderContainer);parts$1.set(container,part)}if(!hasRendered&&needsScoping){window.ShadyCSS.styleElement(container.host)}};var shadyRender={render:render$2,html:html,svg:svg,TemplateResult:TemplateResult};class LitElement extends UpdatingElement{update(changedProperties){super.update(changedProperties);const templateResult=this.render();if(templateResult instanceof TemplateResult){this.constructor.render(templateResult,this.renderRoot,{scopeName:this.localName,eventContext:this})}}render(){}}LitElement.render=render$2;var litElement={LitElement:LitElement,notEqual:notEqual,UpdatingElement:UpdatingElement,customElement:customElement,property:property,query:query,queryAll:queryAll,eventOptions:eventOptions,html:html,svg:svg};const previousValues=new WeakMap,unsafeHTML=directive(value=>part=>{if(!(part instanceof NodePart)){throw new Error("unsafeHTML can only be used in text bindings")}const previousValue=previousValues.get(part);if(previousValue===value&&isPrimitive(value)){return}const tmp=document.createElement("template");tmp.innerHTML=value;part.setValue(document.importNode(tmp.content,!0));previousValues.set(part,value)});var unsafeHtml={unsafeHTML:unsafeHTML};const _state=new WeakMap,until=directive((...args)=>part=>{let state=_state.get(part);if(state===void 0){state={values:[]};_state.set(part,state)}const previousValues=state.values;let changedSinceLastRender=!1;state.values=args;for(let i=0;i<args.length;i++){const value=args[i];if(value===previousValues[i]&&!changedSinceLastRender){continue}changedSinceLastRender=!0;if(isPrimitive(value)||"function"!==typeof value.then){part.setValue(value);state.lastRenderedIndex=i;break}state.lastRenderedIndex=void 0;Promise.resolve(value).then(resolvedValue=>{const index=state.values.indexOf(value);if(-1<index&&(state.lastRenderedIndex===void 0||index<state.lastRenderedIndex)){state.lastRenderedIndex=index;part.setValue(resolvedValue);part.commit()}})}});var until$1={until:until};const formatDate=timestring=>{const pad=v=>10>v?`0${v}`:v,dateString=timestring.split("T")[0],date=new Date(dateString),weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][date.getUTCDay()],day=pad(date.getUTCDate()),month=["January","February","March","April","May","June","July","August","September","October","November","December"][date.getUTCMonth()],year=date.getUTCFullYear();return`${weekday}, ${day} ${month} ${year}`},getLink=link=>link?link.replace("content.",""):"";var misc={formatDate:formatDate,getLink:getLink},article=({content,date_gmt,errorMessage,link,title})=>html`
  <article>
    <h1>${unsafeHTML(`<a href="${getLink(link)}">${title.rendered}</a>`)}</h1>
    <h2>${errorMessage?errorMessage:formatDate(date_gmt)}</h2>
    <p>${unsafeHTML(content.rendered)}</p>
    <hr />
  </article>
`,article$1={default:article},articles=({apiUrl,siteUrl})=>new Promise((resolve,reject)=>fetch(apiUrl).then(res=>{if(res.ok){return res.json().then(json=>json.map(res=>article(res)))}throw new Error(`status: ${res.status}${res.statusText?` | statusText: ${res.statusText}`:""}`)}).then(response=>resolve(response)).catch(err=>reject(err))).catch(err=>article({errorMessage:`${apiUrl?"":"Missing required attribute: apiUrl. "}${err.message}`,date_gmt:"",link:siteUrl,title:{rendered:"Error"},content:{rendered:"<p>Posts are unavailable. Please check the error and try again.</p>"}})),articles$1={default:articles},loading=html`
  <article>
    <h1><a href="${getLink()}">Loading...</a></h1>
  </article>
`,loading$1={default:loading},styles=html`
  <style>
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
  </style>
`,xPostpress={default:styles};const xPostpress$1=class extends LitElement{static get properties(){return{apiUrl:{type:String},siteUrl:{type:String}}}constructor(){super()}render(){return html`
      ${styles}
      ${until(articles({apiUrl:this.apiUrl,siteUrl:this.siteUrl}),loading)}
    `}};window.customElements.define("x-postpress",xPostpress$1);export{decorators as $decorators,updatingElement as $updatingElement,litElement as $litElement,unsafeHtml as $unsafeHtml,until$1 as $until,defaultTemplateProcessor$1 as $defaultTemplateProcessor,directive$1 as $directive,dom as $dom,modifyTemplate as $modifyTemplate,part as $part,parts as $parts,render$1 as $render,shadyRender as $shadyRender,templateFactory$1 as $templateFactory,templateInstance as $templateInstance,templateResult as $templateResult,template as $template,litHtml as $litHtml,article$1 as $article,articles$1 as $articles,loading$1 as $loading,xPostpress as $xPostpress$1,misc as $misc,customElement,property,query,queryAll,eventOptions,notEqual,UpdatingElement,notEqual as notEqual$1,UpdatingElement as UpdatingElement$1,customElement as customElement$1,property as property$1,query as query$1,queryAll as queryAll$1,eventOptions as eventOptions$1,html,svg,LitElement,unsafeHTML,until,DefaultTemplateProcessor,defaultTemplateProcessor,directive,isDirective,isCEPolyfill,reparentNodes,removeNodes,removeNodesFromTemplate,insertNodeIntoTemplate,noChange,isPrimitive,AttributeCommitter,AttributePart,NodePart,BooleanAttributePart,PropertyCommitter,PropertyPart,EventPart,parts$1 as parts,render,html as html$1,svg as svg$1,TemplateResult,render$2 as render$1,templateFactory,templateCaches,TemplateInstance,TemplateResult as TemplateResult$1,SVGTemplateResult,marker,nodeMarker,markerRegex,boundAttributeSuffix,Template,isTemplatePartActive,createMarker,lastAttributeNameRegex,DefaultTemplateProcessor as DefaultTemplateProcessor$1,defaultTemplateProcessor as defaultTemplateProcessor$1,directive as directive$1,isDirective as isDirective$1,removeNodes as removeNodes$1,reparentNodes as reparentNodes$1,noChange as noChange$1,AttributeCommitter as AttributeCommitter$1,AttributePart as AttributePart$1,BooleanAttributePart as BooleanAttributePart$1,EventPart as EventPart$1,isPrimitive as isPrimitive$1,NodePart as NodePart$1,PropertyCommitter as PropertyCommitter$1,PropertyPart as PropertyPart$1,parts$1,render as render$2,templateCaches as templateCaches$1,templateFactory as templateFactory$1,TemplateInstance as TemplateInstance$1,SVGTemplateResult as SVGTemplateResult$1,TemplateResult as TemplateResult$2,createMarker as createMarker$1,isTemplatePartActive as isTemplatePartActive$1,Template as Template$1,html as html$2,svg as svg$2,article as $articleDefault,articles as $articlesDefault,loading as $loadingDefault,styles as $xPostpressDefault,formatDate,getLink};