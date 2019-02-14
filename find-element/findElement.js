
function findElement(numbers, truthtest) {
  var satisfyingNumbers = numbers.filter( number => {
    return truthtest(number);
  } )
  return satisfyingNumbers[0];
}

export {
  findElement,
};
