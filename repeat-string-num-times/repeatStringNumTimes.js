function repeatStringNumTimes(string, freq) {
  let repeatedString = '';

  if (freq < 0) {
    return '';
  }

  for (let index = 0; index < freq; index += 1) {
    repeatedString += string;
  }

  return repeatedString;
}

export {
  repeatStringNumTimes,
};
