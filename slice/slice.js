function slice(fromIndex, toIndex, values) {
  if (typeof values === 'string') {
    return values.split('').slice(fromIndex, toIndex).join('');
  }
  return values.slice(fromIndex, toIndex);
}

export {
  slice,
};
