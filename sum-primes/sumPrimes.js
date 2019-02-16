function isPrime(number) {
  const totalDivisors = new Array(number)
    .fill(0)
    .reduce(
      (acc, currentValue, currentIndex) => {
        const isDivisible = (number % (currentIndex + 1) === 0);
        return isDivisible ? acc + 1 : acc;
      }, 0,
    );
  return totalDivisors === 2;
}

function sumPrimes(n) {
  const result = new Array(n + 1).fill().reduce((runningSum, currentValue, currentIndex) => {
    const newSum = isPrime(currentIndex) ? runningSum + currentIndex : runningSum;
    return newSum;
  }, 0);
  return result;
}

export {
  sumPrimes,
};
