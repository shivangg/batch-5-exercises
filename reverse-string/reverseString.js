function reverseString(string) {
  let reversedString = '';
  for (let index = 0; index < string.length; index += 1) {
    const currentLetter = string[index];
    reversedString = currentLetter + reverseString;
  }
  return reversedString;
}

export {
  reverseString,
};
