// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// simple solution
// const findOdd = arr => {
//   let counter = {};
//   let odd = null;
//   arr.forEach(i => {
//     if (counter[i]) {
//       counter[i] += 1;
//     } else {
//       counter[i] = 1;
//     }
//   });
//   Object.keys(counter).forEach(i => {
//     if (counter[i] % 2 !== 0) {
//       odd = i;
//     }
//   });
//   return parseInt(odd);
// };

// better solution
const findOdd = arr => {
  let counter = {};
  arr.forEach(function(el) {
    counter[el] ? counter[el]++ : (counter[el] = 1);
  });

  for (prop in counter) {
    // for in (vs forEach) allows us to exit loop early & avoids another var in memory
    if (counter[prop] % 2 !== 0) return Number(prop);
  }
};

// clever solution
// const findOdd = xs => xs.reduce((a, b) => a ^ b);

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
// =>  5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
// => -1
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
// =>  5
console.log(findOdd([10]));
// => 10
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
// => 10
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
// =>  1
