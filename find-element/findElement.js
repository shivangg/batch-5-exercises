
function findElement(numbers, truthtest) {
  var satisfyingNumbers = numbers.filter( truthtest )
  var firstSatisfyingNumber = satisfyingNumbers[0];
  return firstSatisfyingNumber;
}

export {
  findElement,
};
