const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw "Error";
  if (arr.length === 0) return [];
  if (
    !arr.includes("--discard-prev") &&
    !arr.includes("--double-prev") &&
    !arr.includes("--double-next") &&
    !arr.includes("--discard-next")
  ) {
    return arr;
  }
  let result = [];
  arr.forEach((item, index, arr) => {
    if (item === "--discard-prev") {
      if (index === 0) {
        result.push(null);
      } else {
        result.pop();
      }
    } else if (item === "--discard-next") {
      result.push(null);
    } else if (arr[index - 1] && arr[index - 1] === "--discard-next") {
      result.push(null);
    } else if (item === "--double-next") {
      if (index === arr.length - 1) {
        result.push(null);
      } else {
        result.push(arr[index + 1]);
      }
    } else if (item === "--double-prev") {
      if (index === 0) {
        result.push(null);
      } else {
        result.push(result[result.length-1]);
      }
    } else {
      result.push(item);
    }
  });
  return result.filter((item) => item !== null);
};
