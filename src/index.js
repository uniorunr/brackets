module.exports = function check(str, bracketsConfig) {
  const stack = [...str[0]];
  const openingBr = [];
  const closingBr = [];

  bracketsConfig.map(item => {  // creating arrays of opening and closing brackets
    openingBr.push(item[0]);
    closingBr.push(item[1]);
  });

  for (let i = 1; i < str.length; i++) {      // checking of every char in string
    let last = stack[stack.length - 1];
    if (last === str[i] && 
      closingBr.indexOf(last) === openingBr.indexOf(last)) {      // checking if opening and closing bracket is same 
      stack.pop();      // removing last element from the stack if brackets are balanced
    } else if (openingBr.indexOf(str[i]) !== -1) {      // checking if the current char is the opening bracket
      stack.push(str[i]);     // adding the current char to the stack
    } else if (closingBr.indexOf(str[i]) === openingBr.indexOf(last)) {     // checking if the last element from the stack and current char are balanced
      stack.pop();      // removing the last element from the stack if brackets are balanced
    } else return false;
  }
  
  if (!stack.length) {      // checking the length of the stack
    return true;
  } return false;
}
