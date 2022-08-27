import { makechain } from './makechain.js';

/**
 * The findlast function will accept a collection parameter and predicate,
 * returns matched element from right to left if condition satifies else undefined
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array | Object | String} collection takes collection to inspect
 * @param {Predicate} function invoked for per iteration
 * @param {Number} [fromIndex] the index to search from
 * @returns {*} Returns the matched element in the collection
 * @example
 *
 * _.findlast([1, 2, 3, 4], function(n) {
 *    return n % 2 == 1;
 * });
 * // => 3
 */

function findlast(collection, functionInvoked) {
  let result = undefined;
  let collectionLength = collection.length - 1;

  /**
   * Check if the collection argument is an Array and functionInvoked is a function.
   * Iterate from right to left and call the functionInvoked on the element.
   * If true, store the element in the result and stop the loop
   */

  if (
    typeof collection == 'object' &&
    Array.isArray(collection) &&
    typeof functionInvoked == 'function'
  ) {
    for (let i = collectionLength; i >= 0; i--) {
      if (functionInvoked(collection[i])) {
        result = collection[i];
        break;
      }
    }
  } else if (
    typeof collection == 'object' &&
    !Array.isArray(collection) &&
    typeof functionInvoked == 'function'
  ) {
    /**
     * Check if the collection argument is an Object and functionInvoked is a function.
     * Get all the keys in the object in reverse order and loop over it.
     * Check if functionInvoked is true. If true, store the element in the result and stop the loop.
     *
     */

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
  this.value = findlast(this.value, functionInvoked);
  return this;
};

export default findlast;
