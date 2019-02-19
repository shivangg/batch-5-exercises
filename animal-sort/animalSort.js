function animalSort(animals) {
  return animals.sort((a, b) => {
    const legDiff = a.numberOfLegs - b.numberOfLegs;
    if (legDiff === 0) {
      const stringDiff = a.name.charCodeAt() - b.name.charCodeAt();
      return stringDiff;
    }
    return legDiff;
  });
}

export {
  animalSort,
};
