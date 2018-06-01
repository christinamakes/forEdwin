'use strict';

// QUESTION 1
const dates = ['Oct 7, 2009', 'Feb 21, 2002', 'Nov 1, 2017', 'Dec 1 2009', 'Nov 10, 2009', 'May 15, 2018', 'Jan 10, 2009', 'Oct 22, 2009'];

// to hold formatted dates
const frmDate = [];

const yearNum = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Sort dates into Object using regex
dates.map(date => {
  const month = date.match(/\w{3}/);
  const day = date.match(/\s+\d{1,2}/);
  const year = date.match(/\d{4}/);
  return frmDate.push({ month: yearNum.indexOf(month[0]), day: parseInt(day[0]), year: parseInt(year[0]) });
});

// helper function
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// sort dates by day, month, year
function sortDates(dateArr) {
  for (let i = 0; i < dateArr.length; i++) {
    for (let j = 1; j < dateArr.length; j++) {
      // swap by day
      if (dateArr[j - 1].day > dateArr[j].day) {
        swap(dateArr, j - 1, j);
      }
      // swap by month
      if (dateArr[j - 1].month > dateArr[j].month) {
        swap(dateArr, j - 1, j);
      }
      // swap by year
      if (dateArr[j - 1].year > dateArr[j].year) {
        swap(dateArr, j - 1, j);
      }
    }
  }
  // return to strings
  return dateArr.map(date => {
    return `${yearNum[date.month]} ${date.day}, ${date.year}`;
  });
}

console.log(sortDates(frmDate));
// [ 'Feb 21, 2002',
//   'Jan 10, 2009',
//   'Oct 7, 2009',
//   'Oct 22, 2009',
//   'Nov 10, 2009',
//   'Dec 1, 2009',
//   'Nov 1, 2017',
//   'May 15, 2018' ]


