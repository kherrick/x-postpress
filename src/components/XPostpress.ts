import { formatDate } from '../utils/formatDate.js';

export const defaultStyles = `<style>
  a,
  a:link,
  a:visited {
    color: var(--x-postpress-a-color);
    text-decoration: var(--x-postpress-a-text-decoration);
  }

  a:hover {
    text-decoration: var(--x-postpress-a-hover-text-decoration);
  }

  a,
  a:link,
  a:visited {
    color: var(--x-postpress-a-color);
    text-decoration: var(--x-postpress-a-text-decoration);
  }

  a:hover {
    text-decoration: var(--x-postpress-a-hover-text-decoration);
  }

  article,
  ::slotted(article) {
    clear: var(--x-postpress-article-clear, inherit);
    margin: var(--x-postpress-article-margin, inherit);
    width: var(--x-postpress-article-width, 80%);
  }

  article .gallery {
    display: var(--x-postpress-article-gallery-display, inherit);
    flex-wrap: wrap;
  }

  article .gallery-item {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: var(--x-postpress-article-gallery-item-flex, inherit);
    justify-content: flex-start;
    line-height: 1;
    margin: var(--x-postpress-article-gallery-item-margin, inherit);
    padding: var(--x-postpress-article-gallery-item-padding, inherit)
  }

  article .gallery-columns-2 .gallery-item {
    flex-basis: 43.3%;
    padding: 5%;
  }

  article .gallery-columns-3 .gallery-item {
    flex-basis: 23.3%;
    padding: 5%;
  }

  article .gallery-icon {
    padding: 0 0.25rem 0 0.25rem;
  }

  .alignleft {
    float: left;
    margin: 0;
  }

  .alignright {
    float: right;
    margin: 0;
  }

  figure {
    margin: 0;
    padding: 0 0.25rem 0 0.25rem;
  }

  figure.alignleft {
    padding: 0 1rem 0 0;
  }

  figure > figcaption {
    font-size: smaller;
    min-height: 2rem;
    text-align: center;
  }

  h1 {
    color: var(--x-postpress-h1-color, inherit);
    font-size: var(--x-postpress-h1-font-size, inherit);
    font-weight: var(--x-postpress-h1-font-weight, inherit);
    margin: var(--x-postpress-h1-margin, inherit);
    text-align: var(--x-postpress-h1-text-align, initial);
  }

  h1 a, h1 a:visited, h1 a:link, h1 a:hover {
    text-decoration: none;
  }

  h2 {
    color: var(--x-postpress-h2-color, #777);
    display: var(--x-postpress-h2-display, initial);
    font-size: var(--x-postpress-h2-font-size, smaller);
    text-align: var(--x-postpress-h2-text-align, initial);
  }

  hr {
    clear: var(--x-postpress-hr-clear, both);
    display: var(--x-postpress-hr-display, block);
    margin: var(--x-postpress-hr-margin, initial);
    padding: var(--x-postpress-hr-padding, initial);
  }

  .wp-block-gallery img {
    display: var(--x-postpress-wp-block-gallery-img-display, inherit);
    float: var(--x-postpress-wp-block-gallery-img-float, inherit);
    height: var(--x-postpress-wp-block-gallery-img-height, auto);
    margin: var(--x-postpress-wp-block-gallery-img-margin, inherit);
    max-height: var(--x-postpress-wp-block-gallery-img-max-height, inherit);
    max-width: var(--x-postpress-wp-block-gallery-img-max-width, inherit);
    min-height: var(--x-postpress-wp-block-gallery-img-min-height, inherit);
    min-width: var(--x-postpress-wp-block-gallery-img-min-width, inherit);
    padding: var(--x-postpress-wp-block-gallery-img-padding, inherit);
    width: var(--x-postpress-wp-block-gallery-img-width, auto);
  }

  img {
    display: var(--x-postpress-img-display, inherit);
    float: var(--x-postpress-img-float, inherit);
    height: var(--x-postpress-img-height, auto);
    margin: var(--x-postpress-img-margin, inherit);
    max-height: var(--x-postpress-img-max-height, inherit);
    max-width: var(--x-postpress-img-max-width, inherit);
    min-height: var(--x-postpress-img-min-height, inherit);
    min-width: var(--x-postpress-img-min-width, inherit);
    padding: var(--x-postpress-img-padding, inherit);
    width: var(--x-postpress-img-width, auto);
  }

  ul {
    display: var(--x-postpress-ul-display, inherit);
    list-style-type: var(--x-postpress-ul-list-style-type, inherit);
    margin: var(--x-postpress-ul-margin, inherit);
    padding: var(--x-postpress-ul-padding, inherit);
  }

  li {
    display: var(--x-postpress-li-display, inherit);
    margin: var(--x-postpress-li-margin, inherit);
    padding: var(--x-postpress-li-padding, inherit);
  }

  p {
    clear: var(--x-postpress-p-clear, inherit);
    text-align: var(--x-postpress-p-text-align, inherit);
  }

  pre {
    overflow: auto;
  }

  x-postpress-code {
    margin: 1rem 0;
  }

  #singlePostNavigation, #previousPost, #nextPost {
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 0 1.5rem;
    text-align: center;
  }
</style>
`;

