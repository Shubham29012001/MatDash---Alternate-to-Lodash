import _ from "./matlib.js";

let arrayExample = [1, 2, 3, 4, NaN, false, 0, 100, -9];

let objectExample = {
  a: 1,
  b: 2,
  c: 3,
  d: 0,
  e: NaN,
  f: false,
};

console.log(_.pick(objectExample, "e", "f"));
