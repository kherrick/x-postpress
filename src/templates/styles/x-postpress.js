import { html } from '/node_modules/@polymer/lit-element/lit-element.js'

export default html`
  <style>
    a,
    a:link,
    a:visited {
      color: var(--a-color, #000);
      text-decoration: var(--a-text-decoration, none);
    }

    a:hover {
      text-decoration: var(--a-hover-text-decoration, underline);
    }

    article {
      clear: var(--article-clear, initial);
      margin-bottom: var(--article-margin-bottom, 1rem);
      margin-left: var(--article-margin-left, auto);
      margin-right: var(--article-margin-right, auto);
      margin-top: var(--article-margin-top, 0);
      width: var(--article-width, 80%);
    }

    h2 {
      color: var(--h2-color, #333);
      font-size: var(--h2-font-size, smaller);
    }

    hr {
      clear: var(--hr-clear, both);
      display: var(--hr-display, block);
    }

    img {
      display: var(--img-display, initial);
      float: var(--img-float, initial);
      height: var(--img-height, initial);
      max-height: var(--img-max-height, initial);
      max-width: var(--img-max-width, initial);
      padding-bottom: var(--img-padding-bottom, initial);
      padding-left: var(--img-padding-left, initial);
      padding-right: var(--img-padding-right, initial);
      padding-top: var(--img-padding-top, initial);
      width: var(--img-width, initial);
      width: var(--img-width, initial);
    }

    p {
      clear: var(--p-clear, initial);
    }
  </style>
`
