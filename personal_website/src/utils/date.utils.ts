export function formatDateToYearMonth(date: Date) {
  var year = date.getFullYear();
  var month = ('0' + (date.getMonth() + 1)).slice(-2); // Adding 1 to month since it's zero-based, and using slice(-2) to get the last two characters

  return year + '-' + month;
}
