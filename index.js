import _ from "./matlib.js";
import newChain, { makechain } from "./makechain.js";

var libraryName, libraryFunction;

var chain = function (x) {
  return (chain = new makechain(x));
};

window._ = _;

window.chain = chain;

// console.log(chain(a).compact().difference([2]));

window.getInputfromConsole = function (libraryName) {
  libraryFunction = libraryName;
  console.log("Library Function Name Set");

  if (libraryFunction) {
    window[libraryFunction] = _;
    delete window._;
  }
};

// console.log(_.compact([0, 1, false, 2, "", 3]));

// console.log(_.difference([2, 1], [2, 3]));

// console.log(_.indexof([1, 2, 1, 2], 2));
// console.log(_.indexof([1, 2, 1, 2], 2, 2));

// console.log(_.union([2], [1, 2]));

// console.log(_.without([2, 1, 2, 3], 1, 2));

// console.log(_.pick({ a: 1, b: "2", c: 3 }, ["a", "d"]));

// console.log(_.omit({ a: 1, b: "2", c: 3 }, "a", "c"));

// console.log(_.invoke({ a: [{ b: { c: [1, 2, 3, 4] } }] },'a[0].b.c.slice', 1, 3));

// console.log(
//   _.merge(
//     {
//       a: 1,
//     },
//     {
//       b: 2,
//     }
//   )
// );

// console.log(_.get({ a: [{ b: { c: 3 } }] }, "a[0].b.c"));

// console.log(_.includes([1, 2, 3], 1, 2));

// console.log(_.groupby([6.1, 4.2, 6.3], Math.floor));

// console.log(
//   _.findlast([1, 2, 3, 4], function (n) {
//     return n % 2 == 1;
//   })
// );

// console.log(_.some([null, 0, "yes", false], Boolean));

// var users = [
//   { user: "barney", age: 36, active: false },
//   { user: "fred", age: 40, active: true },
//   { user: "pebbles", age: 1, active: false },
// ];

// console.log(_.partition(users, ["active", false]));
