import { TemplateResult } from 'lit-element'
import article, { ArticlePayload } from './article'

export interface ErrMessage {
  message: string
}

export const getErrorMessageArticle = (err: ErrMessage): TemplateResult[] =>
  [
    article({
      errorMessage: `${err['message']}`,
      date_gmt: '',
      link: '',
      title: {
        rendered: 'Error'
      },
      content: {
        rendered: '<p>Posts are unavailable. Please check the error and try again.</p>'
      }
    })
  ]

export const loading: TemplateResult[] = [
  article({
    errorMessage: '',
    date_gmt: '',
    link: '',
    title: {
      rendered: 'Loading...'
    },
    content: {
      rendered: ''
    }
  })
]

export default (articles: ArticlePayload[]): TemplateResult[] =>
  articles.map(
    (res): TemplateResult =>
      article(res)
  )
