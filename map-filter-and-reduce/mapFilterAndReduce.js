function mapFilterAndReduce(objects) {
  const objectWithLengthLessThanFive = objects.filter(el => el.firstName.length < 5);

  const nameWithLength = objectWithLengthLessThanFive.reduce((acc, currentValue) => {
    const updatedAcc = acc;
    updatedAcc[currentValue.firstName] = currentValue.firstName.length;
    return updatedAcc;
  }, {});

  return nameWithLength;
}

export {
  mapFilterAndReduce,
};
