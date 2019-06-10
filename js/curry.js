// const curried = one => two => three => {
//   console.log(one, two, three);
// };

// const first = curried('one');

// console.log(first);

// const second = first('two');

// console.log(second);

// const third = second('three');

const dragons = [
  { name: 'fluffykins', element: 'lighting' },
  { name: 'noomi', element: 'lighting' },
  { name: 'karo', element: 'fire' },
  { name: 'doomer', element: 'timewrap' }
];

const hasElement = element => object => {
  return object.element === element;
};

const lightingDragons = dragons.filter(hasElement('lighting'));

console.log(lightingDragons);
