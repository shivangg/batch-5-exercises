function joinArrays(...args) {
  const arrayOfArguments = args
    .reduce((acc, currentValue) => [...acc, ...currentValue], []);
  return arrayOfArguments;
}

export {
  joinArrays,
};
