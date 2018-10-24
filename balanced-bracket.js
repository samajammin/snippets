const balancedBrackets = input => {
  let charCount = 1;
  let stack = [];
  let openingCharCountstack = [];
  const balanceLookup = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  for (const char of input) {
    if (['(', '[', '{'].includes(char)) {
      stack.push(char);
      openingCharCountstack.push(charCount);
    } else if ([')', ']', '}'].includes(char)) {
      if (balanceLookup[char] === stack.slice(-1)[0]) {
        stack.pop();
        openingCharCountstack.pop();
      } else {
        return charCount;
      }
    }
    charCount += 1;
  }

  if (stack.length === 0) {
    return 'Success';
  } else {
    return openingCharCountstack[0];
  }
};
console.log(balancedBrackets('([])[]()'));
// Success
console.log(balancedBrackets('((([([])]))())'));
// Success
console.log(balancedBrackets('([]]()'));
// 4
console.log(balancedBrackets(']['));
// 1
console.log(balancedBrackets('(((([]))))(()'));
// 11
