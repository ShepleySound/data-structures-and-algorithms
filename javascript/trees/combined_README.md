## Classes

<dl>
<dt><a href="#Node">Node</a></dt>
<dd><p>Defines a node for a binary tree structure.</p>
</dd>
<dt><a href="#BinaryTree">BinaryTree</a></dt>
<dd><p>Defines a binary tree data structure. It is aware of the root node, even when empty.</p>
</dd>
<dt><a href="#BinarySearchTree">BinarySearchTree</a></dt>
<dd><p>Extends the <a href="#BinaryTree">BinaryTree</a> class with methods specific to Binary Search Trees.</p>
</dd>
<dt><a href="#Tree">Tree</a></dt>
<dd><p>Defines an m-ary tree</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#fizzBuzz">fizzBuzz(input)</a> ⇒</dt>
<dd><p>Performs the FizzBuzz algorithm on a single input.</p>
</dd>
<dt><a href="#callbackTree">callbackTree(tree, callback)</a> ⇒</dt>
<dd><p>Traverses through an m-ary tree and creates a deep copy of each of its nodes. Creates a copy of the tree during traversal, altering each of the new nodes&#39; values with the provided callback function.</p>
</dd>
</dl>

<a name="Node"></a>

## Node
Defines a node for a binary tree structure.

**Kind**: global class  
<a name="BinaryTree"></a>

## BinaryTree
Defines a binary tree data structure. It is aware of the root node, even when empty.

**Kind**: global class  

