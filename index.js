import _ from "./matlib.js";

let arrayExample = [1, 2, 3, 4, NaN, false, 0, 100, -9];

var a = _.findlast({ 1: 1, 2: 2, 3: 3, 4: undefined }, function (n) {
  return n % 2 == 9;
});

console.log(a);
