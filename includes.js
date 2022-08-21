/**
 * The includes function will accept a collection parameter and values to search for,
 * returns true if value is found else false
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array | Object | String} takes collection to inspect
 * @param {Number} values to be search for
 * @param {Number} optional the starting index for the search
 * @returns {Boolean} Returns true if value is found else false
 *
 * includes([1,2,0], [1,5,6])
 * // => [2,0]
 */

import { makechain } from "./makechain.js";

function includes(collection, values, fromIndex) {
  fromIndex != undefined || fromIndex != null ? 0 : (fromIndex = 0);

  if (Array.isArray(collection) && typeof collection == "object") {
    fromIndex < 0 ? (fromIndex = collection.length + fromIndex) : 0;

    for (let element of collection) {
      if (typeof element == "object" && !Array.isArray(element)) {
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
  } else if (!Array.isArray(collection) && typeof collection == "object") {
    let object = Object.keys(collection);
    let objectLength = object.length;

    fromIndex < 0 ? (fromIndex = objectLength + fromIndex) : 0;

    console.log(object, objectLength, fromIndex);

    while (fromIndex < objectLength) {
      if (collection[object[fromIndex]] == values) {
        return true;
      }

      fromIndex++;
    }
  } else if (typeof collection == "string") {
    fromIndex < 0 ? (fromIndex = collection.length + fromIndex) : 0;

    if (collection.indexOf(values, fromIndex) != -1) {
      return true;
    }
  }
  return false;
}

makechain.prototype.includes = function (values, fromIndex) {
  this.value = _.includes(this.value, values, fromIndex);
  return this;
};

export default includes;
