const CustomError = require("../extensions/custom-error");
const chainMaker = {
  storage : [], 
  getLength() {
    return this.storage.length;
  },
  addLink(value) {
    this.storage.push(`( ${value + ''} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || this.storage[position - 1] === undefined ){
      this.storage = [];
      throw new Error();
    }
    this.storage.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.storage.reverse();
    return this;
  },
  finishChain() {
    let result = this.storage.join('~~');
    this.storage = [];
    return result;
  }
};

module.exports = chainMaker;
