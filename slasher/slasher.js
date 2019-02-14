
function slasher(unSlashedValues, numberOfChops) {
  var chopTillIndex = numberOfChops - 1;
  var slashedValues = unSlashedValues.filter( ( el, index ) => {
    return index > chopTillIndex;
  } )
  return slashedValues;
}

export {
  slasher,
};
