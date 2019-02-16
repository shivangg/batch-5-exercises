
function limitFunctionCallCount(cb, callLimit) {
  let numberOfCalls = 0;
  function limitedCaller(...args) {
    numberOfCalls += 1;
    const callInLimit = numberOfCalls <= callLimit;
    return (callInLimit) ? cb(...args) : null;
  }

  return limitedCaller;
}

export {
  limitFunctionCallCount,
};
