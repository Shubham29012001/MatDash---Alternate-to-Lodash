import { makechain } from './makechain.js';

/**
 * The invoke function will accept an object parameter, returns the result of invoked function
 * @since 0.1.0
 * @category Object
 * @param {Object} takes object parameter
 * @param {Array | String} [values] path for method to be invoked
 * @param {Array} [values] arguments to be pass on the method
 * @returns {*} Returns the resolved values
 * @example
 *
 * invoke({ 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] }, 'a[0].b.c.slice', 1, 3})
 * // => [2, 3]
 */

function invoke(sourceObj, path, ...argv) {
  /**
   * Checks whether the collection is an object, else consoles the error
   * If path is an array, then replace the [] brackets with '.' and splits with respect to '.'
   * Iterate to each element and if function encounters, call and return the function value else sourceObj
   */

  if (!Array.isArray(sourceObj) && typeof sourceObj === 'object') {
    var newPath = undefined;

    if (typeof path === 'object') {
      newPath = path;
    } else {
      newPath = path.replace(/\[/g, '.').replace(/\]/g, '.').split('.'); // a[0].b.c a 0 b c
      newPath = newPath.filter((value) => value);
    }

    var callFunction = newPath.slice(-1);

    try {
      for (let newValueOfPath of newPath) {
        newValueOfPath == callFunction
          ? (sourceObj = sourceObj[newValueOfPath](...argv))
          : (sourceObj = sourceObj[newValueOfPath]);
      }
    } catch (e) {
      return undefined;
    }

    return sourceObj;
  } else {
    console.error('Need source as Object argument');
  }
}

makechain.prototype.invoke = function (path, ...argv) {
  this.value = invoke(this.value, path, ...argv);
  return this;
};

export default invoke;
