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
  if (Array.isArray(array)) {
    let resultArray = [];

    for (const falseValues of array) {
      falseValues ? resultArray.push(falseValues) : 0;
    }

    return resultArray;
  } else {
    console.error("Requires Array as an Argument");
  }
}

makechain.prototype.compact = function () {
  this.value = _.compact(this.value);
  return this;
};

export default compact;
