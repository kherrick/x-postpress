import { ArticlePayload } from '../templates/articles/article'
import { customElement, html, LitElement, property, TemplateResult } from 'lit-element'
import { getPosts, getPostsUrl } from '../utilities/misc'
import articles, { getErrorMessageArticle, loading } from '../templates/articles/articles'
import styles from '../templates/styles/x-postpress'

@customElement('x-postpress')
export default class extends LitElement {
  static styles = styles

  // set defaults
  @property({ type: String, reflect: true })
  apiHost: string = 'https://content.example.com'
  @property({ type: String, reflect: true })
  apiPath: string = '/wp-json/wp/v2'
  @property({ type: String, reflect: true })

  // a single number, or comma separated list of numbers
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

  // set only once, when posts are first retrieved
  @property({ type: Boolean })
  didGetPosts: boolean = false

  // defaulted to the "loading article"
  @property({ type: Object, noAccessor: false })
  articles: TemplateResult[] = loading

  constructor() {
    super()
  }

  // https://developer.wordpress.org/rest-api/reference/posts/#list-posts
  requestPosts(): void {
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
      .then((res): TemplateResult[] => articles(<ArticlePayload[]>res))
      .catch((err): TemplateResult[] => getErrorMessageArticle(err))
      .then((articles): void => {
        this.didGetPosts = true
        this.articles = articles
      })
  }

  firstUpdated() {
    this.requestPosts()
  }

  updated(changedProperties: Map<string, string>): void {
    if (this.didGetPosts) {
      const shouldGetPostsAttributes: Array<string> = [
        ...this.urlAttributes,
        ...this.builtQueryStringAttributes
      ]

      const props: Generator = changedProperties.keys()
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
      ${<TemplateResult[]>this.articles}
    `
  }
}
