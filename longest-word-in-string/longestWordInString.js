
function longestWordInString(string) {

  var wordsArray = string.split(' ');
  var longestWordLength = 0;

  for (let index = 0; index < wordsArray.length; index++) {
    var currentWordLength = wordsArray[index].length;
    if (currentWordLength > longestWordLength ) {
      longestWordLength = currentWordLength;
    }

  }


  return longestWordLength;
}

export {
  longestWordInString,
};
