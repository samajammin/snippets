// Given an array of integers, return the mode
const mostCommon = arr => {
  let counter = {};
  arr.forEach(item => {
    counter[item] = counter[item] || 0;
    counter[item] += 1;
  });
  const keys = Object.keys(counter);
  return keys.reduce((a, b) => {
    return counter[a] > counter[b] ? a : b;
  }, 0);
};

const sample1 = [
  40,
  40,
  40,
  46,
  46,
  46,
  46,
  40,
  40,
  40,
  40,
  40,
  40,
  40,
  41,
  40,
  40,
  40,
  40,
  40
];
console.log(mostCommon(sample1));
