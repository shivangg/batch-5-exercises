import { __values } from "tslib";

function bouncer(testArray) {
  var newArray = [];
  for (let index = 0; index < testArray.length; index++) {
    var value = testArray[index];
    if (value) {
      newArray.push(value)
    }
  }
  return newArray;
}

export {
  bouncer,
};
