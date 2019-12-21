import { css } from 'lit-element'

export default css`
  a,
  a:link,
  a:visited {
    color: var(--x-postpress-a-color, #000);
    text-decoration: var(--x-postpress-a-text-decoration, none);
  }

  a:hover {
    text-decoration: var(--x-postpress-a-hover-text-decoration, underline);
  }

  article, ::slotted(article) {
    clear: var(--x-postpress-article-clear, inherit);
    margin-bottom: var(--x-postpress-article-margin-bottom, 1rem);
    margin-left: var(--x-postpress-article-margin-left, auto);
    margin-right: var(--x-postpress-article-margin-right, auto);
    margin-top: var(--x-postpress-article-margin-top, 0);
    width: var(--x-postpress-article-width, 80%);
  }

  article .gallery {
    display: var(--x-postpress-article-gallery-display, inherit);
  }

  article .gallery-item {
    margin: var(--x-postpress-article-gallery-item-margin, inherit);
    flex: var(--x-postpress-article-gallery-item-flex, inherit);
  }

  h1 {
    color: var(--x-postpress-h1-color, inherit);
    font-weight: var(--x-postpress-h1-font-weight, inherit);
    font-size: var(--x-postpress-h1-font-size, inherit);
  }

  h2 {
    color: var(--x-postpress-h2-color, #333);
    font-size: var(--x-postpress-h2-font-size, smaller);
  }

  hr {
    clear: var(--x-postpress-hr-clear, both);
    display: var(--x-postpress-hr-display, block);
  }

  .wp-block-gallery img {
    display: var(--x-postpress-wp-block-gallery-img-display, inherit);
    float: var(--x-postpress-wp-block-gallery-img-float, inherit);
    height: var(--x-postpress-wp-block-gallery-img-height, auto);
    margin-bottom: var(--x-postpress-wp-block-gallery-img-margin-bottom, inherit);
    margin-left: var(--x-postpress-wp-block-gallery-img-margin-left, inherit);
    margin-right: var(--x-postpress-wp-block-gallery-img-margin-right, inherit);
    margin-top: var(--x-postpress-wp-block-gallery-img-margin-top, inherit);
    max-height: var(--x-postpress-wp-block-gallery-img-max-height, inherit);
    max-width: var(--x-postpress-wp-block-gallery-img-max-width, inherit);
    min-height: var(--x-postpress-wp-block-gallery-img-min-height, inherit);
    min-width: var(--x-postpress-wp-block-gallery-img-min-width, inherit);
    padding-bottom: var(--x-postpress-wp-block-gallery-img-padding-bottom, inherit);
    padding-left: var(--x-postpress-wp-block-gallery-img-padding-left, inherit);
    padding-right: var(--x-postpress-wp-block-gallery-img-padding-right, inherit);
    padding-top: var(--x-postpress-wp-block-gallery-img-padding-top, inherit);
    width: var(--x-postpress-wp-block-gallery-img-width, auto);
  }

  img {
    display: var(--x-postpress-img-display, inherit);
    float: var(--x-postpress-img-float, inherit);
    height: var(--x-postpress-img-height, auto);
    margin-bottom: var(--x-postpress-img-margin-bottom, inherit);
    margin-left: var(--x-postpress-img-margin-left, inherit);
    margin-right: var(--x-postpress-img-margin-right, inherit);
    margin-top: var(--x-postpress-img-margin-top, inherit);
    max-height: var(--x-postpress-img-max-height, inherit);
    max-width: var(--x-postpress-img-max-width, inherit);
    min-height: var(--x-postpress-img-min-height, inherit);
    min-width: var(--x-postpress-img-min-width, inherit);
    padding-bottom: var(--x-postpress-img-padding-bottom, inherit);
    padding-left: var(--x-postpress-img-padding-left, inherit);
    padding-right: var(--x-postpress-img-padding-right, inherit);
    padding-top: var(--x-postpress-img-padding-top, inherit);
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
`
