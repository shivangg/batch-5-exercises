function sanitizeString(string) {
  const onlyAlphaNumericString = Array.from(string)
    .filter((el) => {
      const alphaNumericRegex = /[a-zA-Z0-9]/;
      return alphaNumericRegex.test(el);
    })
    .map((onlyAlphanumericChar) => {
      if (/[A-Z]/.test(onlyAlphanumericChar)) {
        return onlyAlphanumericChar.toLowerCase();
      }
      return onlyAlphanumericChar;
    })
    .join('');
  return onlyAlphaNumericString;
}

function reverse(string) {
  return string.split('').reverse().join('');
}

function isPalindrome(string) {
  const sanitizedString = sanitizeString(string.toString());
  const isEqualToreverse = reverse(sanitizedString) === sanitizedString;
  return isEqualToreverse;
}

export {
  isPalindrome,
};
