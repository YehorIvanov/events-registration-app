function formatDate(timestamp) {
  const months = [
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
  ];

  const date = new Date(timestamp * 1000);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = +date.getFullYear().toString().slice(-2) + 1;
  return `${day} ${month} ${year}`;
}

export default formatDate;
