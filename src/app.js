import './components/app-drawer/x-postpress-hamburger.js'
import './components/x-postpress.js'
import '/node_modules/@polymer/app-layout/app-drawer/app-drawer.js'
import '/node_modules/@polymer/app-layout/app-header/app-header.js'
import '/node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js'
import '/node_modules/@polymer/polymer/lib/elements/custom-style.js'
import { LitElement, html } from '/node_modules/lit-element/lit-element.js'
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
  }

  firstUpdated() {
    // setup hamburger menu click handler
    const drawer = this.shadowRoot.querySelector('app-drawer')
    this.shadowRoot.querySelector('x-postpress-hamburger').onclick = () => {
      drawer.style.display = 'inherit'
      drawer.toggle()
    }
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
      <app-drawer swipe-open><slot name="app-drawer-children"></slot></app-drawer>
      <slot name="x-postpress"></slot>
    `
  }
}

window.customElements.define('x-postpress-app', xPostpressApp)
