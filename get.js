/**
 * The get function will accept an object parameter, returns a new object of choosen keys
 * @since 0.1.0
 * @category Object
 * @param {Object} takes object parameter
 * @param {Array | String} [values] path to be called
 * @param {Number} [value] default value to be return
 * @returns {*} Returns the resolved values
 * @example
 *
 * get({ 'a': [{ 'b': { 'c': 3 } }], 'a[0].b.c'})
 * // => 3
 */

import { makechain } from "./makechain.js";

function get(Obj, path, defaultValue) {
  if (typeof Obj === "object" && !Array.isArray(Obj)) {
    if (typeof path === "object") {
      var newPath = path;
    } else {
      var newPath = path.replace(/\[/g, ".").replace(/\]/g, ".").split(".");
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
    console.error("Needs object arguments");
  }
}

makechain.prototype.get = function (path, defaultValue) {
  this.value = _.get(this.value, path, defaultValue);
  return this;
};

export default get;
