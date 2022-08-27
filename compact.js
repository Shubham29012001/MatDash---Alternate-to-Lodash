import { makechain } from './makechain.js';

/**
 * The compact function will accept an array parameter, returns a new array removing all falsy values
 * @since 0.1.0
 * @category Array
 * @param {Array} array takes array parameter
 * @returns {Array} Returns a new array with filtering falsy values
 * @example
 *
 * compact([1,2,0,null,''])
 * // => [1,2]
 */

function compact(array) {
  let resultArray = [];

  /**
   * Check if argument passed is an array else console the error.
   * For each value in the array argument, check if its truthy value.
   * If truthy, push the value in the new ResultArray else do nothing
   */

  if (Array.isArray(array)) {
    for (const falseValues of array) {
      falseValues ? resultArray.push(falseValues) : 0;
    }
  } else {
    console.error('Requires Array as an Argument');
  }

  return resultArray;
}

makechain.prototype.compact = function () {
  this.value = compact(this.value);
  return this;
};

export default compact;
