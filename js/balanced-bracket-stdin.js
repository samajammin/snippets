process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input !== null) {
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
          process.stdout.write(`${charCount}`);
          process.exit();
        }
      }
      charCount += 1;
    }
    if (stack.length === 0) {
      process.stdout.write('Success');
      process.exit();
    } else {
      process.stdout.write(`${openingCharCountstack[0]}`);
      process.exit();
    }
  }
});
