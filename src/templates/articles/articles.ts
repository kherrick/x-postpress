import article from './article'

export const getErrorMessageArticle = (err: any) =>
  [article({
    errorMessage: `${err.message}`,
    date_gmt: '',
    link: '',
    title: {
      rendered: 'Error'
    },
    content: {
      rendered: '<p>Posts are unavailable. Please check the error and try again.</p>'
    }
  })]

export const loading = (() =>
  [article({
    errorMessage: '',
    date_gmt: '',
    link: '',
    title: {
      rendered: 'Loading...'
    },
    content: {
      rendered: ''
    }
  })])()

export default (articles = [{ content: '', date_gmt: '', errorMessage: '', link: '', title: '' }]) => articles.map(res => article(res))
