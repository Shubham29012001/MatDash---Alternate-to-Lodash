import { makechain } from './makechain.js';

/**
 * The groupby function will accept a collection parameter and predicate,
 * returns the array of group elements for truthy and falsy values
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array | Object} collection takes collection to inspect
 * @param {Predicate} function invoked for per iteration
 * @returns {Array} Returns the array of group elements for truthy and falsy values
 * @example
 *
 * groupby([6.1, 4.2, 6.3], Math.floor)
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 */

function groupby(collection, property) {
  let result = {};

  // Checks if the collection is an object else returns empty object

  if (typeof collection == 'object') {
    let newItem;

    /**
     * Checks if the property is a function and calls the function on each collection element
     * Checks if the property is a string and whether the string key is present
     * Groups all those elements
     */

    for (let element of Object.values(collection)) {
      if (typeof property == 'function') {
        newItem = property(element);
      } else if (
        typeof property == 'string' &&
        typeof collection[0] == 'object'
      ) {
        let path = property.split('.');
        let index, currentkey, currentItem;

        currentItem = element;

        for (index = 0; index < path.length; index++) {
          currentkey = path[index];

          if (currentItem[currentkey]) {
            currentItem = currentItem[currentkey];
          } else {
            currentItem = undefined;
            break;
          }
        }

        result = currentItem;
      } else if (typeof property == 'string') {
        newItem = element[property];
      }
      result[newItem] = result[newItem] || [];
      result[newItem].push(element);
    }
  }

  return result;
}

makechain.prototype.some = function (property) {
  this.value = some(this.value, property);
  return this;
};

export default groupby;
