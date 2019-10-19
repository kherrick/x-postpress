export interface PostProps {
  [key: string]: string

  apiHost: string
  apiPath: string
  categories: string
  include: string
  page: string
  per_page: string
  search: string
  slug: string
  tags: string
}

export const buildQueryString = (props: PostProps, supportedKeys: string[]) => {
  let result: string = ''

  Object.keys(props).forEach((key: string) => {
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

export const formatDate = (timestring: string): string => {
  const pad = (v: number): string => v < 10 ? `0${v}` : `${v}`
  const dateString: string = timestring.split('T')[0]

  const date: Date = new Date(dateString)
  const year: string = date.getUTCFullYear().toString()
  const day: string = pad(date.getUTCDate())
  const weekday: string = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ][
      date.getUTCDay()
    ]

  const month: string = [
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
  ][
    date.getUTCMonth()
  ]

  return `${weekday}, ${day} ${month} ${year}`
}

export const removeSubdomain = (link: string, subDomain: string) => (
  link
    ? link.replace(`//${subDomain}.`, '//')
    : ''
)

export const getPosts = (apiUrl: string) =>
  new Promise((resolve: Function, reject: Function): Promise<Function> =>
    fetch(apiUrl)
      .then((res: Response) => {
        if (res.ok) {
          return res.json()
        }

        throw new Error(`status: ${res['status']}
          ${res['statusText']
            ? ` | statusText: ${res['statusText']}`
            : ''
          }
        `)
      })
      .then((response: Response) => resolve(response))
      .catch((err: Response) => reject(err))
  )

export const getPostsUrl = (
  props: PostProps,
  supportedKeys: string[]
) => `${props['apiHost']}${props['apiPath']}${'/posts'}${buildQueryString(props, supportedKeys)}`
