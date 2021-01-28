const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;
  if (isNaN(+sampleActivity)) return false;
  if (sampleActivity === undefined) return false;
  if (+sampleActivity > 0 && +sampleActivity < MODERN_ACTIVITY) {
    let t = Math.log(MODERN_ACTIVITY / +sampleActivity) * HALF_LIFE_PERIOD / Math.log(2);
    console.log(Math.ceil(t));
    return Math.ceil(t);
  } else {
    return false;
  }
};
