const isEmpty = list => list.length === 0;

const someEmpty = (...lists) => lists.reduce((acc, list) => acc || isEmpty(list), false);

function xprod(list1, list2) {
  if (someEmpty(list1, list2)) {
    return [];
  }

  const combinations = list1.reduce((acc, currentValue) => {
    const newElement = list2
      .reduce((innerAcc, currentBiggerValue) => [...innerAcc, [currentValue, currentBiggerValue]],
        []);
    const newAcc = [
      ...acc,
      ...newElement,
    ];
    return newAcc;
  }, []);
  return combinations;
}

export {
  xprod,
};
