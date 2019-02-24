
function isTriangle(side1, side2, side3) {
  const biggestSide = Math.max(side1, side2, side3);
  const sumSmallerTwo = side1 + side2 + side3 - biggestSide;
  return (sumSmallerTwo > biggestSide);
}

export {
  isTriangle,
};
