
function truthCheck(collection, property) {

  var elementsWithProperty = collection.filter( element => {
    return element[property];
  });

  var haveSameProperty = elementsWithProperty.length === collection.length;

  return haveSameProperty;
}

export {
  truthCheck,
};
