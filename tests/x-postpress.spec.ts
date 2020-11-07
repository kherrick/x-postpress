import { expect } from '@open-wc/testing';

import unmock from 'unmock';
import mockResponse from './mockResponse.js';

import { XPostpress } from '../src/components/XPostpress.js';

describe('x-postpress', () => {
  let node: HTMLElement;

  before(() => {
    unmock.on();
  });

  it('', async () => {
    unmock
      .nock('https://example.com')
      .get('/wp-json/wp/v2/posts?include=1')
      .reply(200, mockResponse);

    if (!customElements.get('x-postpress')) {
      customElements.define('x-postpress', XPostpress);
    }

    node = document.createElement('x-postpress') as HTMLElement;
    node.setAttribute(
      'url',
      'https://example.com/wp-json/wp/v2/posts?include=1'
    );
    node.setAttribute('type', 'json');

    document.body.append(node);

    // wait for x-postpress-render event before continuing
    await new Promise(res =>
      document.body.addEventListener('x-postpress-render', e => res(e))
    );

    expect(node.shadowRoot?.querySelector('h1')?.innerText).to.equal(
      'Thoughts And Notions'
    );
  });

  after(() => {
    unmock.off();
  });
});
