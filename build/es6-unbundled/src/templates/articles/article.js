define(["exports","../../utilities/misc.js","/node_modules/lit-element/lit-element.js","/node_modules/lit-html/directives/unsafe-html.js"],function(_exports,_misc,_litElement,_unsafeHtml){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.default=void 0;var _default=({content,date_gmt,errorMessage,link,title})=>_litElement.html`
  <article>
    <h1>${(0,_unsafeHtml.unsafeHTML)(`<a href="${(0,_misc.getLink)(link)}">${title.rendered}</a>`)}</h1>
    <h2>${errorMessage?errorMessage:(0,_misc.formatDate)(date_gmt)}</h2>
    <p>${(0,_unsafeHtml.unsafeHTML)(content.rendered)}</p>
    <hr />
  </article>
`;_exports.default=_default});