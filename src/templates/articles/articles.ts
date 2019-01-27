import { TemplateResult } from 'lit-element'
import article, { ArticlePayload } from './article'

export interface ErrMessage {
  message: string
}

export const getErrorMessageArticle = (err: ErrMessage): TemplateResult[] =>
  [
    <TemplateResult>article(<ArticlePayload>{
      errorMessage: `${err['message']}`,
      date_gmt: <string>'',
      link: <string>'',
      title: <object>{
        rendered: <string>'Error'
      },
      content: <object>{
        rendered: <string>'<p>Posts are unavailable. Please check the error and try again.</p>'
      }
    })
  ]

export const loading: TemplateResult[] = [
  <TemplateResult>article(<ArticlePayload>{
    errorMessage: <string>'',
    date_gmt: <string>'',
    link: <string>'',
    title: <object>{
      rendered: <string>'Loading...'
    },
    content: <object>{
      rendered: <string>''
    }
  })
]

export default (
  articles: ArticlePayload[] = [
    <ArticlePayload>{
      content: <object>{
        rendered: <string>''
      },
      date_gmt: <string>'',
      errorMessage: <string>'',
      link: <string>'',
      title: <object>{
        rendered: <string>''
      }
    }
  ]
): TemplateResult[] =>
  articles.map(
    (res: ArticlePayload): TemplateResult => article(<ArticlePayload>res)
  )
