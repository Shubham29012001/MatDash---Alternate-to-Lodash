/**
 * The difference function will accept an array parameter and values to exclude,
 * returns a new array filtering the values
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} takes array parameter
 * @param {Array} values to be excluded
 * @returns {Array} Returns a new array with filtering the values
 *
 * difference([1,2,0], [1,5,6])
 * // => [2,0]
 */

import { makechain } from "./makechain.js";

function difference(array, exclude) {
  let resultArray = [];

  if (Array.isArray(array) && Array.isArray(exclude)) {
    for (const arrayValue of array) {
      exclude.includes(arrayValue) ? 0 : resultArray.push(arrayValue);
    }
    return resultArray;
  } else {
    console.error("Requires Array and Values as An Array Argument");
    return array;
  }
}

makechain.prototype.difference = function (values) {
  this.value = difference(this.value, values);
  return this;
};

export default difference;
