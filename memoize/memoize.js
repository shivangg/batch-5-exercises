
function memoize(fn) {
  var cachedResults = {};
  function applyMemoization(...args) {
    if (args in Object.keys(cachedResults)) {
      return cachedResults[args];
    }
    cachedResults[args] = fn(args);
    console.log('====================================');
    console.log(cachedResults);
    console.log('====================================');
    return cachedResults[args];
  }

  return applyMemoization;
}

export {
  memoize,
};
