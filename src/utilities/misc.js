export const formatDate = timestring => {
  const pad = v => (v < 10 ? `0${v}` : v)
  const dateString = timestring.split('T')[0]
  const date = new Date(dateString)

  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getUTCDay()]
  const day = pad(date.getUTCDate())
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
  const year = date.getUTCFullYear()

  return `${weekday}, ${day} ${month} ${year}`
}
