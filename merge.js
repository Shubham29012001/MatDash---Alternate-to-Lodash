/**
 * The merge function will accept objects parameter, returns the result of combined objects
 * @since 0.1.0
 * @category Object
 * @param {Object} takes object parameter
 * @param {Array | String} [values] other object for merging
 * @returns {Object} Returns merged objects
 * @example
 *
 * merge({'a': [{ 'b': 2 }, { 'd': 4 }]}, {'a': [{ 'c': 3 }, { 'e': 5 }]});
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */

import { makechain } from "./makechain.js";

function merge(destinationObject, sourceObject) {
  for (let objectKey in sourceObject) {
    if (sourceObject[objectKey] == null) {
      continue;
    } else {
      destinationObject[objectKey] = replaceValues(
        destinationObject[objectKey],
        sourceObject[objectKey]
      );
    }
  }

  return destinationObject;
}

function replaceValues(values, newValues) {
  if (Array.isArray(values) && Array.isArray(newValues)) {
    return newValues.map((val, i) => {
      return replaceValues(values[i], val);
    });
  } else if (
    typeof values == "object" &&
    !Array.isArray(values) &&
    typeof newValues == "object" &&
    !Array.isArray(newValues)
  ) {
    return merge(values, newValues);
  }

  return newValues;
}

makechain.prototype.merge = function (otherObject) {
  this.value = merge(this.value, otherObject);
  return this;
};

export default merge;
