
function rectangleDiagonal(side1, side2) {
  var diagonal = Math.pow(Math.pow(side1, 2) + Math.pow(side2, 2), 0.5);
  return diagonal;
}

export {
  rectangleDiagonal,
};
