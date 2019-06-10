/*
expected output = "
    New York
    -Manhattan
    San Francisco Bay Area
    -San Francisco
    -South Bay
    --SanJose
"
*/

const input = [
  { name: 'New York', id: 1, parent_id: null },
  { name: 'San Francisco', id: 2, parent_id: 3 },
  { name: 'San Francisco Bay Area', id: 3, parent_id: null },
  { name: 'San Jose', id: 5, parent_id: 4 },
  { name: 'South Bay', id: 4, parent_id: 3 },
  { name: 'Oakland', id: 7, parent_id: 3 },
  { name: 'Alameda', id: 8, parent_id: 3 },
  { name: 'Manhattan', id: 6, parent_id: 1 }
];

const constructTree = (list, parentId) => {
  return list.reduce((tree, node) => {
    if (node.parent_id === parentId) {
      tree[node.name] = node;
      node.children = constructTree(list, node.id);
    }
    return tree;
  }, {});
};

// DFS(ish) b/c we want to output each child of given node before moving to sibling
const outputTree = tree => {
  let output = '';
  let prefix = [];
  const recurse = node => {
    return Object.keys(node)
      .sort()
      .forEach(key => {
        output += prefix.join('') + key + '\n';
        prefix.push('-');
        recurse(node[key].children);
        prefix.pop();
      });
  };
  recurse(tree);
  return output;
};

let tree = constructTree(input, null);
console.log(tree);
let output = outputTree(tree);
console.log(output);
