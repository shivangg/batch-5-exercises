
function counter() {
  let numberOfTimesCalled = 0;

  function keepCount() {
    numberOfTimesCalled += 1;
    return numberOfTimesCalled;
  }

  return keepCount;
}

export {
  counter,
};
