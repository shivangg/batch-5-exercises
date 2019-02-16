function sumFibs(number) {
  const array = new Array(number).fill(0);
  const sumOddFib = array.reduce((runningSum) => {
    const newElement = runningSum.firstElement + runningSum.secondElement;
    const newRunningSum = {};
    newRunningSum.firstElement = runningSum.secondElement;
    newRunningSum.secondElement = newElement;
    newRunningSum.oddSum = runningSum.oddSum;
    const isNewElementOdd = newElement % 2 === 1;
    const isNewElementLessThanTargetNumber = newElement < number;
    if (isNewElementOdd && isNewElementLessThanTargetNumber) {
      newRunningSum.oddSum += newElement;
    }
    return newRunningSum;
  }, {
    oddSum: 1,
    firstElement: 0,
    secondElement: 1,
  });
  return sumOddFib.oddSum;
}

export {
  sumFibs,
};
