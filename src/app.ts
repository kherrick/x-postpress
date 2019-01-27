import './components/app-drawer/x-postpress-hamburger'
import './components/x-postpress'
import '@polymer/app-layout/app-drawer/app-drawer'
import '@polymer/app-layout/app-header/app-header'
import '@polymer/app-layout/app-toolbar/app-toolbar'
import { AppDrawerElement } from '@polymer/app-layout/app-drawer/app-drawer'
import { customElement, html, LitElement, property, TemplateResult } from 'lit-element'
import styles from './templates/styles/app'

@customElement(<string>'x-postpress-app')
export default class extends LitElement {
  drawer: AppDrawerElement | null = <null>null

  @property({ type: String })
  siteTitle: string = <string>''

  @property({ type: String })
  siteUrl: string = <string>''

  constructor() {
    super()
  }

  // hamburger menu click handler
  burgerHandler(e: Event) {
    e.preventDefault()

    if (this.drawer) {
      this.drawer.style.display = <string>'inherit'
      this.drawer.toggle()
    }
  }

  firstUpdated() {
    this.drawer = this.shadowRoot
      ? this.shadowRoot.querySelector(<string>'app-drawer')
      : <null>null
  }

  render() {
    return <TemplateResult>html`
      ${<TemplateResult>styles}
      <app-header reveals>
        <app-toolbar>
          <div id="toolbar-child">
            <x-postpress-hamburger @click="${<(e: Event) => void>this.burgerHandler}"></x-postpress-hamburger>
            <div main-title><a href=${<string>this.siteUrl}>${<string>this.siteTitle}</a></div>
          </div>
        </app-toolbar>
      </app-header>
      <app-drawer swipe-open><slot name="app-drawer-children"></slot></app-drawer>
      <slot name="x-postpress"></slot>
    `
  }
}
