
function reverseString(string) {
  var reverseString = "";
  for (let index = 0; index < string.length; index++) {
    var currentLetter = string[index];
    reverseString = currentLetter + reverseString;
  }
  return reverseString;
}

export {
  reverseString,
};
