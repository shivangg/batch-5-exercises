function lcs(list1Index, list2Index, list1, list2, commonSubtring) {
  if (list1Index === 0 || list2Index === 0) {
    return commonSubtring;
  } else if (list1[list1Index] === list2[list2Index]) {
    const substring = lcs(list1)
  }
  const list1ReduceIndex = lcs(list1Index - 1, list2Index, list1, list2, commonSubtring);
  const list2ReduceIndex = lcs(list1Index, list2Index - 1, list1, list2, commonSubtring);
  const substring = Math.max(commonSubtring.length, Math.max(list1ReduceIndex,
    list2ReduceIndex));
  return substring;
}

function longestCommonSubstring(list1, list2) {

  // smallerlist, largerList2

  // iterate on the smaller list

  // if same index element in both list
  // add it to acc
  // else
  // return acc
  let smallerList;
  let largerList;
  if (list1.length < list2.length) {
    smallerList = list1;
    largerList = list2;
  } else {
    smallerList = list2;
    largerList = list1;
  }

  return lcs(smallerList.length, largerList.length, smallerList, largerList, '');
}

export {
  longestCommonSubstring,
};