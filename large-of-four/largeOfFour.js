
function largeOfFour(arrayOfNumberArrays) {
  var largestNumberFromEachArray = [];

  for (let index = 0; index < arrayOfNumberArrays.length; index++) {
    var numberArray = arrayOfNumberArrays[index];
    var largestNumber = numberArray[0];

    for (let innerIndex = 0; innerIndex < numberArray.length; innerIndex++) {
      var number = numberArray[innerIndex];
      if (number > largestNumber) {
        largestNumber = number;
      }
    }
    largestNumberFromEachArray.push(largestNumber);
  }
  return largestNumberFromEachArray;
}

export {
  largeOfFour,
};
