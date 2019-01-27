import { customElement, html, LitElement, TemplateResult } from 'lit-element'
import styles from '../../templates/styles/x-postpress-hamburger'

@customElement(<string>'x-postpress-hamburger')
export default class extends LitElement {
  render() {
    return html`
      ${<TemplateResult>styles}
      <a href="#" id="hamburger">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="black" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="white" />
        </svg>
      </a>
    `
  }
}
