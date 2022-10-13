const { Node, Tree } = require('m-ary-tree');

const tree = new Tree(4);

tree.iterativeInsert(1);
tree.iterativeInsert(2);
tree.iterativeInsert(3);
tree.iterativeInsert(4);
tree.iterativeInsert(5);
tree.iterativeInsert(6);
tree.iterativeInsert(7);
tree.iterativeInsert(8);
tree.iterativeInsert(9);
tree.iterativeInsert(10);
tree.iterativeInsert(11);
tree.iterativeInsert(12);
tree.iterativeInsert(13);
tree.iterativeInsert(14);
tree.iterativeInsert(15);

function fizzBuzz(input) {
  const value = parseInt(input);
  let fbOutput = '';
  if (value % 3 === 0) {
    fbOutput += 'Fizz';
  }
  if (value % 5 === 0) {
    fbOutput += 'Buzz';
  }
  return fbOutput ? fbOutput : input.toString();
}

function fizzBuzzTree(tree) {

  const newTree = new Tree();
  const clone = (node = tree.root) => {
    const copy = new Node(fizzBuzz(node.value));
    for (let i in node.children) {
      copy.children[i] = clone(node.children[i]);
    }
    return copy;
  };

  newTree.root = clone();
  return newTree;
}

const newTree = fizzBuzzTree(tree);

console.log(tree.preorderRecursive());
console.log(newTree.preorderRecursive());
