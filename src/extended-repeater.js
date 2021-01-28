const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = str + '';
  let separator = options.hasOwnProperty('separator') ? options.separator + '' : '+';
  let repeatTimes = options.repeatTimes ? +options.repeatTimes : 1;
  let addition = options.hasOwnProperty('addition') ? options.addition + '' : '';
  let additionRepeatTimes = options.additionRepeatTimes ? +options.additionRepeatTimes : 1;
  let additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator + '' : '|';
  addition = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  return Array(repeatTimes).fill(str + addition).join(separator);
};
  