
function dropElements(values, truthCheck) {
  var satisfyingNumbers = values.filter( (value) => {
    return truthCheck(value);
  } )
  return satisfyingNumbers;
}

export {
  dropElements,
};
