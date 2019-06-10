class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
  }

  logData() {
    console.log(this.data);
  }
}

class Tree {
  constructor(data) {
    this._root = new Node(data);
  }

  traverseDF(callback) {
    const recurse = currentNode => {
      callback(currentNode);
      currentNode.children.forEach(child => {
        recurse(child);
      });
    };
    recurse(this._root);
  }
}

var tree = new Tree('one');

tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;

tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;

tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;

tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];

tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];

tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];

const logData = node => {
  node.logData();
};

tree.traverseDF(logData);
