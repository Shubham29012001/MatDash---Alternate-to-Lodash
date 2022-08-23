import _ from "./matlib.js";

let arrayExample = [1, 2, 3, 4, NaN, false, 0, 100, -9];

window._ = _;

// console.log(_.compact([0, 1, false, 2, "", 3]));

var users = [
  { user: "barney", age: 36, active: false },
  { user: "fred", age: 40, active: true },
  { user: "pebbles", age: 1, active: false },
];

console.log(_.partition(users, ["active", false]));

// console.log(_.difference([2, 1], [2, 3]));

// console.log(_.indexof([1, 2, 1, 2], 2));
// console.log(_.indexof([1, 2, 1, 2], 2, 2));

// console.log(_.union([2], [1, 2]));

// console.log(_.without([2, 1, 2, 3], 1, 2));

// console.log(_.pick({ a: 1, b: "2", c: 3 }, ["a", "c"]));

// console.log(_.omit({ a: 1, b: "2", c: 3 }, ["a", "c"]));

// console.log(
//   _.invoke({ a: [{ b: { c: [1, 2, 3, 4] } }] }, "a[0].b.c.slice", 1, 3)
// );

// console.log(
//   _.merge(
//     {
//       a: [{ b: 2 }, { d: 4 }],
//     },
//     {
//       a: [{ c: 3 }, { e: 5 }],
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
