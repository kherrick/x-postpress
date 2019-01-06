import{html}from"/node_modules/@polymer/lit-element/lit-element.js";export default html`
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
      clear: var(--article-clear, inherit);
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
      display: var(--img-display, inherit);
      float: var(--img-float, inherit);
      height: var(--img-height, auto);
      max-height: var(--img-max-height, inherit);
      max-width: var(--img-max-width, 100%);
      padding-bottom: var(--img-padding-bottom, inherit);
      padding-left: var(--img-padding-left, inherit);
      padding-right: var(--img-padding-right, inherit);
      padding-top: var(--img-padding-top, inherit);
      width: var(--img-width, auto);
    }

    ul {
      list-style-type: var(--ul-list-style-type, inherit);
    }

    p {
      clear: var(--p-clear, inherit);
      text-align: var(--p-text-align, inherit);
    }

    pre {
      overflow: auto;
    }
  </style>
`;