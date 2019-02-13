
function booWho(args) {
  var argType = typeof args;

  if (argType === 'boolean') {
    return true;
  }
  return false;
}

export {
  booWho,
};
