function longestWordInString(string) {
  const wordsArray = string.split(' ');
  let longestWordLength = 0;

  for (let index = 0; index < wordsArray.length; index += 1) {
    const currentWordLength = wordsArray[index].length;
    if (currentWordLength > longestWordLength) {
      longestWordLength = currentWordLength;
    }
  }
  return longestWordLength;
}

export {
  longestWordInString,
};
