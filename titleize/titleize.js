function titleize(sentence) {
  if (sentence === '') {
    return '';
  }
  const isFirstElement = index => index === 0;
  const isElementASymbol = (char, symbolList) => symbolList.some(symbol => symbol === char);
  const words = sentence.split(' ');
  const space = ' ';

  return words
    .map(word => word.split('').reduce((acc, char, index) => {
      if (char === ' ') {
        return `${acc}${space}`;
      }
      if (isFirstElement(index)) {
        return `${acc}${char.toUpperCase()}`;
      }
      if (isElementASymbol(acc[acc.length - 1], ['-'])) {
        return `${acc}${char.toUpperCase()}`;
      }
      return `${acc}${char.toLowerCase()}`;
    }, ''))
    .join(' ');
}

export { titleize };
