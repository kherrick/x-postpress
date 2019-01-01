define(["/node_modules/@polymer/lit-element/lit-element.js","/node_modules/lit-html/directives/until.js","../templates/articles/articles.js","../templates/loading.js","../templates/styles/x-postpress.js"],function(_litElement,_until,_articles,_loading,_xPostpress){"use strict";_articles=babelHelpers.interopRequireDefault(_articles);_loading=babelHelpers.interopRequireDefault(_loading);_xPostpress=babelHelpers.interopRequireDefault(_xPostpress);const xPostpress=class extends _litElement.LitElement{static get properties(){return{apiUrl:{type:String},siteUrl:{type:String}}}constructor(){super()}render(){return _litElement.html`
      ${_xPostpress.default}
      ${(0,_until.until)((0,_articles.default)({apiUrl:this.apiUrl,siteUrl:this.siteUrl}),_loading.default)}
    `}};window.customElements.define("x-postpress",xPostpress)});