function rejectPromise() {
  // return new Promise((res, rej) => res(`REJECTED!`));
  return Promise.resolve('REJECTED!');
}

export {
  rejectPromise,
};
