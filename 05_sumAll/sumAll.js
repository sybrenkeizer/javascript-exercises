const sumAll = function(start, end) {
  let range = [];
  if (start < 0 || end < 0) {
    return `ERROR`;
  } if (typeof start !== `number` || typeof end !== `number`) {
    return `ERROR`;
  } else if (start < end) {
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
  } else if (start > end) {
    for (let i = start; i >= end; i--) {
      range.push(i);
    }
  }
  return range.reduce((previous, current) =>
    previous + current, 0);
};

// Do not edit below this line
module.exports = sumAll;


sumAll(4, '2');

/*

*** CLEANER VERSION ***

const sumAll = function(start, end) {
  let range = [];
  if (start < 0 || end < 0) return `ERROR`;
  if (typeof start !== `number` || typeof end !== `number`) return `ERROR`;
  if (start < end) {
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
  } else if (start > end) {
    for (let i = start; i >= end; i--) {
      range.push(i);
    }
  }
  return range.reduce((previous, current) =>
    previous + current, 0);
};

*/
