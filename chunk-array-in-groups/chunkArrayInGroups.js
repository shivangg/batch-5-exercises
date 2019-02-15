
function chunkArrayInGroups( aChunk, maxChunkSize) {
  var chunkLists = aChunk.reduce( (accumulatedChunks, currentValue, currentIndex) => {
    var chunkIndex = parseInt(currentIndex / maxChunkSize, 10);
    var isNewChunk = currentIndex % maxChunkSize === 0;
    if ( isNewChunk ) {
      accumulatedChunks[chunkIndex] = [];
    }
    accumulatedChunks[chunkIndex][currentIndex % maxChunkSize] = currentValue;
    return accumulatedChunks;
  }, [] );

  return chunkLists;
}

export {
  chunkArrayInGroups,
};
