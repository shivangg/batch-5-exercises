
function largeOfFour(arrayOfNumberArrays) {
  const largestNumberFromEachArray = [];

  for (let index = 0; index < arrayOfNumberArrays.length; index += 1) {
    const numberArray = arrayOfNumberArrays[index];
    let largestNumber = numberArray[0];

    for (let innerIndex = 0; innerIndex < numberArray.length; innerIndex += 1) {
      const number = numberArray[innerIndex];
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
