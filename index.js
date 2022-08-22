import _ from "./matlib.js";

let arrayExample = [1, 2, 3, 4, NaN, false, 0, 100, -9];

window._ = _;
var object = {
  a: [{ b: 2 }, { d: 4 }],
};

var other = {
  a: [{ c: 3 }, { e: 5 }],
};

console.log(_.merge(object, other));
