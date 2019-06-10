class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }

  removeChild(node) {
    this.children = this.children.filter(child => child.data !== node.data);
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  traverseBreadthFirst() {
    let nodeQueue = [this.root];
    let path = [];
    while (nodeQueue.length) {
      const curNode = nodeQueue.shift();
      path.push(curNode.value);
      if (curNode.children.length) {
        nodeQueue.push(...curNode.children);
      }
    }
    return path;
  }

  searchBreadthFirst(value) {
    let nodeQueue = [this.root];
    while (nodeQueue.length) {
      const curNode = nodeQueue.shift();
      if (curNode.value === value) {
        return true;
      } else {
        nodeQueue.push(...curNode.children);
      }
    }
    return false;
  }

  // recursive option
  // traverseDepthFirst(curNode = this.root, path = []) {
  //   path.push(curNode.value);
  //   if (curNode.children.length) {
  //     curNode.children.forEach(child => {
  //       this.traverseDepthFirst(child, path);
  //     });
  //   }
  //   return path;
  // }

  traverseDepthFirst() {
    let nodeStack = [this.root];
    let path = [];
    while (nodeStack.length) {
      const curNode = nodeStack.shift();
      path.push(curNode.value);
      if (curNode.children.length) {
        nodeStack.unshift(...curNode.children);
      }
    }
    return path;
  }

  searchDepthFirst(value) {
    let nodeStack = [this.root];
    while (nodeStack.length) {
      const curNode = nodeStack.shift();
      if (curNode.value === value) {
        return true;
      } else {
        nodeStack.unshift(...curNode.children);
      }
    }
    return false;
  }
}

const rootNode = new Node(1, null);
const tree = new Tree(rootNode);

const firstGenNode1 = new Node(2);
const firstGenNode2 = new Node(3);
const firstGenNode3 = new Node(4);
rootNode.addChild(firstGenNode1);
rootNode.addChild(firstGenNode2);
rootNode.addChild(firstGenNode3);

const secondGenNode1 = new Node(5);
firstGenNode1.addChild(secondGenNode1);
const secondGenNode2 = new Node(6);
const secondGenNode3 = new Node(7);
firstGenNode2.addChild(secondGenNode2);
firstGenNode2.addChild(secondGenNode3);
const secondGenNode4 = new Node(8);
firstGenNode3.addChild(secondGenNode4);

const thirdGenNode1 = new Node(9);
secondGenNode2.addChild(thirdGenNode1);

const traverseDepthFirst = tree.traverseDepthFirst();
const traverseBreadthFirst = tree.traverseBreadthFirst();
const isSevenInTree = tree.searchDepthFirst(9);
const isNineInTree = tree.searchBreadthFirst(9);
const isElevenInTree = tree.searchBreadthFirst(11);

console.log({
  traverseDepthFirst,
  traverseBreadthFirst,
  isSevenInTree,
  isNineInTree,
  isElevenInTree
});
