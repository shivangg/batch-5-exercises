function findElement(numbers, truthtest) {
  const satisfyingNumbers = numbers.filter(truthtest);
  const firstSatisfyingNumber = satisfyingNumbers[0];
  return firstSatisfyingNumber;
}

export {
  findElement,
};
