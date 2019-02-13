
function sumAll(numberPointsArray) {
  var startNumber;
  var endNumber;
  if (numberPointsArray[0] < numberPointsArray[1]) {
    startNumber = numberPointsArray[0];
    endNumber = numberPointsArray[1];
  } else {
    startNumber = numberPointsArray[1];
    endNumber = numberPointsArray[0];
  }

  var sumFromUnity = function (positiveNumber) {
    return (positiveNumber * (positiveNumber + 1))/ 2;
  }

  return sumFromUnity(endNumber) - sumFromUnity(startNumber) + startNumber;
}

export {
  sumAll,
};
