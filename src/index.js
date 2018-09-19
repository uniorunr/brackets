module.exports = function check(str, bracketsConfig) {
  var stackArr = [];
  var openingBr = [];
  var closingBr = [];
  for (var k = 0; k < bracketsConfig.length; k++) { // creating the array of opening and closing brackets
    openingBr.push(bracketsConfig[k][0]);
    closingBr.push(bracketsConfig[k][1]);
  }
  stackArr.push(str[0]); // setting the first element of the stack
  for (var i = 1; i < str.length; i++) { // checking of every char in string
    var lastIndex = stackArr[stackArr.length - 1];
    if (lastIndex === str[i] && closingBr.indexOf(str[i]) === openingBr.indexOf(lastIndex)) { // checking if opening and closing bracket is same 
      stackArr.pop(); // removing last element from the stack if brackets are balanced
    } else if (openingBr.indexOf(str[i]) !== -1) { // checking if the current char is the opening bracket
      stackArr.push(str[i]); // adding the current char to the stack
    } else if (closingBr.indexOf(str[i]) === openingBr.indexOf(lastIndex)) { // checking if the last element from the stack and current char are balanced
      stackArr.pop(); // removing the last element from the stack if brackets are balanced
    } else {
      return false;
    }
  }
  if (stackArr.length === 0) { // checking the length of the stack
    return true;
  } else {
    return false;
  }
}
