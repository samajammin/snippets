// Write an intersection function that runs in O(n) time and constant space (aka no building new arrays/objects).
// Assume arrays are a sorted list of integers.

const intersection = (
  first: number[],
  second: number[],
  third: number[]
): number[] => {
  for (let i = 0; i < first.length; i++) {
    while (
      first[i] !== second[i] ||
      first[i] !== third[i] ||
      second[i] !== third[i]
    ) {
      // if one list has a smaller int, splice it off.
      if (first[i] < second[i] && first[i] < third[i]) {
        first.splice(i, 1);
      }
      if (second[i] < first[i] && second[i] < third[i]) {
        second.splice(i, 1);
      }
      if (third[i] < first[i] && third[i] < second[i]) {
        third.splice(i, 1);
      }
      // if one list has greater int, splice other two off.
      if (first[i] > second[i] && first[i] > third[i]) {
        second.splice(i, 1);
        third.splice(i, 1);
      }
      if (second[i] > first[i] && second[i] > third[i]) {
        first.splice(i, 1);
        third.splice(i, 1);
      }
      if (third[i] > first[i] && third[i] > second[i]) {
        first.splice(i, 1);
        second.splice(i, 1);
      }
    }
  }
  return first;
};

const arr1 = [2, 5, 6, 8, 9];
const arr2 = [1, 2, 3, 4, 6, 7, 9];
const arr3 = [2, 3, 6, 9, 10];

console.log(intersection(arr1, arr2, arr3));
// => [2, 6, 9]
