var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc)
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
    return c > 3 && r && Object.defineProperty(target, key, r), r
  }
import './components/app-drawer/x-postpress-hamburger'
import './components/x-postpress'
import '@polymer/app-layout/app-drawer/app-drawer'
import '@polymer/app-layout/app-header/app-header'
import '@polymer/app-layout/app-toolbar/app-toolbar'
import { customElement, html, LitElement, property } from 'lit-element'
import styles from './templates/styles/app'
let default_1 = class default_1 extends LitElement {
  constructor() {
    super()
    this.drawer = null
    this.siteTitle = ''
    this.siteUrl = ''
  }
  // hamburger menu click handler
  burgerHandler(e) {
    e.preventDefault()
    if (this.drawer) {
      this.drawer.style.display = 'inherit'
      this.drawer.toggle()
    }
  }
  firstUpdated() {
    this.drawer = this.shadowRoot ? this.shadowRoot.querySelector('app-drawer') : null
  }
  render() {
    return html`
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
default_1.styles = styles
__decorate([property({ type: String })], default_1.prototype, 'siteTitle', void 0)
__decorate([property({ type: String })], default_1.prototype, 'siteUrl', void 0)
default_1 = __decorate([customElement('x-postpress-app')], default_1)
export default default_1
