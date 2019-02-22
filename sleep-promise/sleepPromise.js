function sleep(ms) {
  const p = new Promise((res) => {
    setTimeout(res, ms);
  });
  const innerFn = value => p.then(() => value);

  innerFn.then = (...args) => p.then(...args);
  innerFn.catch = Promise.resolve().catch;

  return innerFn;
}

export {
  sleep,
};
