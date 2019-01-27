export const buildQueryString = (props, supportedKeys) => {
  let result = ''
  Object.keys(props).forEach(key => {
    if (supportedKeys.indexOf(key) === -1) {
      return
    }
    if (!result && props[key]) {
      result = `?${key}=${props[key]}`
      return
    }
    if (result && props[key]) {
      result = `${result}&${key}=${props[key]}`
      return
    }
  })
  return result
}
export const formatDate = timestring => {
  const pad = v => (v < 10 ? `0${v}` : `${v}`)
  const dateString = timestring.split('T')[0]
  const date = new Date(dateString)
  const year = date.getUTCFullYear().toString()
  const day = pad(date.getUTCDate())
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getUTCDay()]
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ][date.getUTCMonth()]
  return `${weekday}, ${day} ${month} ${year}`
}
export const removeSubdomain = (link, subDomain) => (link ? link.replace(`//${subDomain}.`, '//') : '')
export const getPosts = apiUrl =>
  new Promise((resolve, reject) =>
    fetch(apiUrl)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(`status: ${res['status']}
          ${res['statusText'] ? ` | statusText: ${res['statusText']}` : ''}
        `)
      })
      .then(response => resolve(response))
      .catch(err => reject(err))
  )
export const getPostsUrl = (props, supportedKeys) =>
  `${props['apiHost']}${props['apiPath']}${'/posts'}${buildQueryString(props, supportedKeys)}`
