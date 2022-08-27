import { makechain } from './makechain.js';

/**
 * The union function will accept an array parameter, returns a new array of combined values
 * @since 0.1.0
 * @category Array
 * @param {Array} array takes array parameter
 * @param {Array} [values] values to be combined
 * @returns {Array} Returns a new array with filtering falsy values
 * @example
 *
 * union([1,2],[2,3,4])
 * // => [1,2,3,4]
 */

function union(firstArgument, secondArgument) {
  if (Array.isArray(firstArgument) && Array.isArray(secondArgument)) {
    let completeArray = [...firstArgument, ...secondArgument];
    let uniqueArray = [...new Set(completeArray)];
    return uniqueArray;
  } else if (!Array.isArray(secondArgument) && Array.isArray(firstArgument)) {
    return firstArgument;
  } else {
    return [];
  }
}

makechain.prototype.union = function () {
  this.value = union(this.value);
  return this;
};

export default union;
