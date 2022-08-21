/**
 * The some function will accept a collection parameter and predicate,
 * returns truthy if functionInvoked returns true for any element else returns false
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array | Object} takes collection to inspect
 * @param {Predicate} function invoked for per iteration
 * @returns {Booelean} Returns true if any element passes the predicate check else false
 *
 * some([
  { user: "barney", active: true },
  { user: "fred", active: false },
], Boolean)
 * // => true
 */

import { makechain } from "./makechain.js";

function arraySome(collection, functionInvoked) {
  const arrayLength = collection == null ? 0 : collection.length;

  for (let index = 0; index < arrayLength; index++) {
    if (functionInvoked(collection[index], index, collection)) {
      return true;
      break;
    }
  }

  return false;
}

function objectSome(collection, functionInvoked) {
  if (typeof functionInvoked == "function") {
    for (let objectKeys of Object.keys(collection)) {
      if (functionInvoked(collection[objectKeys], objectKeys, collection)) {
        return true;
        break;
      }
    }
  } else if (typeof functionInvoked == "string") {
    for (let stringKey of collection) {
      if (stringKey[functionInvoked]) {
        return true;
      }
    }
  } else if (
    typeof functionInvoked == "object" &&
    !Array.isArray(functionInvoked)
  ) {
    for (let arrayCollection of collection) {
      for (let objectKeys of Object.keys(collection)) {
        if (arrayCollection[objectKeys] == collection[objectKeys]) {
          return true;
          break;
        }
      }
    }
  } else if (
    typeof functionInvoked == "object" &&
    Array.isArray(functionInvoked)
  ) {
    const objectLength = functionInvoked.length;
    if (objectLength > 1) {
      let newObject = {};
      let nextIndex = null;
      for (let index = 0; index < objectLength - 1; index++) {
        nextIndex = index + 1;
        newObject[functionInvoked[index]] = functionInvoked[nextIndex];
      }

      for (let arrayCollection of collection) {
        for (let objectKeys of Object.keys(newObject)) {
          if (arrayCollection[objectKeys] == newObject[objectKeys]) {
            return true;
            break;
          }
        }
      }
    }
  }

  return false;
}

function some(collection, functionInvoked) {
  if (Array.isArray(collection)) {
    if (typeof collection[0] != "object") {
      return arraySome(collection, functionInvoked);
    } else {
      return objectSome(collection, functionInvoked);
    }
  }

  collection = [collection];
  return objectSome(collection, functionInvoked);
}

makechain.prototype.some = function (functionInvoked) {
  this.value = _.some(this.value, functionInvoked);
  return this;
};

export default some;
