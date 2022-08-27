import { makechain } from './makechain.js';

/**
 * The get function will accept an object parameter, returns a new object of choosen keys
 * @since 0.1.0
 * @category Object
 * @param {Object} object takes object parameter
 * @param {Array | String} [values] path to be called
 * @param {Number} [default] default value to be return
 * @returns {*} Returns the resolved values
 * @example
 *
 * get({ 'a': [{ 'b': { 'c': 3 } }], 'a[0].b.c'})
 * // => 3
 */

function get(Obj, path, defaultValue) {
  /**
   * Check if Obj is an object else console the error. Filter out the Path.
   * Iterate through the Path and Call the inner Key with Path.
   * If Obj is undefined or null, return the defaultValue set by user.
   */

  if (typeof Obj === 'object' && !Array.isArray(Obj)) {
    if (typeof path === 'object') {
      var newPath = path;
    } else {
      var newPath = path.replace(/\[/g, '.').replace(/\]/g, '.').split('.');
      newPath = newPath.filter((value) => value);
    }

    for (let newPathValue of newPath) {
      try {
        Obj = Obj[newPathValue];
      } catch (e) {
        return undefined;
      }
      if (Obj === undefined || Obj === null) {
        Obj = defaultValue;
      }
    }
    return Obj;
  } else {
    console.error('Needs object arguments');
  }
}

makechain.prototype.get = function (path, defaultValue) {
  this.value = get(this.value, path, defaultValue);
  return this;
};

export default get;