* [BinaryTree](#BinaryTree)
    * [new BinaryTree()](#new_BinaryTree_new)
    * [.iterativeInsert(value)](#BinaryTree+iterativeInsert)
    * [.preorderRecursive([node])](#BinaryTree+preorderRecursive) ⇒
    * [.inorderRecursive()](#BinaryTree+inorderRecursive) ⇒
    * [.postorderRecursive()](#BinaryTree+postorderRecursive) ⇒
    * [.inorderIterative()](#BinaryTree+inorderIterative) ⇒
    * [.findMax()](#BinaryTree+findMax) ⇒

<a name="new_BinaryTree_new"></a>

### new BinaryTree()
Create a binary tree. Empty when instantiated.

<a name="BinaryTree+iterativeInsert"></a>

### binaryTree.iterativeInsert(value)
Inserts a new node into the tree in level-order such that the tree remains balanced, but not necessarily sorted.

**Kind**: instance method of [<code>BinaryTree</code>](#BinaryTree)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The number that the created node should hold. |

<a name="BinaryTree+preorderRecursive"></a>

### binaryTree.preorderRecursive([node]) ⇒
Preorder traversal of the binary tree using a recursive function.
Pushes each value to a holding array.

**Kind**: instance method of [<code>BinaryTree</code>](#BinaryTree)  
**Returns**: An array that holds the values in order of traversal.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [node] | [<code>Node</code>](#Node) | <code>this.root</code> | The node to perform the check on. Defaults to the root of the tree. |

<a name="BinaryTree+inorderRecursive"></a>

### binaryTree.inorderRecursive() ⇒
Inorder traversal of the binary tree using a recursive function.
Pushes each value to a holding array.

**Kind**: instance method of [<code>BinaryTree</code>](#BinaryTree)  
**Returns**: An array that holds the values in order of traversal.  
<a name="BinaryTree+postorderRecursive"></a>

### binaryTree.postorderRecursive() ⇒
Postorder traversal of the binary tree using a recursive function.
Pushes each value to a holding array.

**Kind**: instance method of [<code>BinaryTree</code>](#BinaryTree)  
**Returns**: An array that holds the values in order of traversal.  
<a name="BinaryTree+inorderIterative"></a>

### binaryTree.inorderIterative() ⇒
Inorder traversal of the binary tree using a stack and iterative function.
Pushes each value to a holding array.

**Kind**: instance method of [<code>BinaryTree</code>](#BinaryTree)  
**Returns**: An array that holds the values in order of traversal.  
<a name="BinaryTree+findMax"></a>

### binaryTree.findMax() ⇒
Using preorder traversal, finds the max value in a binary tree.

**Kind**: instance method of [<code>BinaryTree</code>](#BinaryTree)  
**Returns**: the maximum value present in the tree, or null if the tree is empty.  
<a name="BinarySearchTree"></a>

## BinarySearchTree
Extends the [BinaryTree](#BinaryTree) class with methods specific to Binary Search Trees.

**Kind**: global class  

* [BinarySearchTree](#BinarySearchTree)
    * [.iterativeInsert(value)](#BinarySearchTree+iterativeInsert)
    * [.iterativeContains(value)](#BinarySearchTree+iterativeContains) ⇒ <code>Boolean</code>
    * [.recursiveContains(value, [node])](#BinarySearchTree+recursiveContains) ⇒ <code>Boolean</code>

<a name="BinarySearchTree+iterativeInsert"></a>

### binarySearchTree.iterativeInsert(value)
Inserts a new node into the tree, such that the tree will be ordered, but not necessarily balanced.

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The number that the created node should hold. |

<a name="BinarySearchTree+iterativeContains"></a>

### binarySearchTree.iterativeContains(value) ⇒ <code>Boolean</code>
Uses the assumed structure of a binary search tree to search for a value in an iterative manner.

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)  
**Returns**: <code>Boolean</code> - true if the value exists in the tree, false if it does not exist.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The numeric value to search for within the tree. |

<a name="BinarySearchTree+recursiveContains"></a>

### binarySearchTree.recursiveContains(value, [node]) ⇒ <code>Boolean</code>
Uses the assumed structure of a binary search tree to search for a value in a recursive manner.

**Kind**: instance method of [<code>BinarySearchTree</code>](#BinarySearchTree)  
**Returns**: <code>Boolean</code> - true if the value exists in the tree, false if it does not exist.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>number</code> |  | The numeric value to search for within the tree. |
| [node] | [<code>Node</code>](#Node) | <code>this.root</code> | The node to perform the check on. Defaults to the root of the tree. |

<a name="Tree"></a>

## Tree
Defines an m-ary tree

**Kind**: global class  

* [Tree](#Tree)
    * [new Tree(maxMChildren)](#new_Tree_new)
    * [.iterativeInsert(value)](#Tree+iterativeInsert)
    * [.preorderRecursive([node])](#Tree+preorderRecursive) ⇒

<a name="new_Tree_new"></a>

### new Tree(maxMChildren)
Create an m-ary tree.


| Param | Type | Description |
| --- | --- | --- |
| maxMChildren | <code>number</code> | Defines "m", which is the number of children nodes that each node in the tree is allowed to contain. |

<a name="Tree+iterativeInsert"></a>

### tree.iterativeInsert(value)
Inserts a new node into the tree in level-order such that the tree remains balanced, but not necessarily sorted.

**Kind**: instance method of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The number that the created node should hold. |

<a name="Tree+preorderRecursive"></a>

### tree.preorderRecursive([node]) ⇒
Preorder traversal of the tree using a recursive function.
Pushes each value to a holding array.

**Kind**: instance method of [<code>Tree</code>](#Tree)  
**Returns**: An array that holds the values in order of traversal.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [node] | [<code>Node</code>](#Node) | <code>this.root</code> | The node to perform the check on. Defaults to the root of the tree. |

<a name="fizzBuzz"></a>

## fizzBuzz(input) ⇒
Performs the FizzBuzz algorithm on a single input.

**Kind**: global function  
**Returns**: Whatever was entered in string format, or the appropriate "FizzBuzz" string if the input was able to be parsed to an integer and was divisible by either 3 or 5.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>int</code> \| <code>string</code> | The input to perform the FizzBuzz algorithm on. Will attempt to parse a string to an integer. |

<a name="callbackTree"></a>

## callbackTree(tree, callback) ⇒
Traverses through an m-ary tree and creates a deep copy of each of its nodes. Creates a copy of the tree during traversal, altering each of the new nodes' values with the provided callback function.

**Kind**: global function  
**Returns**: A deep copy of the tree.  

| Param | Type | Description |
| --- | --- | --- |
| tree | [<code>Tree</code>](#Tree) | An m-ary tree structure. The callback will be performed on each of its nodes. |
| callback | <code>function</code> | The callback function that should change the value of each of the nodes. |

