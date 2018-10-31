"use strict";

exports.__esModule = true;
/**
 * @memberof components
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
var today = new Date();
var year = today.getFullYear();
var timeComparator = today.getTime() - 86400000;

var Calendar = {
  today: today,
  year: year,
  yearMin: year - 10,
  yearMax: year + 40,
  yearViewMax: year + 16,
  monthName: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  monthAbbrev: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
  dayName: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  dayAbbrev: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  data: {},
  daysInMonth: function daysInMonth(yearVal, monthVal) {
    return new Date(yearVal, monthVal, 0).getDate();
  },
  isExpired: function isExpired(checkDate) {
    return checkDate.getTime() < timeComparator;
  }
};

var iterYear = parseInt(Calendar.yearMin, 10);

while (iterYear <= Calendar.yearMax) {
  iterYear += 1;
  var y = iterYear;
  var monthData = {};
  for (var m = 0; m < 12; m += 1) {
    var monthDate = new Date(y, m, 1);
    var firstDayOfWeek = monthDate.getDay();
    var weekData = {};
    if (firstDayOfWeek > 0) {
      monthDate.setDate(monthDate.getDate() - firstDayOfWeek);
    }
    for (var w = 0; w < 5; w += 1) {
      var weekArray = [];
      for (var day = 0; day < 7; day += 1) {
        var isEnabled = monthDate.getTime() >= timeComparator;
        weekArray.push({
          day: monthDate.getDate(),
          month: monthDate.getMonth(),
          year: monthDate.getFullYear(),
          enabled: isEnabled
        });
        monthDate.setDate(monthDate.getDate() + 1);
      }
      weekData[w] = weekArray;
    }
    monthData[m] = weekData;
  }
  Calendar.data[y] = monthData;
}

exports.default = Calendar;
module.exports = exports["default"];