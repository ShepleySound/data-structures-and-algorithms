'use strict';

const {Stack, Queue} = require('../stack-and-queue/index');

/**
 * Defines a node for a binary tree structure.
 */
class Node {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Defines a binary tree data structure. It is aware of the root node, even when empty.
 */
class BinaryTree {
  /**
   * Create a binary tree. Empty when instantiated.
   */
  constructor() {
    this.root = null;
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
      if (node.left) {
        queue.enqueue(node.left);
      } else {
        node.left = new Node(value);
        return;
      }
      if (node.right) {
        queue.enqueue(node.right);
      } else {
        node.right = new Node(value);
        return;
      }
    }
  }

  /**
   * Preorder traversal of the binary tree using a recursive function.
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
      traverse(node.left);
      traverse(node.right);
    };
    traverse();
    return array;
  }

  /**
   * Inorder traversal of the binary tree using a recursive function.
   * Pushes each value to a holding array.
   * @returns An array that holds the values in order of traversal.
   */
  inorderRecursive() {
    const array = [];
    const traverse = (node = this.root) => {
      if (node === null) {
        return;
      }

      traverse(node.left);
      // console.log(node.value);
      array.push(node.value);
      traverse(node.right);
    };
    traverse();
    return array;
  }

  /**
   * Postorder traversal of the binary tree using a recursive function.
   * Pushes each value to a holding array.
   * @returns An array that holds the values in order of traversal.
   */
  postorderRecursive() {
    const array = [];
    const traverse = (node = this.root) => {
      if (node === null) {
        return;
      }
      traverse(node.left);
      traverse(node.right);
      // console.log(node.value);
      array.push(node.value);
    };
    traverse();
    return array;
  }

  /**
   * Inorder traversal of the binary tree using a stack and iterative function.
   * Pushes each value to a holding array.
   * @returns An array that holds the values in order of traversal.
   */
  inorderIterative() {
    const array = [];
    const stack = new Stack();
    let node = this.root;
    while (!stack.isEmpty() || node) {
      if (node) {
        stack.push(node);
        node = node.left;
      } else {
        node = stack.pop();
        // console.log(node.value);
        array.push(node.value);
        node = node.right;
      }
    }
    return array;
  }

}

/**
 * Extends the {@link BinaryTree} class with methods specific to Binary Search Trees.
 */
class BinarySearchTree extends BinaryTree {
  /**
   * Inserts a new node into the tree, such that the tree will be ordered, but not necessarily balanced.
   * @param {number} value - The number that the created node should hold.
   */
  iterativeInsert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }
    let node = this.root;
    while (node) {
      if (node.value > value) {
        if (node.left === null) {
          node.left = new Node(value);
          return;
        }
        if (node.left) {
          node = node.left;
          continue;
        }
      } else if (node.value < value) {
        if (node.right === null) {
          node.right = new Node(value);
          return;
        }
        if (node.right) {
          node = node.right;
          continue;
        }
      }
    }
  }

  /**
   * Uses the assumed structure of a binary search tree to search for a value in an iterative manner.
   * @param {number} value - The numeric value to search for within the tree.
   * @returns {Boolean} true if the value exists in the tree, false if it does not exist.
   */
  iterativeContains(value) {
    if (this.root === null) {
      return false;
    }
    let node = this.root;
    while (node) {
      if (node.value > value) {
        if (node.left === null) {
          return false;
        }
        if (node.left.value === value) {
          return true;
        }
        node = node.left;
        continue;
      }
      if (node.value < value) {
        if (node.right === null) {
          return false;
        }
        if (node.right.value === value) {
          return true;
        }
        node = node.right;
        continue;
      }
    }
  }

  /**
   * Uses the assumed structure of a binary search tree to search for a value in a recursive manner.
   * @param {number} value - The numeric value to search for within the tree.
   * @param {Node} [node=this.root] - The node to perform the check on. Defaults to the root of the tree.
   * @returns {Boolean} true if the value exists in the tree, false if it does not exist.
   */
  recursiveContains(value, node = this.root) {
    if (node === null) {
      return false;
    }
    if (node.value === value) {
      return true;
    }
    if (node.value > value) {
      return this.recursiveContains(value, node.left);
    }
    if (node.value < value) {
      return this.recursiveContains(value, node.right);
    }
  }
}

const searchTree = new BinaryTree();

searchTree.iterativeInsert(4);
searchTree.iterativeInsert(2);
searchTree.iterativeInsert(6);
searchTree.iterativeInsert(1);
searchTree.iterativeInsert(3);
searchTree.iterativeInsert(5);
searchTree.iterativeInsert(7);

console.log(searchTree.postorderRecursive());

module.exports = { BinaryTree, BinarySearchTree, Node };