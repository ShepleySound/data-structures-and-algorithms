'use strict';

const { Queue } = require('../stack-and-queue/index');


class Node {
  constructor(value = null) {
    this.value = value;
    this.children = [];
  }
}

/**
 * Defines an m-ary tree
 */
class Tree {
  /**
   * Create an m-ary tree.
   * @param {number} maxMChildren - Defines "m", which is the number of children nodes that each node in the tree is allowed to contain.
   */
  constructor(maxMChildren) {
    this.root = null;
    this.maxMChildren = maxMChildren;
  }

  /**
   * Inserts a new node into the tree in level-order such that the tree remains balanced, but not necessarily sorted.
   * @param {number} value - The number that the created node should hold.
   */
  iterativeInsert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }
    const queue = new Queue();
    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      const node = queue.dequeue();

      for (let i = 0; i < this.maxMChildren; i++) {
        if (node.children[i]) {
          queue.enqueue(node.children[i]);
        } else {
          node.children[i] = new Node(value);
          return;
        }
      }
    }
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

  }

  /**
   * Preorder traversal of the tree using a recursive function.
   * Pushes each value to a holding array.
   * @param {Node} [node=this.root] - The node to perform the check on. Defaults to the root of the tree.
   * @returns An array that holds the values in order of traversal.
   */
  preorderRecursive() {
    const array = [];
    const traverse = (node = this.root) => {
      if (node === null) {
        return;
      }
      // console.log(node.value);
      array.push(node.value);
      for (let i in node.children) {
        traverse(node.children[i]);
      }
    };
    traverse();
    return array;
  }
}

module.exports = { Node, Tree };