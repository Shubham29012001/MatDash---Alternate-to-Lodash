import { makechain } from './makechain.js';
import _ from './matlib.js';

let truthyValues = [];
let falsyValues = [];

let result = [];

/**
 * The partition function will accept a collection parameter and predicate,
 * returns the array of group elements for truthy and falsy values
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array | Object} takes collection to inspect
 * @param {Predicate} function invoked for per iteration
 * @returns {Array} Returns the array of group elements for truthy and falsy values
 *
 * partition([{ user: "barney", active: true }, { user: "fred", active: false }], function(o) { return o.active; })
 * // => objects for [['fred'], ['barney', 'pebbles']]
 */

function arrayPartition(collection, functionInvoked) {
  const arrayLength = collection == null ? 0 : collection.length;

  if (typeof functionInvoked == 'function') {
    for (let index = 0; index < arrayLength; index++) {
      functionInvoked(collection[index])
        ? truthyValues.push(collection[index])
        : falsyValues.push(collection[index]);
    }
  }

  result.push(truthyValues, falsyValues);

  return result;
}

function objectPartition(collection, functionInvoked) {
  if (typeof functionInvoked == 'function') {
    let objectKeys = Object.keys(collection);
    for (let objectKey of objectKeys) {
      functionInvoked(collection[objectKey])
        ? truthyValues.push(collection[objectKey])
        : falsyValues.push(collection[objectKey]);
    }
  } else if (typeof functionInvoked == 'string') {
    truthyValues = collection.filter(function (string) {
      if (string[functionInvoked]) {
        return collection;
      }
    });
    falsyValues = collection.filter(function (string) {
      if (!string[functionInvoked]) {
        return collection;
      }
    });
  } else if (
    typeof functionInvoked == 'object' &&
    !Array.isArray(functionInvoked)
  ) {
    let objectKeys = Object.keys(functionInvoked);
    let index;
    let flag = false;
    for (let collectionElement of collection) {
      for (let objectKey of objectKeys) {
        if (functionInvoked[objectKey] == collectionElement[objectKey]) {
          flag = true;
        } else {
          flag = false;
          break;
        }
      }

      flag
        ? truthyValues.push(collectionElement)
        : falsyValues.push(collectionElement);
    }
  } else if (
    typeof functionInvoked == 'object' &&
    Array.isArray(functionInvoked)
  ) {
    const objectValueLength = functionInvoked.length;
    if (objectValueLength > 1) {
      let newObject = {};
      let nextIndex = null;
      for (let index = 0; index < objectValueLength - 1; index++) {
        nextIndex = index + 1;
        newObject[functionInvoked[index]] = functionInvoked[nextIndex];
      }

      return partition(collection, newObject);
    }
  }
  result.push(truthyValues, falsyValues);
  return result;
}

function partition(collection, functionInvoked) {
  if (Array.isArray(collection)) {
    if (typeof collection[0] != 'object') {
      return arrayPartition(collection, functionInvoked);
    } else {
      return objectPartition(collection, functionInvoked);
    }
  }

  collection = [collection];
  return objectPartition(collection, functionInvoked);
}

makechain.prototype.some = function (functionInvoked) {
  this.value = some(this.value, functionInvoked);
  return this;
};

export default partition;
