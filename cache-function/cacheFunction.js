function cacheFunction(functionToBeCached) {
  const cachedResults = {};
  function theCacher(innerParams) {
    if (Object.hasOwnProperty.call(cachedResults, innerParams)) {
      return cachedResults[innerParams];
    }
    cachedResults[innerParams] = functionToBeCached(innerParams);
    return cachedResults[innerParams];
  }
  return theCacher;
}

export {
  cacheFunction,
};
