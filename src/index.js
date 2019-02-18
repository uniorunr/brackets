module.exports = function check(str, bracketsConfig) {
  const stack = [...str[0]];
  const openingBr = [];
  const closingBr = [];

  bracketsConfig.map(item => {
    openingBr.push(item[0]);
    closingBr.push(item[1]);
  });

  for (let i = 1; i < str.length; i++) {
    let last = stack[stack.length - 1];
    if (last === str[i] && 
      closingBr.indexOf(last) === openingBr.indexOf(last)) {
      stack.pop();
    } else if (openingBr.indexOf(str[i]) !== -1) {
      stack.push(str[i]);
    } else if (closingBr.indexOf(str[i]) === openingBr.indexOf(last)) {
      stack.pop();
    } else return false;
  }
  
  if (!stack.length) {
    return true;
  } return false;
}
