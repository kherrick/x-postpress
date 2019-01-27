# x-postpress

A Web Component that fetches [WordPress](https://wordpress.org/) posts [from the REST API](https://developer.wordpress.org/rest-api/reference/posts/#list-posts) based on attributes set on the element.

## About

  * Built using [LitElement](https://lit-element.polymer-project.org/) and [TypeScript](https://www.typescriptlang.org/)
  * [Supports Internet Explorer 11](https://github.com/kherrick/x-postpress/tree/master/build/es5-bundled)

## Try

  * [Demo the element](https://kherrick.github.io/x-postpress/) on GitHub Pages
  * [Exercise the element](https://codesandbox.io/s/nry9x86mxm) on CodeSandbox

## Use

* Add the Web Component to the project (unpkg and npm examples)
  1. Load the custom element using a `script` tag:
      ```html
      <script
        src="https://unpkg.com/x-postpress"
        type="module"
      >
      </script>
      ```
  2. Alternatively, add using `npm`:
      ```bash
      npm i x-postpress
      ```
      Then import the module from another file:

      ```javascript
      import 'x-postpress'
      ```

* Add the tag into the document and style using <a href="https://github.com/kherrick/x-postpress/blob/master/src/templates/styles/x-postpress.js">available CSS custom properties</a>. Articles can be included with the provided <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots">slot element</a>:
  ```html
  <style>
    ul {
      list-style-type: var(--ul-list-style-type, inherit);
    }

    x-postpress {
      --ul-list-style-type: none;
    }
  </style>

  <x-postpress
    apiHost="https://content.example.com"
    per_page="1"
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

* An [Angular example](https://github.com/kherrick/angular-x-postpress) is available to try out with additional [unpkg implementations]((https://github.com/kherrick/x-postpress/tree/master/examples)) for various browsers
* Try using devtools to change the `apiHost` attribute within the `x-postpress` tag to render another <a href="https://developer.wordpress.org/rest-api/reference/posts/#list-posts">REST API posts endpoint</a>
* If building an app with x-postpress, the included [index.html](index.html) checks the query string for parameters to override particular custom element attributes (example):
  ```html
  <a
    href="http://localhost:8081/?apiHost=https://content.example.com"
  >
    example.com
  </a>
  ```

<div>
  <a href="https://kherrick.github.io/x-postpress/">
    <img alt="postpress logo" src="images/manifest/icon-48x48.png" width="32px" />
  </a>
</div>

<div>
  <a href="https://travis-ci.org/kherrick/x-postpress/">
    <img alt="Travis CI build status" src="https://api.travis-ci.org/kherrick/x-postpress.png?branch=master" />
  </a>
</div>

<div>
  <a href="https://saucelabs.com/">
    <img alt="Sauce Labs build status" src="https://saucelabs.com/buildstatus/kherrick" />
  </a>
</div>

<div>
  <a href="https://www.webcomponents.org/element/x-postpress">
    <img alt="published on webcomponents.org" src="https://img.shields.io/badge/webcomponents.org-published-blue.png" />
  </a>
</div>
