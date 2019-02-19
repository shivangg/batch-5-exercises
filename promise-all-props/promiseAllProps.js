
function promiseAllProps(promiseObj) {
  return Promise.all(...Object.keys(promiseObj));
}

export {
  promiseAllProps,
};
