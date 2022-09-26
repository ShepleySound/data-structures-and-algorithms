# Doubly Linked List Implementation

<!-- Description of the challenge -->

## Challenge

Implement a doubly linked list data structure using JavaScript.

### Features

#### Node

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

#### Doubly Linked List

- Create a Doubly Linked List class
- Within your Linked List class, include a head property.
Upon instantiation, an empty Doubly Linked List should be created.

## Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->
The Node and Doubly Linked List are implemented using ES6 Classes. Insertion is implemented both at the front of the list and at the back, depending on the method called. Much of the implementation is similar to the [linked list](../linked-list) data structure.

Inserting a new node to the front of the list happens in O(1) time, since there's no reliance on the size of the list itself. However, inserting to the back of the list takes O(n) time, since it requires iterating through the entire structure until the traversal returns `null`.

Unlike the [linked list](../linked-list), a doubly linked list gives each of its nodes a "previous" pointer (implemented as a class property, which ends up being a reference to another node, in this case). The benefits of this depend on the specific problem being solved and the exact implementation, but it allows us to move backwards through a linked list as well as forwards. In other words, if a reference to a particular node is already known, we could find the nodes on either side of it.
