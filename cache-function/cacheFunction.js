
function cacheFunction(functionToBeCached) {
  var cachedResults = {};

  var theCacher = function (innerParams) {
    if (cachedResults.hasOwnProperty(innerParams)) {
      return cachedResults[innerParams];
    } else {
      cachedResults[innerParams] = functionToBeCached(innerParams);
      // console.log('====================================');
      // console.log("New cache value", cachedResults);
      // console.log('====================================');
      return cachedResults[innerParams];
    }
  }

  return theCacher;
}

export {
  cacheFunction,
};
