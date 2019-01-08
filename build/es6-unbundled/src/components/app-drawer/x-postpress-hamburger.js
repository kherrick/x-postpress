define(["exports","/node_modules/@polymer/lit-element/lit-element.js","../../templates/styles/x-postpress-hamburger.js"],function(_exports,_litElement,_xPostpressHamburger){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.default=void 0;_xPostpressHamburger=babelHelpers.interopRequireDefault(_xPostpressHamburger);var _default=window.customElements.define("x-postpress-hamburger",class extends _litElement.LitElement{render(){return _litElement.html`
        ${_xPostpressHamburger.default}
        <a href="#" id="hamburger">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="black" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="white" />
          </svg>
        </a>
      `}});_exports.default=_default});