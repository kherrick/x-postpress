var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc)
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
    return c > 3 && r && Object.defineProperty(target, key, r), r
  }
import { customElement, html, LitElement, property } from 'lit-element'
import { getPosts, getPostsUrl } from '../utilities/misc'
import articles, { getErrorMessageArticle, loading } from '../templates/articles/articles'
import styles from '../templates/styles/x-postpress'
let default_1 = class default_1 extends LitElement {
  constructor() {
    super()
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
    // attributes for building the url
    this.urlAttributes = ['apiHost', 'apiPath']
    // attributes used to build a query string, if one is not included explicitly
    this.builtQueryStringAttributes = ['categories', 'include', 'page', 'per_page', 'search', 'slug', 'tags']
    // set only once, when posts are first retrieved
    this.didGetPosts = false
    // defaulted to the "loading article"
    this.articles = loading
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
      .catch(err => getErrorMessageArticle(err))
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
      <slot name="articles"></slot>
      ${this.articles}
    `
  }
}
default_1.styles = styles
__decorate([property({ type: String, reflect: true })], default_1.prototype, 'apiHost', void 0)
__decorate([property({ type: String, reflect: true })], default_1.prototype, 'apiPath', void 0)
__decorate([property({ type: String, reflect: true })], default_1.prototype, 'categories', void 0)
__decorate([property({ type: String, reflect: true })], default_1.prototype, 'include', void 0)
__decorate([property({ type: String, reflect: true })], default_1.prototype, 'page', void 0)
__decorate([property({ type: String, reflect: true })], default_1.prototype, 'per_page', void 0)
__decorate([property({ type: String, reflect: true })], default_1.prototype, 'tags', void 0)
__decorate([property({ type: String, reflect: true })], default_1.prototype, 'search', void 0)
__decorate([property({ type: String, reflect: true })], default_1.prototype, 'slug', void 0)
__decorate([property({ type: Array })], default_1.prototype, 'urlAttributes', void 0)
__decorate([property({ type: Array })], default_1.prototype, 'builtQueryStringAttributes', void 0)
__decorate([property({ type: Boolean })], default_1.prototype, 'didGetPosts', void 0)
__decorate([property({ type: Object, noAccessor: false })], default_1.prototype, 'articles', void 0)
default_1 = __decorate([customElement('x-postpress')], default_1)
export default default_1
