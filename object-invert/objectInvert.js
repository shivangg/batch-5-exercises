
function objectInvert(objToBeInverted) {
  var invertedObject = Object.keys(objToBeInverted).reduce( (accumulatedInvertedObj, origProperty) => {
    accumulatedInvertedObj[objToBeInverted[origProperty]] = origProperty;
    return accumulatedInvertedObj;
  }, {} )

  return invertedObject;
}

export {
  objectInvert,
};
