import { makechain } from './makechain.js';

/**
 * The omit function will accept an object parameter, returns a new object without given keys
 * @since 0.1.0
 * @category Object
 * @param {Object} object takes object parameter
 * @param {Keys} [values] keys to be exclude
 * @returns {Object} Returns a new object without keys
 * @example
 *
 * omit({'a':1, 'b':2, 'c':3}, 'a','c')
 * // => {'b':2}
 */

function omit(Obj, ...keys) {
  if (typeof Obj === 'object') {
    let newObject = { ...Obj };
    try {
      for (const arrayKeys of keys) {
        for (const innerArrayKeys of arrayKeys) {
          delete newObject[innerArrayKeys];
        }
      }
      return newObject;
    } catch (e) {
      return Obj;
    }
  } else {
    console.error('Needs object arguments');
  }
}

makechain.prototype.omit = function (...keys) {
  this.value = omit(this.value, ...keys);
  return this;
};

export default omit;
