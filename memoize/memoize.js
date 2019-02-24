
function memoize(fn) {
  const cachedResults = {};
  function applyMemoization(...args) {
    if (args in Object.keys(cachedResults)) {
      return cachedResults[args];
    }
    cachedResults[args] = fn(args);
    return cachedResults[args];
  }

  return applyMemoization;
}

export {
  memoize,
};
