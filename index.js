import _ from "./matlib.js";

let arrayExample = [1, 2, 3, 4, NaN, false, 0, 100, -9];

window._ == _ ? (window._matlib = _) : (window._ = _);

var users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
];

// The `_.matchesProperty` iteratee shorthand.
console.log(_.includes({ a: 1, b: 2, c: 3 }, 1, 0));
// => true
