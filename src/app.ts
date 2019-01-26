import './components/app-drawer/x-postpress-hamburger'
import './components/x-postpress'
import '@polymer/app-layout/app-header/app-header'
import '@polymer/app-layout/app-toolbar/app-toolbar'
import '@polymer/app-layout/app-drawer/app-drawer'
import { AppDrawerElement } from '@polymer/app-layout/app-drawer/app-drawer'
import { LitElement, property, html } from 'lit-element'
import styles from './templates/styles/app'

class xPostpressApp extends LitElement {
  drawer: AppDrawerElement | null = null

  @property({type: String})
  siteTitle = '';

  @property({type: String})
  siteUrl = '';

  constructor() {
    super()
  }

  // hamburger menu click handler
  burgerHandler(e: any) {
    e.preventDefault()

    if (this.drawer) {
      this.drawer.style.display = 'inherit'
      this.drawer.toggle()
    }
  }

  firstUpdated() {
    this.drawer = this.shadowRoot!.querySelector('app-drawer')
  }

  render() {
    return html`
      ${styles}
      <app-header reveals>
        <app-toolbar>
          <div id="toolbar-child">
            <x-postpress-hamburger @click="${this.burgerHandler}"></x-postpress-hamburger>
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
