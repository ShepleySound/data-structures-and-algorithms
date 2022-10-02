# Stack/Queue Implementation
<!-- Description of the challenge -->

## Challenge

Implement both a `Stack` and a `Queue` using a `Linked List` as the underlying data structure.

### Features

#### Node

- A `Node` class that has properties for the value stored in the node and a pointer to the next node.

#### Stack

- A `Stack` class. The stack is empty when instantiated.
  - The stack is aware of its `top` property, even when empty.

- The Stack implements the 

#### Queue

- A `Queue` class. The queue is empty when instantiated.
  - The queue is aware of its `front` and `back` properties, even when empty.

## Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->
The Node and Linked List are implemented using ES6 Classes. Insertion is implemented both at the front of the list and at the back, depending on the method called. Inserting a new node to the front of the list happens in O(1) time, since there's no reliance on the size of the list itself. However, inserting to the back of the list takes O(n) time, since it requires iterating through the entire structure until the traversal returns `null`.
