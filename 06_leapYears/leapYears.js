// const leapYears = function(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return true
//       } else {
//         return false
//       }
//     } return true;
//   } return false
// };
//
// // Do not edit below this line
// module.exports = leapYears;
//
// leapYears(1200)




// *** BETTER VERSION ***

const leapYears = function(year) {
  return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0 );
};


leapYears(2000)

/*

Returns year if:
year is diviseable by 4
year is divisable by 400
Does not return if year is diviseable by 100

*/
