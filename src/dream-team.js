const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let a = members.filter((item) => typeof item === 'string');
  a = a.map((item) => {return item.trim()}).sort();
  return a.reduce((res, item) => {return res += item[0].toUpperCase()}, '').split('').sort().join('');
};
