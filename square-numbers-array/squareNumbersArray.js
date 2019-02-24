
function squareNumbersArray(...args) {
  const allPresentNumber = args.reduce((acc, currentArgument) => {
    const isCurrentArgumentNumber = typeof currentArgument === 'number';
    return acc && isCurrentArgumentNumber;
  }, true);

  if (!allPresentNumber) {
    throw new Error('My custom error');
  }
  return true;
}

export {
  squareNumbersArray,
};
