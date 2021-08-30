module.exports = function check(str, bracketsConfig) {
  let newStr = str;
  for (let j = 0; j < bracketsConfig.length * 2; j++) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      let subStr = bracketsConfig[i][0] + bracketsConfig[i][1];
      for (let i = 0; i < str.length / 2; i++) {
        newStr = newStr.replace(subStr, '');
      }
    }
    if (newStr.length === 0) return true;
  }
  if (newStr.length > 0) return false;
};