import { LitElement, html } from '/node_modules/lit-element/lit-element.js'
import { until } from '/node_modules/lit-html/directives/until.js'
import articles from '../templates/articles/articles.js'
import loading from '../templates/loading.js'
import styles from '../templates/styles/x-postpress.js'

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
  }

  render() {
    return html`
      ${styles}<slot name="articles"></slot>${
        until(
          articles({
            apiUrl: this.apiUrl,
            siteUrl: this.siteUrl
          }),
          loading
        )
      }
    `
  }
}

window.customElements.define('x-postpress', xPostpress)
