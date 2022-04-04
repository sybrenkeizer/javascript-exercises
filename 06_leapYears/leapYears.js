const leapYears = function(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true
      } else {
        return false
      }
    } return true;
  } return false
};

// Do not edit below this line
module.exports = leapYears;

leapYears(1200)

// 1) diviseable by 4
// 2) divisable by 100
// 3) divisable by 400
