
function daysInMonth(year, generalMonth) {
  var month = generalMonth - 1;
  var nextMonth = month + 1;
  var LastDayOfCurrentMonth = new Date(year, nextMonth, 0);
  return LastDayOfCurrentMonth.getDate();
}

export {
  daysInMonth,
};
