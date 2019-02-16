function counterFactory() {
  let counterValue = 0;

  function increment() {
    counterValue += 1;
    return counterValue;
  }

  function decrement() {
    counterValue -= 1;
    return counterValue;
  }

  return {
    increment,
    decrement,
  };
}

export {
  counterFactory,
};
