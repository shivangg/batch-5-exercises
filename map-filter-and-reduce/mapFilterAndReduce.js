function mapFilterAndReduce(objectList) {
  const objectWithLengthLessThan5 = objectList.filter(el => el.firstName.length < 5);

  const nameWithLength = objectWithLengthLessThan5.reduce((acc, currentValue) => {
    const updatedAcc = acc;
    updatedAcc[currentValue.firstName] = currentValue.firstName.length;
    return updatedAcc;
  }, {});

  return nameWithLength;
}

export {
  mapFilterAndReduce,
};
