import { ArticlePayload } from './templates/articles/article'
import { customElement, html, LitElement, property, TemplateResult } from 'lit-element'
import { getPosts, getPostsUrl } from './utilities/misc'
import articles, { getErrorMessageArticle, loading } from './templates/articles/articles'
import styles from './templates/styles/x-postpress'

@customElement('x-postpress')
class XPostpress extends LitElement {
  static styles = styles

  // set defaults
  @property({ type: String, reflect: true })
  apiHost: string = ''
  @property({ type: String, reflect: true })
  apiPath: string = '/wp-json/wp/v2'
  @property({ type: Boolean, reflect: true })
  removeArticleHeaderLinkSubDomain: boolean = false
  @property({ type: String, reflect: true })
  articleHeaderLinkSubDomain: string = ''

  // a single number, or comma separated list of numbers
  @property({ type: String, reflect: true })
  categories: string = ''
  @property({ type: String, reflect: true })
  include: string = ''
  @property({ type: String, reflect: true })
  page: string = ''
  @property({ type: String, reflect: true })
  per_page: string = ''
  @property({ type: String, reflect: true })
  tags: string = ''

  // a string
  @property({ type: String, reflect: true })
  search: string = ''
  // example-slug
  @property({ type: String, reflect: true })
  slug: string = ''

  // attributes for building the url
  @property({ type: Array })
  urlAttributes: Array<string> = [
    'apiHost',
    'apiPath'
  ]

  // attributes used to build a query string, if one is not included explicitly
  @property({ type: Array })
  builtQueryStringAttributes: Array<string> = [
    'categories',
    'include',
    'page',
    'per_page',
    'search',
    'slug',
    'tags'
  ]

  // defaulted to the "loading article"
  @property({ type: Object, noAccessor: false })
  articles: TemplateResult[] = loading

  // https://developer.wordpress.org/rest-api/reference/posts/#list-posts
  requestPosts(): void {
    const isAttributeValid = (attr: string) => attr && attr !== 'undefined' ? attr : ''

    const postsUrl = getPostsUrl(
      {
        apiHost: this.apiHost,
        apiPath: this.apiPath,
        categories: this.categories,
        include: isAttributeValid(this.include),
        page: this.page,
        per_page: this.per_page,
        search: this.search,
        slug: this.slug,
        tags: this.tags
      },
      this.builtQueryStringAttributes
    )

    getPosts(postsUrl)
      .then((res): TemplateResult[] => articles(<ArticlePayload[]>res, this.removeArticleHeaderLinkSubDomain, this.articleHeaderLinkSubDomain))
      .catch((err): TemplateResult[] => getErrorMessageArticle(err))
      .then((articles): void => {
        this.articles = articles
      })
  }

  firstUpdated() {
    if (this.apiHost) {
      this.requestPosts()
    }
  }

  updated(changedProperties: Map<string, string>): void {
    if (this.apiHost) {
      const shouldGetPostsAttributes: Array<string> = [
        ...this.urlAttributes,
        ...this.builtQueryStringAttributes
      ]

      const props = changedProperties.keys()
      let prop: IteratorResult<string> = props.next()

      while (!<boolean>prop['done']) {
        if (shouldGetPostsAttributes.indexOf(
          prop['value']) !== -1
        ) {
          this.requestPosts()

          break
        }

        prop = props.next()
      }
    }
  }

  render(): TemplateResult {
    return html`
      <slot name="articles"></slot>
      ${this.apiHost && <TemplateResult[]>this.articles}
    `
  }
}

export { XPostpress }
export default XPostpress
