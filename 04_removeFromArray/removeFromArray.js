const removeFromArray = function(array, ...arg) {
  return array.filter(item => !arg.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray ;


// removeFromArray([1, 2, 3, 4, 5, 6, 7, 8], 3, 8);
1
