
function squareNumbersArray(...args) {
  var allPresentNumber = args.reduce((acc, currentArgument) => {
    var isCurrentArgumentNumber = typeof currentArgument === 'number';
    return acc && isCurrentArgumentNumber;
  }, true );

  if (!allPresentNumber) {
    throw 'My custom error';
  }
  return true;
}

export {
  squareNumbersArray,
};
