/*
https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

Given two arrays of strings a1 and a2,
return a sorted array r in lexicographical order
of the strings of a1 which are substrings of strings of a2.

#Example 1: 
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns["arp", "live", "strong"]

#Example 2: 
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns[]
*/

// decent solution
const orderedSubstringsOne = (a1, a2) => {
  const r = [];
  a1.forEach(oneString => {
    a2.forEach(twoString => {
      if (twoString.includes(oneString) && r.indexOf(oneString) === -1) {
        r.push(oneString);
      }
    });
  });
  return r.sort();
};

// clever solution
const orderedSubstringsTwo = (a1, a2) => {
  return a1
    .filter(oneString => {
      return a2.some(twoString => {
        return twoString.indexOf(oneString) > -1;
      });
    })
    .sort();
};

const a1 = ['arp', 'live', 'strong'];
const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

console.log(orderedSubstringsOne(a1, a2));
console.log(orderedSubstringsTwo(a1, a2));
