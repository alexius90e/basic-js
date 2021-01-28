const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (matrix === undefined || matrix.length === 0){
    return 0;
  }
  let totalMatrix = matrix.reduce(function(res, item){
    return res.concat(item);
  }, []);
  return totalMatrix.filter((item) => item === '^^').length;
};
