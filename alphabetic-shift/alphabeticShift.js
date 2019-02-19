function alphabeticShift(string) {
  return string.split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');
}

export {
  alphabeticShift,
};
