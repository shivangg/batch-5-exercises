
function isTriangle(side1, side2, side3) {
  var biggestSide = Math.max(side1, side2, side3);
  var sumSmallerTwo = side1 + side2 + side3 - biggestSide;

  return (sumSmallerTwo > biggestSide);
}

export {
  isTriangle,
};
