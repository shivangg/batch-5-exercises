function truthCheck(collection, property) {
  const elementsWithProperty = collection
    .filter(element => element[property]);
  const haveSameProperty = elementsWithProperty.length === collection.length;
  return haveSameProperty;
}

export {
  truthCheck,
};
