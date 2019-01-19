import { getPosts, getPostsUrl } from '../utilities/misc.js'
import { LitElement, html } from '/node_modules/lit-element/lit-element.js'
import articles, { getErrorMessageArticle, loading } from '../templates/articles/articles.js'
import styles from '../templates/styles/x-postpress.js'

const xPostpress = class extends LitElement {
  static get properties() {
    const reflectedStringProp = { type: String, reflect: true }

    return {
      apiHost: reflectedStringProp,
      apiPath: reflectedStringProp,

      categories: reflectedStringProp,
      include: reflectedStringProp,
      page: reflectedStringProp,
      per_page: reflectedStringProp,
      search: reflectedStringProp,
      slug: reflectedStringProp,
      tags: reflectedStringProp,

      didGetPosts: { type: Boolean },
      articles: { type: Array }
    }
  }

  constructor() {
    super()

    // attributes for building the url
    this.urlAttributes = ['apiHost', 'apiPath']
    // attributes used to build a query string, if one is not included explicitly
    this.builtQueryStringAttributes = ['categories', 'include', 'page', 'per_page', 'search', 'slug', 'tags']

    // set only once, when posts are first retrieved
    this.didGetPosts = false
    // defaulted to the "loading article"
    this.articles = loading

    // set defaults
    this.apiHost = 'https://content.example.com'
    this.apiPath = '/wp-json/wp/v2'

    // a single number, or comma separated list of numbers
    this.categories = ''
    this.include = ''
    this.page = ''
    this.per_page = ''
    this.tags = ''

    // a string
    this.search = ''
    // example-slug
    this.slug = ''
  }

  // https://developer.wordpress.org/rest-api/reference/posts/#list-posts
  requestPosts() {
    const postsUrl = getPostsUrl(
      {
        apiHost: this.apiHost,
        apiPath: this.apiPath,
        categories: this.categories,
        include: this.include,
        page: this.page,
        per_page: this.per_page,
        search: this.search,
        slug: this.slug,
        tags: this.tags
      },
      this.builtQueryStringAttributes
    )

    getPosts(postsUrl)
      .then(res => articles(res))
      .catch(err => [getErrorMessageArticle(err, postsUrl)])
      .then(articles => {
        this.didGetPosts = true
        this.articles = articles
      })
  }

  firstUpdated() {
    this.requestPosts()
  }

  updated(changedProperties) {
    if (this.didGetPosts) {
      const shouldGetPostsAttributes = [...this.urlAttributes, ...this.builtQueryStringAttributes]
      const props = changedProperties.keys()

      let prop = props.next()

      while (!prop['done']) {
        if (shouldGetPostsAttributes.indexOf(prop['value']) !== -1) {
          this.requestPosts()

          break
        }

        prop = props.next()
      }
    }
  }

  render() {
    return html`
      ${styles}<slot name="articles"></slot>${this.articles}
    `
  }
}

window.customElements.define('x-postpress', xPostpress)
