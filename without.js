/**
 * The without function will accept an array parameter, returns a new array of combined values
 * @since 0.1.0
 * @category Array
 * @param {Array} takes array parameter
 * @param {Number} [values] values to be exclude
 * @returns {Array} Returns a new array with filtered values
 * @example
 *
 * without([1,2],[2,3,4])
 * // => [1]
 */

import { makechain } from "./makechain.js";

function without(array, ...exclude) {
  if (Array.isArray(array)) {
    let argv = [...exclude];
    let resultArray = [];
    for (const arrayValue of array) {
      argv.includes(arrayValue) ? 0 : resultArray.push(arrayValue);
    }
    return resultArray;
  } else {
    console.error("Array needs to be pass");
  }
}

makechain.prototype.without = function (...exclude) {
  this.value = _.without(this.value, ...exclude);
  return this;
};

export default without;
