import { formatDate } from '../utilities/misc.js'
import { LitElement, html } from '/node_modules/@polymer/lit-element/lit-element.js'
import { unsafeHTML } from '/node_modules/lit-html/directives/unsafe-html.js'
import { until } from '/node_modules/lit-html/directives/until.js'

const Style = html`
  <style>
    a,
    a:link,
    a:visited {
      color: #000;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    article {
      margin: 0 auto 1rem auto;
      width: 80%;
    }

    h2 {
      color: #333;
      font-size: smaller;
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
          fetch(this.apiUrl).then(res => {
            if (res.ok) {
              return res.json().then(json =>
                json.map(article => {
                  this.articles.push(article)

                  return Article(article)
                })
              )
            }
          }),
          Loading
        )
      }
    `
  }
}

window.customElements.define('x-postpress', xPostpress)
