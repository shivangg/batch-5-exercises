
function bind(fn, thisContext, ...args) {
  return fn.bind(thisContext, ...args);
}

export {
  bind,
};
