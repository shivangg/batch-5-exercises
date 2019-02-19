const obj = (m, n) => ({ m, n });

function ackermann({ m, n }) {
  if (m === 0) {
    return n + 1;
  }

  if (m > 0) {
    if (n === 0) {
      return ackermann(obj(m - 1, 1));
    }
    const result = obj(m - 1, ackermann(obj(m, n - 1)));
    return ackermann(result);
  }
  return true;
}

export {
  ackermann,
};
