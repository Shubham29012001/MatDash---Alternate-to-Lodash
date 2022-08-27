import { makechain } from './makechain.js';

/**
 * The indexof function will accept an array parameter and values for which index needs to be find,
 * returns the index of the value
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array takes array parameter
 * @param {Number} number value for which index needs to be find
 * @param {Number} [fromIndex] the starting index for the search
 * @returns {Number} Returns the index of the value else -1
 * @example
 *
 * indexof([1, 2, 1, 2], 2);
 * // => 1
 */

function indexof(array, values, fromIndex) {
  let indexOfElement = -1;

  fromIndex < 0 ? (fromIndex = array.length + fromIndex) : 0;

  fromIndex != undefined || fromIndex != null ? 0 : (fromIndex = 0);

  let arrayLength = array.length;

  if (Array.isArray(array)) {
    while (fromIndex < arrayLength) {
      if (array[fromIndex] == values) {
        indexOfElement = fromIndex;
        break;
      }
      ++fromIndex;
    }
  } else {
    console.error('Requires Array and Values as An Array Argument');
  }
  return indexOfElement;
}

makechain.prototype.indexof = function (values, fromIndex) {
  this.value = indexof(this.value, values, fromIndex);
  return this;
};

export default indexof;
