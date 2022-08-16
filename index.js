import _ from "./matlib.js";

let arrayExample = [1, 2, 3, 4, NaN, false, 0, 100, -9];

console.log(_.compact({ arrayExample }));
console.log(_.difference([1, 2, 3], [2, 8]));
