function sumAll(numberPointsArray) {
  let startNumber;
  let endNumber;
  if (numberPointsArray[0] < numberPointsArray[1]) {
    [startNumber, endNumber] = numberPointsArray;
  } else {
    [endNumber, startNumber] = numberPointsArray;
  }

  function sumFromUnity(positiveNumber) {
    return (positiveNumber * (positiveNumber + 1)) / 2;
  }

  return sumFromUnity(endNumber) - sumFromUnity(startNumber) + startNumber;
}

export {
  sumAll,
};
