
function isPromise(obj) {
  return Promise.resolve(obj) === obj;
}

export {
  isPromise,
};
