# Linked List Implementation
<!-- Description of the challenge -->

## Challenge

Implement a linked list data structure using JavaScript.

### Features

#### Node

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

#### Linked List

- Create a Linked List class
- Within your Linked List class, include a head property.
Upon instantiation, an empty Linked List should be created.

## Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->
The Node and Linked List are implemented using ES6 Classes. Insertion is implemented both at the front of the list and at the back, depending on the method called. Inserting a new node to the front of the list happens in O(1) time, since there's no reliance on the size of the list itself. However, inserting to the back of the list takes O(n) time, since it requires iterating through the entire structure until the traversal returns `null`.
