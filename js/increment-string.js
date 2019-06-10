/*
Your job is to write a function which increments a string, to create a new string.
If the string already ends with a number, the number should be incremented by 1. 
If the string does not end with a number the number 1 should be appended to the new string.

Examples:

foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100
foobar000 -> foobar001
1 -> 2
09 -> 10
*/

const incrementString = strng => {
  if (isNaN(parseInt(strng.slice(-1)))) {
    return strng.concat('1');
  }
  let newInt;
  for (let i = strng.length - 1; i >= 0; i--) {
    const tail = strng.slice(i);
    if (Number.isInteger(parseInt(tail))) {
      // sloppy checks to account for entrie strng is also an int
      if (tail.length === strng.length) {
        newInt = String(parseInt(tail) + 1);
        while (newInt.length < tail.length) {
          newInt = '0' + newInt;
        }
        return newInt;
      }
      continue;
    }
    let int = strng.slice(i + 1);
    let str = strng.slice(0, i + 1);
    newInt = String(parseInt(int) + 1);
    console.log({ i, strng, int, str, newInt });
    while (newInt.length < int.length) {
      newInt = '0' + newInt;
    }
    return str + newInt;
  }
};

// console.log(incrementString('foobar000'));
console.log(incrementString('09'));
// incrementString('foobar001');
