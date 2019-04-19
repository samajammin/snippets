// reverse an array in place
const reverse = (arr: any[]): any[] => {
  for (let i = 0; i < arr.length / 2; i++) {
    const j = arr.length - 1 - i;
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

console.log(reverse([1]));
console.log(reverse([1, 2]));
console.log(reverse([1, 2, 3]));
console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse([1, 2, 3, 4, 5, 6]));
console.log(reverse([1, 2, 3, 4, 5, 6, 7]));
