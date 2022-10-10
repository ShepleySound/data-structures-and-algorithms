const { BinaryTree, Node } = require('../index');

describe('Manual insertion test', () => {
  const tree = new BinaryTree();
  test('Tree is empty on instantiating', () => {
    expect(tree.root).toBeNull();
  });

  test('Root has a value when a new Node is instantiated on it', () => {
    tree.root = new Node(4);
    expect(tree.root.value).toEqual(4);
  });

  test('Multiple nodes can be added to the tree by referencing Node properties', () => {
    tree.root.left = new Node(2);
    tree.root.right = new Node(6);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(3);
    tree.root.right.left = new Node(5);
    tree.root.right.right = new Node(7);

    expect(tree.root.left.left.value).toEqual(1);
  });

  test('Test recursive inorder traversal', () => {
    expect(tree.inorderRecursive()).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('Test recursive preorder traversal', () => {
    expect(tree.preorderRecursive()).toEqual([4, 2, 1, 3, 6, 5, 7]);
  });

  test('Test recursive postorder traversal', () => {
    expect(tree.postorderRecursive()).toEqual([1, 3, 2, 5, 7, 6, 4]);
  });

  test('Test findMax algorithm', () => {
    expect(tree.findMax()).toEqual(7);
    tree.root.right.left.right = new Node(200);
    expect(tree.findMax()).toEqual(200);
    tree.root.right.right.right = new Node(-1000);
    expect(tree.findMax()).toEqual(200);
  });
  

});
