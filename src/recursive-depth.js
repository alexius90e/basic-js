const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    arr.forEach(element => {
      if(Array.isArray(element)){
        let depth = this.calculateDepth(element) + 1;
        if (depth > maxDepth){
          maxDepth = depth
        }
      }
    });
    return maxDepth
  }
};