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

import { makechain } from "./makechain.js";

function invoke(sourceObj, path, ...argv) {
  if (!Array.isArray(sourceObj) && typeof sourceObj === "object") {
    if (typeof path === "object") {
      var newPath = path;
    } else {
      var newPath = path.replace(/\[/g, ".").replace(/\]/g, ".").split("."); // a[0].b.c a 0 b c
      newPath = newPath.filter((value) => value);
    }
    var callFunction = newPath.slice(-1);

    for (let newValueOfPath of newPath) {
      if (newValueOfPath == callFunction) {
        sourceObj = sourceObj[newValueOfPath](...argv);
      } else {
        sourceObj = sourceObj[newValueOfPath];
      }
    }

    return sourceObj;
  } else {
    console.error("Need source as Object argument");
  }
}

makechain.prototype.invoke = function (path, ...argv) {
  this.value = invoke(this.value, path, ...argv);
  return this;
};

export default invoke;
