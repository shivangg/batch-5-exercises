
function isIterable(obj) {
  return Boolean(obj[Symbol.iterator]);
}

export {
  isIterable,
};
