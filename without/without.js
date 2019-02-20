const isMinusZero = number => (1 / number) === -Infinity;
const stringifyValues = list => list.map(el => (isMinusZero(el) ? '-0' : el.toString()));

function without(numberTobeRemoved, numbers) {
  const numbersWithout = stringifyValues(numbers)
    .filter(el => !stringifyValues(numberTobeRemoved).includes(el));
  return numbersWithout.map(el => Number(el));
}

export {
  without,
};
