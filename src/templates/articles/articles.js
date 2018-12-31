import article from './article'

export default ({ apiUrl, siteUrl }) =>
  new Promise((resolve, reject) =>
    fetch(apiUrl)
      .then(res => {
        if (res.ok) {
          return res.json().then(json => json.map(res => article(res)))
        }

        throw new Error(`status: ${res.status}${res.statusText ? ` | statusText: ${res.statusText}` : ''}`)
      })
      .then(response => resolve(response))
      .catch(err => reject(err))
  ).catch(err =>
    article({
      errorMessage: `${apiUrl ? '' : 'Missing required attribute: apiUrl. '}${err.message}`,
      date_gmt: '',
      link: siteUrl,
      title: {
        rendered: 'Error'
      },
      content: {
        rendered: '<p>Posts are unavailable. Please check the error and try again.</p>'
      }
    })
  )
