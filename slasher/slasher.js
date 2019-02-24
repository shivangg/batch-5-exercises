function slasher(unSlashedValues, numberOfChops) {
  const chopTillIndex = numberOfChops - 1;
  const slashedValues = unSlashedValues
    .filter((el, index) => index > chopTillIndex);
  return slashedValues;
}

export {
  slasher,
};
