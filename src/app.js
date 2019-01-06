import './components/app-drawer/x-postpress-hamburger.js'
import './components/x-postpress.js'
import '/node_modules/@polymer/app-layout/app-drawer/app-drawer.js'
import '/node_modules/@polymer/app-layout/app-header/app-header.js'
import '/node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js'
import '/node_modules/@polymer/polymer/lib/elements/custom-style.js'
import { LitElement, html } from '/node_modules/@polymer/lit-element/lit-element.js'
import styles from './templates/styles/app.js'

const xPostpressApp = class extends LitElement {
  static get properties() {
    return {
      siteTitle: {
        type: String
      }
    }
  }

  constructor() {
    super()

    // set properties based on the query string parameters
    const siteUrlParam = this._queryParams(window.location.search)['siteUrl']
    this.siteUrl = typeof siteUrlParam === 'undefined' ? 'https://kherrick.github.io/x-postpress/' : siteUrlParam

    const apiUrlParam = this._queryParams(window.location.search)['apiUrl']
    this.apiUrl = typeof apiUrlParam === 'undefined' ? 'https://example.com/wp-json/wp/v2/posts' : apiUrlParam
  }

  firstUpdated() {
    // setup hamburger menu click handler
    const drawer = this.shadowRoot.querySelector('app-drawer')
    this.shadowRoot.querySelector('x-postpress-hamburger').onclick = () => {
      drawer.style.display = 'inherit'
      drawer.toggle()
    }

    // x-postpress was failing to fetch articles in IE11 as the apiUrl attribute was not available
    // as a property (when declared directly in the template) on the element when first rendered
    // - this seems to work around that problem
    const xPostpress = this.shadowRoot.querySelector('x-postpress')
    xPostpress.apiUrl = this.apiUrl
    xPostpress.siteUrl = this.siteUrl
  }

  // URLSearchParams alternative: https://gist.github.com/kherrick/913f6844c5a42f95f6bb865a2bf97ded
  _queryParams(search) {
    return search.split('&').reduce((q, query) => {
      const chunks = query.split('=')
      const key = chunks[0]
      const value = chunks[1]

      return (q[key.replace(/^\?/, '')] = value), q
    }, {})
  }

  render() {
    return html`
      ${styles}
      <app-header reveals>
        <app-toolbar>
          <div id="toolbar-child">
            <x-postpress-hamburger></x-postpress-hamburger>
            <div main-title><a href=${this.siteUrl}>${this.siteTitle}</a></div>
          </div>
        </app-toolbar>
      </app-header>
      <app-drawer id="drawer" swipe-open>
        <div id="drawer-child">
          <ul>
            <li>
              <h2>Featured Posts</h2>
              <div>
                <ul>
                  <li><a href="https://content.example.com/1970/01/01/example-article-1/">Example Article 1</a></li>
                  <li><a href="https://content.example.com/1970/01/02/example-article-2/">Example Article 2</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </app-drawer>
      <x-postpress></x-postpress>
    `
  }
}

window.customElements.define('x-postpress-app', xPostpressApp)
