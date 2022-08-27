import { makechain } from './makechain.js';

/**
 * The difference function will accept an array parameter and values to exclude,
 * returns a new array filtering the values
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array takes array parameter
 * @param {Array} exclude takes values to be excluded
 * @returns {Array} Returns a new array with filtering the values
 * @example
 *
 * difference([1,2,0], [1,5,6])
 * // => [2,0]
 */

function difference(array, exclude) {
  let resultArray = [];

  /**
   * Check if both arguments are array else console the error.
   * For each element in the array, check if exclude contains that element.
   * If contains do nothing else push the element in the resultArray.
   */

  if (Array.isArray(array) && Array.isArray(exclude)) {
    for (const arrayValue of array) {
      exclude.includes(arrayValue) ? 0 : resultArray.push(arrayValue);
    }

    return resultArray;
  } else {
    console.error('Requires Array and Values as An Array Argument');
    return array;
  }
}

makechain.prototype.difference = function (values) {
  this.value = difference(this.value, values);
  return this;
};

export default difference;
