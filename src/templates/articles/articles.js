import article from './article'

export const getErrorMessageArticle = err =>
  article({
    errorMessage: `${err.message}`,
    date_gmt: '',
    link: '',
    title: {
      rendered: 'Error'
    },
    content: {
      rendered: '<p>Posts are unavailable. Please check the error and try again.</p>'
    }
  })

export const loading = (() =>
  article({
    link: '',
    title: {
      rendered: 'Loading...'
    },
    content: {
      rendered: ''
    }
  }))()

export default (articles = []) => articles.map(res => article(res))
