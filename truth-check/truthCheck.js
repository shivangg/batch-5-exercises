
function truthCheck(collection, property) {

  var elementsWithProperty = collection.filter( element => {
    return element[property];
  });

  return elementsWithProperty.length === collection.length;
}

export {
  truthCheck,
};
