const { Node, Tree } = require('./m-ary-tree');

/**
 * Performs the FizzBuzz algorithm on a single input.
 * @param {int | string} input - The input to perform the FizzBuzz algorithm on. Will attempt to parse a string to an integer.
 * @returns Whatever was entered in string format, or the appropriate "FizzBuzz" string if the input was able to be parsed to an integer and was divisible by either 3 or 5.
 */
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

/**
 * Traverses through an m-ary tree and creates a deep copy of each of its nodes. Creates a copy of the tree during traversal, altering each of the new nodes' values with the provided callback function.
 * @param {Tree} tree - An m-ary tree structure. The callback will be performed on each of its nodes.
 * @param {function} callback - The callback function that should change the value of each of the nodes.
 * @returns A deep copy of the tree.
 */
function callbackTree(tree, callback) {

  const newTree = new Tree();
  const clone = (node = tree.root) => {
    const copy = new Node(callback(node.value));
    for (let i in node.children) {
      copy.children[i] = clone(node.children[i]);
    }
    return copy;
  };

  newTree.root = clone();
  return newTree;
}

module.exports = {fizzBuzz, callbackTree};
