'use strict';

class Node {
  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  /**
   * 
   */
  preorder(node) {
    if (node === null) {
      return;
    }

    this.preorder(node.left);
    this.preorder(node.right);
    console.log(node.data);
  }

  inorder(node) {
    if (node === null) {
      return;
    }

    this.inorder(node.left);
    console.log(node.data)
    this.inorder(node.right)
  }

  postorder(node) {
    if (node === null) {
      return;
    }

    console.log(node.data);
    this.postorder(node.left);
    this.postorder(node.right);
  }
}

const tree = new BinaryTree();

tree.root = new Node(4);
tree.root.left = new Node(2);
tree.root.right = new Node(6);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(3);
tree.root.right.left = new Node(5);
tree.root.right.right = new Node(7);

// tree.preorder(tree.root)
// tree.inorder(tree.root);
tree.postorder(tree.root);