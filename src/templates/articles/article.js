import { formatDate, getLink } from '../../utilities/misc.js'
import { html } from '/node_modules/lit-element/lit-element.js'
import { unsafeHTML } from '/node_modules/lit-html/directives/unsafe-html.js'

export default ({ content, date_gmt, errorMessage, link, title }) => html`
  <article>
    <h1>${unsafeHTML(`<a href="${getLink(link)}">${title['rendered']}</a>`)}</h1>
    <h2>${errorMessage ? errorMessage : formatDate(date_gmt)}</h2>
    <p>${unsafeHTML(content['rendered'])}</p>
    <hr />
  </article>
`
