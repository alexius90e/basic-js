const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;
  if (isNaN(+sampleActivity)) return false;
  //   if (isFinite(+sampleActivity)) return false;
  if (sampleActivity === undefined) return false;
  if (+sampleActivity > 0 && +sampleActivity < MODERN_ACTIVITY) {
    let k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.log(MODERN_ACTIVITY / +sampleActivity) / k;
    console.log(Math.floor(t));
    return Math.floor(t);
  } else {
    return false;
  }
};
