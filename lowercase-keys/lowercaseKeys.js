
function lowercaseKeys(testObject) {
  const lowerKeysObject = Object.getOwnPropertyNames(testObject).reduce((acc, currentProperty) => {
    acc[currentProperty.toLowerCase()] = testObject[currentProperty];
    return acc;
  }, {});
  return lowerKeysObject;
}

export {
  lowercaseKeys,
};
