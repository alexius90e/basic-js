const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  console.log(sampleActivity);
  if (typeof sampleActivity !== 'string') return false;
  if (isNaN(+sampleActivity)) return false;
  if (isFinite(+sampleActivity)) return false;
  if (!sampleActivity || sampleActivity === undefined || sampleActivity > MODERN_ACTIVITY){
    return false;
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY / +sampleActivity) / k;
  return t;
};
