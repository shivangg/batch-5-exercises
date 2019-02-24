function booWho(args) {
  const argType = typeof args;

  if (argType === 'boolean') {
    return true;
  }
  return false;
}

export {
  booWho,
};
