
function dropElements(values, truthCheck) {
  var satisfyingNumbers = values.filter(truthCheck);
  return satisfyingNumbers;
}

export {
  dropElements,
};
