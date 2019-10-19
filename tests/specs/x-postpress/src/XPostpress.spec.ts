import '../../../../src/x-postpress/src/XPostpress'
import { html, render } from 'lit-html'
import post from '../../../fixtures/post'

declare global {
  interface Window { fetchMock: any; }
}

window.fetchMock = window.fetchMock || {};

describe("XPostpress", function () {
  before(() => window.fetchMock.get('https://content.example.com/wp-json/wp/v2/posts?per_page=1', post))

  it('should render content in the articles slot', function (done) {
    render(html`
      <x-postpress
        apiHost="https://content.example.com"
        per_page="1"
      >
      </x-postpress>
    `, document.body)

    // wait one second, and run expectation
    setTimeout(() => {
      const expectedHeader = 'Example!'

      const xPostpress = document.querySelector('x-postpress')
      const article = xPostpress!.shadowRoot!.querySelector('article')
      const actualHeader = article!.querySelector('h1')!.innerText

      if (actualHeader !== expectedHeader) {
        throw Error(`expected header "${expectedHeader}" does not equal "${actualHeader}"`)
      }

      done()
    }, 1000)
  })
})
