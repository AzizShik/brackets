module.exports = function check(str, bracketsConfig) {
  let newStr = str;

  for (let j = 0; j < bracketsConfig.length * 2; j += 1) {
    for (let i = 0; i < bracketsConfig.length; i += 1) {
      const subStr = bracketsConfig[i][0] + bracketsConfig[i][1];
      for (let k = 0; k < str.length / 2; k += 1) {
        newStr = newStr.replace(subStr, '');
      }
    }
    if (newStr.length === 0) return true;
  }

  return false;
};
