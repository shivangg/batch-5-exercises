
function dropElements(values, truthCheck) {
  const satisfyingNumbers = values.filter(truthCheck);
  return satisfyingNumbers;
}

export {
  dropElements,
};
