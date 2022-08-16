import "./matlib.js";

class makechain {
  constructor(array) {
    this.value = array;
  }
}

function newChain(values) {
  let newVariable = new makechain(values);
  return newVariable;
}

makechain.prototype.returnValue = function () {
  return this.value;
};

export { makechain };

export default newChain;
