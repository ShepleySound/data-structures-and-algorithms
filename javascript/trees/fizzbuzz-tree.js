const { Node, Tree } = require('./m-ary-tree');

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

module.exports = {fizzBuzz, fizzBuzzTree};
