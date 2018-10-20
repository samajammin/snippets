// inspired by MPJ
// https://www.youtube.com/watch?v=W4brAobC2Hc
// https://www.youtube.com/watch?v=QOnUcU8U_XE

// iterators & generators:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator

const somewhatRandomItem = arr => {
  const index = Math.round(arr.length * Math.random());
  return arr[index] ? arr[index] : arr[arr.length - 1];
};

const generateDragon = () => {
  const sizes = ['tiny', 'tall', 'huge'];
  const elements = ['stone', 'fire', 'ice'];
  return `${somewhatRandomItem(sizes)} ${somewhatRandomItem(elements)} dragon`;
};

// roll your own iterator
const buildYourOwnDragonGenerator = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        const isDoneGenerating = Math.random() > 0.8;
        const result = {
          value: generateDragon(),
          done: false
        };
        if (isDoneGenerating) {
          result.done = true;
        }
        return result;
      }
    };
  }
};

// syntatic sugar!
const dragonGenerator = {
  [Symbol.iterator]: function*() {
    while (true) {
      const isDoneGenerating = Math.random() > 0.8;
      if (isDoneGenerating) return;
      yield generateDragon();
    }
  }
};

for (dragon of buildYourOwnDragonGenerator) {
  console.log(dragon);
}

const dragons = [...buildYourOwnDragonGenerator];
console.log(dragons);

for (dragon of dragonGenerator) {
  console.log(dragon);
}
