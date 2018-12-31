import { getLink } from '../utilities/misc.js'
import { html } from '/node_modules/@polymer/lit-element/lit-element.js'

export default html`
  <article>
    <h1><a href="${getLink()}">Loading...</a></h1>
  </article>
`
