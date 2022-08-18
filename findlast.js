/**
 * The findlast function will accept a collection parameter and predicate,
 * returns matched element from right to left if condition satifies else undefined
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array | Object | String} takes collection to inspect
 * @param {Predicate} function invoked for per iteration
 * @param {Number} optional the index to search from
 * @returns {*} Returns the matched element in the collection
 *
 * findlast([1,2,0], [1,5,6])
 * // => [2,0]
 */

import { makechain } from "./makechain.js";

function findlast(collection, functionInvoked) {
  let result = undefined;
  let collectionLength = collection.length - 1;

  if (
    typeof collection == "object" &&
    Array.isArray(collection) &&
    typeof functionInvoked == "function"
  ) {
    for (let i = collectionLength; i >= 0; i--) {
      if (functionInvoked(collection[i])) {
        result = collection[i];
        break;
      }
    }
  } else if (
    typeof collection == "object" &&
    !Array.isArray(collection) &&
    typeof functionInvoked == "function"
  ) {
    let objectKeysArray = Object.keys(collection).reverse();

    for (let objectKey of objectKeysArray) {
      if (functionInvoked(collection[objectKey])) {
        result = collection[objectKey];
        break;
      }
    }
  }

  return result;
}

makechain.prototype.findlast = function (functionInvoked) {
  this.value = _.findlast(this.value, functionInvoked);
  return this;
};

export default findlast;
