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
  let result: string = <string>''

  Object.keys(<PostProps>props).forEach((key: string) => {
    if (supportedKeys.indexOf(<string>key) === -1) {
      return
    }

    if (!<string>result && <string>props[key]) {
      result = <string>`?${key}=${props[key]}`

      return
    }

    if (<string>result && <string>props[key]) {
      result = <string>`${result}&${key}=${props[key]}`

      return
    }
  })

  return result
}

export const formatDate = (timestring: string): string => {
  const pad = (v: number): string => (<number>v < <number>10 ? <string>`0${v}` : <string>`${v}`)
  const dateString: string = timestring.split(<string>'T')[0]

  const date: Date = <Date>new Date(<string>dateString)
  const year: string = <string>date.getUTCFullYear().toString()
  const day: string = <string>pad(<number>date.getUTCDate())
  const weekday: string = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ][
      <number>date.getUTCDay()
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
    <number>date.getUTCMonth()
  ]

  return `${<string>weekday}, ${<string>day} ${<string>month} ${<string>year}`
}

export const removeSubdomain = (link: string, subDomain: string) => (
  <string>link
    ? <string>link.replace(<string>`//${<string>subDomain}.`, '//')
    : <string>''
)

export const getPosts = (apiUrl: string) =>
  new Promise((resolve: Function, reject: Function): Promise<Function> =>
    fetch(<string>apiUrl)
      .then((res: Response) => {
        if (<boolean>res.ok) {
          return <Promise<Response>>res.json()
        }

        throw new Error(`status: ${res['status']}
          ${res['statusText']
            ? <string>` | statusText: ${res['statusText']}`
            : <string>''
          }
        `)
      })
      .then((response: Response) => resolve(<Response>response))
      .catch((err: Response) => reject(<Response>err))
  )

export const getPostsUrl = (
  props: PostProps,
  supportedKeys: string[]
) => `${<string>props[<string>'apiHost']}${<string>props[<string>'apiPath']}${<string>'/posts'}${
  <string>buildQueryString(
    <PostProps>props,
    <string[]>supportedKeys
  )
}`
