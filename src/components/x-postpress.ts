import { getPosts, getPostsUrl } from '../utilities/misc'
import { LitElement, property, html, TemplateResult } from 'lit-element'
import articles, { getErrorMessageArticle, loading } from '../templates/articles/articles'
import styles from '../templates/styles/x-postpress'

class xPostpress extends LitElement {
  // set defaults
  @property({ type: String, reflect: true })
  apiHost = 'https://content.example.com'
  @property({ type: String, reflect: true })
  apiPath = '/wp-json/wp/v2'
  @property({ type: String, reflect: true })

  // a single number, or comma separated list of numbers
  categories = ''
  @property({ type: String, reflect: true })
  include = ''
  @property({ type: String, reflect: true })
  page = ''
  @property({ type: String, reflect: true })
  per_page = ''
  @property({ type: String, reflect: true })
  tags = ''

  // a string
  @property({ type: String, reflect: true })
  search = ''
  // example-slug
  @property({ type: String, reflect: true })
  slug = ''

  // attributes for building the url
  @property({ type: Boolean })
  urlAttributes = ['apiHost', 'apiPath']

  // attributes used to build a query string, if one is not included explicitly
  @property({ type: Array })
  builtQueryStringAttributes = ['categories', 'include', 'page', 'per_page', 'search', 'slug', 'tags']

  // set only once, when posts are first retrieved
  @property({ type: Boolean })
  didGetPosts = false

  // defaulted to the "loading article"
  @property({ type: TemplateResult })
  articles = loading

  constructor() {
    super()
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
      .then((res: any) => articles(res))
      .catch(err => getErrorMessageArticle(err))
      .then(articles => {
        this.didGetPosts = true
        this.articles = articles
      })
  }

  firstUpdated() {
    this.requestPosts()
  }

  updated(changedProperties: any) {
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
