const camelCase = str => {
  console.log(str);
  const words = str.split(' ');
  const upperWords = words.map(word => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  });
  return upperWords.join('');
};

// console.log(camelCase('hello'));
// console.log(camelCase('hello world'));
// console.log(camelCase('hello beautiful green world'));

String.prototype.camelCase = function() {
  const str = this.toString();
  const words = str.split(' ');
  const upperWords = words.map(word => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  });
  return upperWords.join('');
};

console.log('hello'.camelCase());
console.log('hello world'.camelCase());
console.log('hello beautiful green world'.camelCase());
