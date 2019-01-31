import { ArticlePayload } from '../templates/articles/article'
import { customElement, html, LitElement, property, TemplateResult } from 'lit-element'
import { getPosts, getPostsUrl, PostProps } from '../utilities/misc'
import articles, { ErrMessage, getErrorMessageArticle, loading } from '../templates/articles/articles'
import styles from '../templates/styles/x-postpress'

@customElement(<string>'x-postpress')
export default class extends LitElement {
  // set defaults
  @property({ type: String, reflect: <boolean>true })
  apiHost: string = 'https://content.example.com'
  @property({ type: String, reflect: <boolean>true })
  apiPath: string = '/wp-json/wp/v2'
  @property({ type: String, reflect: <boolean>true })

  // a single number, or comma separated list of numbers
  categories: string = <string>''
  @property({ type: String, reflect: <boolean>true })
  include: string = <string>''
  @property({ type: String, reflect: <boolean>true })
  page: string = <string>''
  @property({ type: String, reflect: <boolean>true })
  per_page: string = <string>''
  @property({ type: String, reflect: <boolean>true })
  tags: string = <string>''

  // a string
  @property({ type: String, reflect: <boolean>true })
  search: string = <string>''
  // example-slug
  @property({ type: String, reflect: <boolean>true })
  slug: string = <string>''

  // attributes for building the url
  @property({ type: Array })
  urlAttributes: Array<string> = <Array<string>>[
    <string>'apiHost',
    <string>'apiPath'
  ]

  // attributes used to build a query string, if one is not included explicitly
  @property({ type: Array })
  builtQueryStringAttributes: Array<string> = <Array<string>>[
    <string>'categories',
    <string>'include',
    <string>'page',
    <string>'per_page',
    <string>'search',
    <string>'slug',
    <string>'tags'
  ]

  // set only once, when posts are first retrieved
  @property({ type: Boolean })
  didGetPosts: boolean = <boolean>false

  // defaulted to the "loading article"
  @property({ type: Object, noAccessor: <boolean>false })
  articles: TemplateResult[] = <TemplateResult[]>loading

  constructor() {
    super()
  }

  // https://developer.wordpress.org/rest-api/reference/posts/#list-posts
  requestPosts() {
    const postsUrl = <string>getPostsUrl(
      <PostProps>{
        apiHost: <string>this.apiHost,
        apiPath: <string>this.apiPath,
        categories: <string>this.categories,
        include: <string>this.include,
        page: <string>this.page,
        per_page: <string>this.per_page,
        search: <string>this.search,
        slug: <string>this.slug,
        tags: <string>this.tags
      },
      <string[]>this.builtQueryStringAttributes
    )

    getPosts(<string>postsUrl)
      .then((res: object): TemplateResult[] => articles(<ArticlePayload[]>res))
      .catch((err: ErrMessage): TemplateResult[] => getErrorMessageArticle(<ErrMessage>err))
      .then((articles: TemplateResult[]): void => {
        this.didGetPosts = <boolean>true
        this.articles = <TemplateResult[]>articles
      })
  }

  firstUpdated() {
    this.requestPosts()
  }

  updated(changedProperties: Map<string, string>) {
    if (this.didGetPosts) {
      const shouldGetPostsAttributes: Array<string> = [
        ...<string[]>this.urlAttributes,
        ...<string[]>this.builtQueryStringAttributes
      ]

      const props: Generator = changedProperties.keys()
      let prop: IteratorResult<string> = <IteratorResult<string>>props.next()

      while (!<boolean>prop['done']) {
        if (<number>shouldGetPostsAttributes.indexOf(
          <string>prop['value']) !== <number>-1
        ) {
          this.requestPosts()

          break
        }

        prop = <IteratorResult<string>>props.next()
      }
    }
  }

  render() {
    return <TemplateResult>html`
      ${<TemplateResult>styles}
      <slot name="articles"></slot>
      ${<TemplateResult[]>this.articles}
    `
  }
}
