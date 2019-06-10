/*

simple recursion exercise... given an array of animals,
create a tree of objects that contain their children

*/

const animals = [
  { name: 'cat', parent: 'mammal' },
  { name: 'animal', parent: null },
  { name: 'mammal', parent: 'animal' },
  { name: 'dog', parent: 'mammal' },
  { name: 'persian', parent: 'cat' },
  { name: 'poodle', parent: 'dog' },
  { name: 'pug', parent: 'dog' },
  { name: 'siamese', parent: 'cat' }
];

const makeTree = (arr, parent) => {
  let node = {};

  arr.forEach(i => {
    if (i.parent === parent) {
      node[i.name] = makeTree(arr, i.name);
    }
  });

  if (Object.keys(node).length === 0) {
    node = null;
  }

  return node;
};

console.log(JSON.stringify(makeTree(animals, null), null, 2));
