function objectInvert(objToBeInverted) {
  const invertedObject = Object.keys(objToBeInverted)
    .reduce((acc, origProperty) => {
      const newAcc = acc;
      newAcc[objToBeInverted[origProperty]] = origProperty;
      return newAcc;
    }, {});

  return invertedObject;
}

export {
  objectInvert,
};
