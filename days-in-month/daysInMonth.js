
function daysInMonth(year, generalMonth) {
  const month = generalMonth - 1;
  const nextMonth = month + 1;
  const LastDayOfCurrentMonth = new Date(year, nextMonth, 0);
  return LastDayOfCurrentMonth.getDate();
}

export {
  daysInMonth,
};
