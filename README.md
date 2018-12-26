x-postpress
======

## About

  * x-postpress is a collection of Web Components using [lit-html](https://lit-html.polymer-project.org/) and [LitElement](https://lit-element.polymer-project.org/)

  * Fetches [WordPress](https://wordpress.org/) posts from the [REST API](https://developer.wordpress.org/rest-api/) based on attributes set on the element, or parameters in the query string

  * Built to support Internet Explorer 11

## Usage

* Test the provided [element](https://kherrick.github.io/x-postpress/)
* Using the browser's devtools, change the `apiUrl` attribute within the `x-postpress` tag to render another REST API endpoint:
  ```html
  <x-postpress
    apiUrl="https://content.example.com/wp-json/wp/v2/posts"
    siteUrl="https://example.com/"
  ></x-postpress>
  ```
* Alternatively, override parameters by including them in the query string (example):
  ```html
  <a href="https://kherrick.github.io/x-postpress/?apiUrl=https://another.content.example.com/wp-json/wp/v2/posts&siteUrl=https://another.example.com">another.example.com</a>
  ```
