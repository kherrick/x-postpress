export const formatDate = (timestring: string): string => {
  const pad = (v: number): string => (v < 10 ? `0${v}` : `${v}`);
  const dateString: string = timestring?.split('T')[0];

  const date: Date = new Date(dateString);
  const year: string = date.getUTCFullYear().toString();
  const day: string = pad(date.getUTCDate());
  const weekday: string = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ][date.getUTCDay()];

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
    'December',
  ][date.getUTCMonth()];

  return `${weekday}, ${day} ${month} ${year}`;
};
