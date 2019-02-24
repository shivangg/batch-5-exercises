function bouncer(testArray) {
  const newArray = [];
  for (let index = 0; index < testArray.length; index += 1) {
    const value = testArray[index];
    if (value) {
      newArray.push(value);
    }
  }
  return newArray;
}

export {
  bouncer,
};