export class XPostpress extends HTMLElement {
  constructor() {
    super();
  }

  #hasRendered = false;
  #internalsAttached = false;

  #postDate: string | null | undefined = '';
  set postDate(postDate) {
    const subheader = this.shadowRoot?.querySelector('h2') as HTMLElement;

    if (subheader && this.#postDate !== postDate) {
      subheader.textContent = formatDate(`${postDate}`);
      this.#postDate = postDate;
    }
  }

  get postDate() {
    return this.#postDate;
  }

  #postLink: string | null | undefined = '';
  set postLink(postLink) {
    const link = this.shadowRoot?.querySelector('h1 > a') as HTMLElement;

    if (link && this.#postLink !== postLink) {
      link.setAttribute('href', `${postLink}`);
      this.#postLink = postLink;
    }
  }

  get postLink() {
    return this.#postLink;
  }

  #postTitle: string | null | undefined = '';
  set postTitle(postTitle) {
    const link = this.shadowRoot?.querySelector('h1 > a') as HTMLElement;

    if (link && this.#postTitle !== postTitle) {
      link.textContent = `${postTitle}`;
      this.#postTitle = postTitle;
    }
  }

  get postTitle() {
    return this.#postTitle;
  }

  #type: string | undefined = 'html';
  set type(type) {
    if (type) {
      this.#type = type;
      this.setAttribute('type', type);

      return;
    }

    this.#type = undefined;
    this.removeAttribute('type');
  }

  get type() {
    return this.getAttribute('type');
  }

  #url: string | undefined = '';
  set url(url) {
    if (url) {
      this.#url = url;
      this.setAttribute('url', url);

      return;
    }

    this.#url = undefined;
    this.removeAttribute('url');
  }

  get url() {
    return this.getAttribute('url');
  }

  static get observedAttributes() {
    return ['type', 'url'];
  }

  connectedCallback() {
    // @ts-ignore -- https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/818
    const internals = this.attachInternals();

    if (!internals.shadowRoot && !this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.#internalsAttached = true;
    }
  }

  private createArticle(
    content: string,
    link: string,
    title: string,
    date: string
  ) {
    const heading = document.createElement('h1');
    const anchor = document.createElement('a');
    const timestamp = document.createElement('h2');
    const article = document.createElement('article');
    const hr = document.createElement('hr');

    anchor.setAttribute('href', link);
    anchor.innerHTML = title;
    heading.append(anchor);

    timestamp.textContent = formatDate(date);
    article.innerHTML = JSON.parse(JSON.stringify(content));
    article.prepend(timestamp);
    article.prepend(heading);
    article.append(hr);

    return article;
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (newValue === null) {
      return;
    }

    switch (name) {
      case 'url':
        this.#url = newValue;
        break;
      case 'type':
        this.#type = newValue;
        break;
    }

    if (this.url && this.type === 'html') {
      this.fetchHTMLTemplate(this.url).then(html => {
        const article = html?.querySelector('article') as HTMLElement;
        const link = article.querySelector('h1 > a');

        this.postTitle = link?.textContent;
        this.postLink = link?.getAttribute('href');
        this.postDate = article.querySelector('h2')?.textContent;

        this.render(
          `
          ${defaultStyles}
          ${article.outerHTML}
        `,
          true
        );
      });
    }

    if (this.url && this.type === 'json') {
      this.fetchJSONPayload(this.url).then(({ content, link, title, date }) => {
        this.postTitle = title;
        this.postLink = link;
        this.postDate = date;

        this.render(
          `
          ${defaultStyles}
          ${this.createArticle(content, link, title, date).outerHTML}
        `,
          true
        );
      });
    }
  }

  private fetchJSONPayload(url: string) {
    return fetch(`${url}`)
      .then(res => res.json())
      .then(json => ({
        content: json[0]?.content?.rendered,
        link: json[0]?.link,
        title: json[0]?.title?.rendered,
        date: json[0]?.date,
      }));
  }

  private fetchHTMLTemplate(url: string) {
    return fetch(`${url}`)
      .then(res => res.text())
      .then(txt => new DOMParser().parseFromString(txt, 'text/html'));
  }

  private render(html: string, external = false) {
    if (
      (!this.#hasRendered && external === true) ||
      (!this.#internalsAttached && !this.#hasRendered)
    ) {
      const template = document.createElement('template');
      template.innerHTML = html;

      if (this.shadowRoot) {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.dispatchEvent(
          new CustomEvent('x-postpress-render', {
            bubbles: true,
            composed: true,
          })
        );

        this.#hasRendered = true;
      }
    }
  }
}

if (!customElements.get('x-postpress')) {
  customElements.define('x-postpress', XPostpress);
}
