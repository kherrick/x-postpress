x-postpress
======

## About

  * x-postpress is a collection of Web Components using [lit-html](https://lit-html.polymer-project.org/) and [LitElement](https://lit-element.polymer-project.org/)

  * Fetches [WordPress](https://wordpress.org/) posts from the [REST API](https://developer.wordpress.org/rest-api/) based on attributes set on the element, or parameters in the query string

  * [Built to support Internet Explorer 11](https://github.com/kherrick/x-postpress/tree/master/build/es5-bundled)

## Try

  * Demo the element loading a WordPress REST API endpoint at [https://kherrick.github.io/x-postpress/](https://kherrick.github.io/x-postpress/)

## Usage

* Load the custom element using a `script` tag
  ```html
  <script
    type="module"
    src="https://unpkg.com/x-postpress@latest/build/esm-bundled/src/components/x-postpress.js">
  </script>
  ```

* Add the tag into the document. Try using the browser's devtools to change the `apiUrl` attribute within the `x-postpress` tag to render another REST API endpoint:
  ```html
  <x-postpress
    apiUrl="https://a.content.example.com/wp-json/wp/v2/posts"
    siteUrl="https://a.example.com/"
  ></x-postpress>
  ```
* If using the included [index.html](index.html), a link can be created to the page, and the custom element attributes can be overridden by including them in the query string (example):
  ```html
  <a
    href="https://kherrick.github.io/x-postpress/?apiUrl=https://b.content.example.com/wp-json/wp/v2/posts&siteUrl=https://b.example.com"
  >
    b.example.com
  </a>
  ```

[![Build Status](https://api.travis-ci.org/kherrick/x-postpress.svg?branch=master)](https://travis-ci.org/kherrick/x-postpress/)

<img alt="postpress logo" src="images/manifest/icon-48x48.png" width="32px" />
