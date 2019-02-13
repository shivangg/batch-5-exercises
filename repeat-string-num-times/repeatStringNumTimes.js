
function repeatStringNumTimes(string, freq) {
  var repeatedString = "";

  if (freq < 0) {
    return ""
  }

  for (let index = 0; index < freq; index++) {
    repeatedString += string;
  }

  return repeatedString;
}

export {
  repeatStringNumTimes,
};
