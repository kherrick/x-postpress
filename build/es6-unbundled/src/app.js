define(["./components/app-drawer/x-postpress-hamburger.js","./components/x-postpress.js","/node_modules/@polymer/app-layout/app-drawer/app-drawer.js","/node_modules/@polymer/app-layout/app-header/app-header.js","/node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js","/node_modules/@polymer/polymer/lib/elements/custom-style.js","/node_modules/@polymer/lit-element/lit-element.js","./templates/styles/app.js"],function(_xPostpressHamburger,_xPostpress,_appDrawer,_appHeader,_appToolbar,_customStyle,_litElement,_app){"use strict";_app=babelHelpers.interopRequireDefault(_app);const xPostpressApp=class extends _litElement.LitElement{static get properties(){return{siteTitle:{type:String}}}constructor(){super()}firstUpdated(){const drawer=this.shadowRoot.querySelector("app-drawer");this.shadowRoot.querySelector("x-postpress-hamburger").onclick=()=>{drawer.style.display="inherit";drawer.toggle()}}render(){return _litElement.html`
      ${_app.default}
      <app-header reveals>
        <app-toolbar>
          <div id="toolbar-child">
            <x-postpress-hamburger></x-postpress-hamburger>
            <div main-title><a href=${this.siteUrl}>${this.siteTitle}</a></div>
          </div>
        </app-toolbar>
      </app-header>
      <app-drawer swipe-open><slot name="app-drawer-children"></slot></app-drawer>
      <slot name="x-postpress"></slot>
    `}};window.customElements.define("x-postpress-app",xPostpressApp)});