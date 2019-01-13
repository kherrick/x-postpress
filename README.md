x-postpress
======

## About

  * A Web Component built using [LitElement](https://lit-element.polymer-project.org/)

  * Fetches [WordPress](https://wordpress.org/) posts [from the REST API](https://developer.wordpress.org/rest-api/reference/posts/#list-posts) based on attributes set on the element

  * [Built to support Internet Explorer 11](https://github.com/kherrick/x-postpress/tree/master/build/es5-bundled)

## Try

  * Demo the element loading a WordPress REST API endpoint at [https://kherrick.github.io/x-postpress/](https://kherrick.github.io/x-postpress/)

## Use

* Add the Web Component to the project (unpkg and npm examples)
  1. load the custom element using a `script` tag (from unpkg):
      ```html
      <script type="module" src="https://unpkg.com/x-postpress"></script>
      ```
  2. Alternatively, try adding using the command line...
      ```bash
      npm i x-postpress
      ```
      ...then import the module from another file:

      ```javascript
      import 'x-postpress'
      ```

* Add the tag into the document and style using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables">CSS custom properties</a>. Articles can be included with the provided <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots">slot element</a>:
  ```html
  <style>
    x-postpress {
      --a-color: #000;
      --a-text-decoration: none;
      --a-hover-text-decoration: underline;
      --article-clear: inherit;
      --article-margin-bottom: 1rem;
      --article-margin-left: auto;
      --article-margin-right: auto;
      --article-margin-top: 0;
      --article-width: 80%;
      --h2-color: #333;
      --h2-font-size: smaller;
      --hr-clear: both;
      --hr-display: block;
      --img-display: inherit;
      --img-float: inherit;
      --img-height: auto;
      --img-max-height: inherit;
      --img-max-width: 100%;
      --img-padding-bottom: inherit;
      --img-padding-left: inherit;
      --img-padding-right: inherit;
      --img-padding-top: inherit;
      --img-width: auto;
      --ul-list-style-type: inherit;
      --p-clear: inherit;
      --p-text-align: inherit;
    }
  </style>

  <x-postpress
    apiUrl="https://content.example.com/wp-json/wp/v2/posts?per_page=1"
    siteUrl="https://example.com/"
  >
    <div slot="articles">
      <article>
        <h1><a href="https://example.com/1970/01/01/slotted/">
          Article
        </a></h1>
        <h2>Thursday, 01 January 1970</h2>
        <p>Lorem ipsum dolor sit amet</p>
        <hr>
      </article>
    </div>
  </x-postpress>
  ```

## Misc

* Other examples are available on [a dedicated branch](https://github.com/kherrick/x-postpress/tree/unpkg/src)

* Try using the browser's devtools to change the `apiUrl` attribute within the `x-postpress` tag to render another <a href="https://developer.wordpress.org/rest-api/reference/posts/#list-posts">REST API posts endpoint</a>

* If using the included [index.html](index.html), a link can be created to the page, and the custom element attributes can be overridden by including them in the query string (example):
  ```html
  <a href="http://localhost:8081/?apiUrl=https://content.example.com/wp-json/wp/v2/posts&siteUrl=https://example.com">example.com</a>
  ```

<div>
  <a href="https://github.com/kherrick/x-postpress">
    <img alt="postpress logo" src="images/manifest/icon-48x48.png" width="32px" />
  </a>
</div>

<div>
  <a href="https://saucelabs.com/">
    <img alt="Sauce Labs" src="images/assets/Sauce-Labs_Horiz_Red-Grey_RGB_200x28.png" />
  </a>
</div>

<div>
  <a href="https://www.webcomponents.org/element/x-postpress">
    <img alt="published on webcomponents.org" src="https://img.shields.io/badge/webcomponents.org-published-blue.png" />
  </a>
</div>

<div>
  <a href="https://travis-ci.org/kherrick/x-postpress/">
    <img alt="build status" src="https://api.travis-ci.org/kherrick/x-postpress.png?branch=master" />
  </a>
</div>
