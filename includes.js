import { makechain } from './makechain.js';

/**
 * The includes function will accept a collection parameter and values to search for,
 * returns true if value is found else false
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array | Object | String} collection takes collection to inspect
 * @param {Number} number values to be search for
 * @param {Number} [fromIndex] the starting index for the search
 * @returns {Boolean} Returns true if value is found else false
 * @example
 *
 * includes('abcd', 'bc');
 * // => true
 */

function includes(collection, values, fromIndex) {
  // If fromIndex is not set then set it to 0

  fromIndex != undefined || fromIndex != null ? 0 : (fromIndex = 0);

  /**
   * Checks if the collection is an Array or Object. Sets the fromIndex to proper value if its negative
   * Checks if the each element in the collection is equal to values, returns true else false
   */

  if (Array.isArray(collection) && typeof collection == 'object') {
    fromIndex < 0 ? (fromIndex = collection.length + fromIndex) : 0;

    if (fromIndex >= collection.length) {
      return false;
    } else {
      for (let element of collection) {
        if (typeof element == 'object' && !Array.isArray(element)) {
          let objectKeys = Object.keys(element);
          for (let iteration of objectKeys) {
            if (element[iteration] == values) {
              return true;
            }
          }
        } else {
          if (element == values) {
            return true;
          }
        }
      }
    }
  } else if (!Array.isArray(collection) && typeof collection == 'object') {
    let object = Object.keys(collection);
    let objectLength = object.length;

    fromIndex < 0 ? (fromIndex = objectLength + fromIndex) : 0;

    while (fromIndex < objectLength) {
      if (collection[object[fromIndex]] == values) {
        return true;
      }

      fromIndex++;
    }
  } else if (typeof collection == 'string') {
    fromIndex < 0 ? (fromIndex = collection.length + fromIndex) : 0;

    if (collection.indexOf(values, fromIndex) != -1) {
      return true;
    }
  }
  return false;
}

makechain.prototype.includes = function (values, fromIndex) {
  this.value = includes(this.value, values, fromIndex);
  return this;
};

export default includes;
