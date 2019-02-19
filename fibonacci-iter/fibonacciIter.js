const fibonacciIter = {
  [Symbol.iterator]: function* fibonacciIter() {
    let prev = 0;
    let next = 1;
    let sum;
    while (true) {
      sum = prev + next;
      yield sum;
      prev = next;
      next = sum;
    }
  },
};

export {
  fibonacciIter,
};
