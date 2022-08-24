/**
 * The compact function will accept an array parameter, returns a new array removing all falsy values
 * @since 0.1.0
 * @category Array
 * @param {Array} takes array parameter
 * @returns {Array} Returns a new array with filtering falsy values
 * @example
 *
 * compact([1,2,0,null,''])
 * // => [1,2]
 */

import { makechain } from "./makechain.js";

function compact(array) {
  let resultArray = [];

  if (Array.isArray(array)) {
    for (const falseValues of array) {
      falseValues ? resultArray.push(falseValues) : 0;
    }
  } else {
    console.error("Requires Array as an Argument");
  }

  return resultArray;
}

makechain.prototype.compact = function () {
  this.value = compact(this.value);
  return this;
};

export default compact;
