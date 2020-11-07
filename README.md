# x-postpress

A Web Component used to render articles. Content can be slotted or fetched over the network.

## About

* Built with [custom elements](https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements), [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), and [declarative Shadow DOM](https://web.dev/declarative-shadow-dom/) using [TypeScript](https://www.typescriptlang.org/).

## Import

* Add the Web Component to the project (unpkg and npm examples)
  1. Load the custom element using a `script` tag:
      ```html
      <script
        src="https://unpkg.com/x-postpress@3"
        type="module"
      >
      </script>
      ```
  2. Alternatively, add using `npm`:
      ```bash
      npm i x-postpress@3
      ```
      Then import the module from another file:

      ```javascript
      import 'x-postpress'
      ```

## Use

* Add the tag into the document and style. Content can slotted, or fetched over the network as json modeled on the [WordPress REST API](https://developer.wordpress.org/rest-api/) [List Posts endpoint](https://developer.wordpress.org/rest-api/reference/posts/#list-posts), as well as preparsed HTML.

  ```html
  <style>
    x-postpress {
      --x-postpress-article-margin: 0 auto 1rem auto;
      --x-postpress-h1-font-size: 1.5rem;
    }
  </style>

  <!-- use the type and url attribute to fetch over the network -->
  <x-postpress
    type="json"
    url="https://example.com/wp-json/wp/v2/posts?include=1"
  ></x-postpress>

  <!-- pre-render or dynamically render slotted content -->
  <x-postpress>
    <template shadowroot="open">
      <slot name="posts"></slot>
    </template>
    <section slot="posts">
      <article>
        <h1>
          <a href="/example-article/">
            example-article
          </a>
        </h1>

        <p>Lorem ipsum</p>
      </article>
    </section>
  </x-postpress>

  <script>
    // https://web.dev/declarative-shadow-dom/
    document.querySelectorAll('template[shadowroot]')
      .forEach(template => {
        const mode = template.getAttribute('shadowroot');
        const shadowRoot = template.parentNode.attachShadow({
          mode
        });
        shadowRoot.appendChild(template.content);
        template.remove();
      });
  </script>

  <script
    src="https://unpkg.com/x-postpress@3"
    type="module"
  >
  </script>
  ```

<div>
  <a href="https://www.webcomponents.org/element/x-postpress">
    <img
      alt="published on webcomponents.org"
      src="https://img.shields.io/badge/webcomponents.org-published-blue.png"
    />
  </a>
</div>
