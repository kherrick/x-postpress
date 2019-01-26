import { formatDate, getLink } from '../../utilities/misc'
import { html } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'

export default (
  { content, date_gmt, errorMessage, link, title }:
  { content: any, date_gmt: any, errorMessage: any, link: any, title: any }
) => html`
  <article>
    <h1>${unsafeHTML(`<a href="${getLink(link)}">${title['rendered']}</a>`)}</h1>
    <h2>${errorMessage ? errorMessage : date_gmt ? formatDate(date_gmt) : ''}</h2>
    <p>${unsafeHTML(content['rendered'])}</p>
    <hr />
  </article>
`