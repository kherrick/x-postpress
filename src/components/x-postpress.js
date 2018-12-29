import { formatDate } from '../utilities/misc.js'
import { LitElement, html } from '/node_modules/@polymer/lit-element/lit-element.js'
import { unsafeHTML } from '/node_modules/lit-html/directives/unsafe-html.js'
import { until } from '/node_modules/lit-html/directives/until.js'

const Style = html`
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
      clear: var(--article-clear, initial);
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
      float: var(--img-float, initial);
      height: var(--img-height, initial);
      max-height: var(--img-max-height, initial);
      max-width: var(--img-max-width, initial);
      padding-bottom: var(--img-padding-bottom, initial);
      padding-left: var(--img-padding-left, initial);
      padding-right: var(--img-padding-right, initial);
      padding-top: var(--img-padding-top, initial);
      width: var(--img-width, initial);
      width: var(--img-width, initial);
    }

    p {
      clear: var(--p-clear, initial);
    }
  </style>
`

const Loading = html`
  <article><h1>Loading...</h1></article>
`

const Article = ({ content, date_gmt, link, title }) => html`
  <article>
    <h1>${unsafeHTML(`<a href="${link.replace('content.', '')}">${title['rendered']}</a>`)}</h1>
    <h2>${formatDate(date_gmt)}</h2>
    <p>${unsafeHTML(content['rendered'])}</p>
    <hr />
  </article>
`

const xPostpress = class extends LitElement {
  static get properties() {
    return {
      apiUrl: {
        type: String
      },
      siteUrl: {
        type: String
      }
    }
  }

  constructor() {
    super()

    this.articles = []
  }

  render() {
    return html`
      ${Style}
      ${
        until(
          fetch(this.apiUrl)
            .then(res => {
              if (res.ok) {
                return res.json().then(json =>
                  json.map(article => {
                    this.articles.push(article)

                    return Article(article)
                  })
                )
              }

              throw new Error(`status: ${res.status}${res.statusText ? ` | statusText: ${res.statusText}` : ''}`)
            })
            .catch(err =>
              Article({
                date_gmt: new Date().toISOString(),
                link: this.siteUrl,
                title: {
                  rendered: err
                },
                content: {
                  rendered: '<p>Posts are unavailable. Please check the error and try again.</p>'
                }
              })
            ),
          Loading
        )
      }
    `
  }
}

window.customElements.define('x-postpress', xPostpress)
