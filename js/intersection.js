// Write an intersection function that runs in O(n) time and constant space
// Assume arrays are a sorted list of integers

// const arr1 = [1, 2, 5, 8, 9];
// const arr2 = [1, 2, 3, 4, 7, 9];
// const arr3 = [2, 3, 9, 10];

// take 1
// fails constant space

// const intersection = (arr1, arr2, arr3) => {
//   const counter = {};
//   [arr1, arr2, arr3].forEach(arr => {
//     arr.forEach(int => {
//       counter[int] = counter[int] + 1 || 1;
//     });
//   });
//   const keys = Object.keys(counter);
//   return keys.filter(int => counter[int] === 3);
// };

// const intersection = (arr1, arr2, arr3) => {

//   const maxLengthArr = Math.max(arr1.length, arr2.length, arr3.length)

//   let index1 = 0;
//   let index2 = 0;
//   let index3 = 0;

//   while (index1 < maxLengthArr && index2 < maxLengthArr && index3 < maxLengthArr) {
//     let val1 = arr1[index1];
//     let val2 = arr2[index2];
//     let val3 = arr3[index3];

//   }
// }

const arr1 = [1, 2, 5];
const arr2 = [1, 2, 3];
const arr3 = [2, 3, 9];
// const arr1 = [1, 2, 5, 8, 9];
// const arr2 = [1, 2, 3, 4, 7, 9];
// const arr3 = [2, 3, 9, 10];

const intersection = (arr1, arr2, arr3) => {
  // since we can't create new array, need to filter one down to common ints
  // shouldn't matter which...
  let arr1Index = 0;
  let arr2Index = 0;
  let arr3Index = 0;

  while (arr1Index < arr1.length) {
    console.log('START');
    console.log({ arr1, arr2, arr3 });
    console.log('cur: ', arr1[arr1Index], arr2[arr2Index], arr3[arr3Index]);
    while (arr1[arr1Index] > arr2[arr2Index] && arr2Index < arr2.length) {
      console.log(arr2);
      arr2.splice(arr2Index, 1);
    }
    while (arr1[arr1Index] > arr3[arr3Index] && arr3Index < arr3.legnth) {
      arr3.splice(arr3Index, 1);
    }

    if (
      arr1[arr1Index] < arr2[arr2Index] ||
      arr1[arr1Index] < arr3[arr3Index]
    ) {
      arr1.splice(arr1Index, 1);
      // arr1Index++;
      continue;
    }

    if (
      arr1[arr1Index] === arr2[arr2Index] &&
      arr1[arr1Index] === arr3[arr3Index]
    ) {
      console.log('GOT ONE: ', arr1[arr1Index]);
      arr1Index++;
      arr2Index++;
      arr3Index++;
      continue;
    }

    if (arr1.length === 1) {
      return arr1;
    }

    if (arr2.length === 1 || arr3.length === 1) {
      arr1.splice(arr1Index, arr1.length);
      return arr1;
    }
    console.log('END');
    console.log({ arr1, arr2, arr3 });
    // arr1Index++;
  }
  return arr1;
};

const res = intersection(arr1, arr2, arr3); // [2, 9]
res;
