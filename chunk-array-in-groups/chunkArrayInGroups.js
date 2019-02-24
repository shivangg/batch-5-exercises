function chunkArrayInGroups(aChunk, maxChunkSize) {
  const chunkLists = aChunk.reduce((acc, currentValue, currentIndex) => {
    const chunkIndex = parseInt(currentIndex / maxChunkSize, 10);
    const isNewChunk = currentIndex % maxChunkSize === 0;
    const newAcc = acc;
    if (isNewChunk) {
      newAcc[chunkIndex] = [];
    }
    newAcc[chunkIndex][currentIndex % maxChunkSize] = currentValue;
    return newAcc;
  }, []);

  return chunkLists;
}

export {
  chunkArrayInGroups,
};
