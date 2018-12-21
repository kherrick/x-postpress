x-postpress
======

## About

  * x-postpress is a collection of Web Components using [lit-html](https://lit-html.polymer-project.org/) and [LitElement](https://lit-element.polymer-project.org/)

  * Fetches [WordPress](https://wordpress.org/) posts from the [REST API](https://developer.wordpress.org/rest-api/) based on the `apiUrl` attribute, or parameter in the query string

  * Built to support Internet Explorer 11

## Usage

* Open the provided [html](https://kherrick.github.io/x-postpress/) in a web browser supporting [custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
* Using the browser's devtools, change the `apiUrl` attribute within the `x-postpress` tag to render another REST API endpoint:
  ```html
  <x-postpress apiUrl="https://blog.example.com/wp-json/wp/v2/posts"></x-postpress>
  ```
* Alternatively, override the default apiUrl in src, by including a parameter in the query string:
  ```html
  <a href="https://kherrick.github.io/x-postpress/?apiUrl=https://another.blog.example.com/wp-json/wp/v2/posts">another.blog.example.com</a>
  ```
