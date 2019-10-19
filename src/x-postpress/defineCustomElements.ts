import XPostpress from './src/XPostpress'

const defineCustomElements = () => {
  if (!customElements.get('x-postpress')) {
    customElements.define('x-postpress', XPostpress)
  }
}

export { defineCustomElements }
export default defineCustomElements
