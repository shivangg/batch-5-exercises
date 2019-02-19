function sequentialPromise([promise1, promise2, promise3]) {
  const twoPromiseResolvation = promise1()
    .then(res => promise2(res));
  if (promise3 !== undefined) {
    return twoPromiseResolvation.then(res => promise3(res));
  }
  return twoPromiseResolvation;
}

export {
  sequentialPromise,
};
