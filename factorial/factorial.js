
function factorial(number) {
  if (number <= 1) {
    return 1;
  }

  const factorialOfnumber = number * factorial(number - 1);

  return factorialOfnumber;
}

export {
  factorial,
};
