import { formatDate } from '../../utilities/misc'
import { html, TemplateResult } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'

export interface ArticlePayload {
  content: {
    rendered: string
  },
  date_gmt: string,
  errorMessage: string,
  link: string,
  title: {
    rendered: string
  }
}

export default ({
  content,
  date_gmt,
  errorMessage,
  link,
  title
}: ArticlePayload): TemplateResult => html`
  <article>
    <h1>${unsafeHTML(`<a href="${link}">${title['rendered']}</a>`)}</h1>
    <h2>${errorMessage ? errorMessage : date_gmt? formatDate(date_gmt) : ''}</h2>
    <p>${unsafeHTML(content['rendered'])}</p>
    <hr />
  </article>
`
