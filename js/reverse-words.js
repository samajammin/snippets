/*
  Write a function that takes in a string of one or more words, 
  and returns the same string, but with all five or more letter words reversed.
*/

const reverseWords = str => {
  const words = str.trim().split(' ');
  const spunWords = words.map(word => {
    if (word.length < 5) {
      return word;
    }
    return word
      .split('')
      .reverse()
      .join('');
  });
  return spunWords.join(' ');
};

console.log(reverseWords('Welcome'));
// 'emocleW'
console.log(reverseWords('Hey fellow warriors'));
// 'Hey wollef sroirraw'
console.log(reverseWords('This is a test'));
// 'This is a test'
console.log(reverseWords('This is another test'));
// 'This is rehtona test'
console.log(reverseWords('You are almost to the last test'));
// 'You are tsomla to the last test'
console.log(reverseWords('Just kidding there is still one more'));
// 'Just gniddik ereht is llits one more'
console.log(reverseWords('Seriously this is the last one'));
// 'ylsuoireS this is the last one'
