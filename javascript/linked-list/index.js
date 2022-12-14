'use strict';

/**
 * A class representing a node in a linked list.
 */
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next ?? null;
  }
}

/**
 * A class representing a singly linked list.
 */
class LinkedList {
  /**
   * Constructs a linked list with the head set to null.
   */
  constructor() {
    this.head = null;
  }

  /**
   *
   * @returns {Node} The final node in the linked list
   */
  traverseToEnd() {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      return current;
    } else return null;
  }

  /**
   * Retrieves a node from the linked list.
   * @param {*} data Matches the data property of a {@link Node} object.
   * @returns {(Node|null)} The first node that matches {@link data}
   *  OR null if the data is not found inside of any of the linked list's nodes.
   */
  getNode(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  /**
   * Retrieves a node from the linked list.
   * @param {*} data Matches the data property of a {@link Node} object.
   * @returns {(Node|null)} The node before the node that matches {@link data}. Returns null if the found node does not have a node preceding it, or if the node is not found at all.
   */
  getNodeBefore(data) {
    let current = this.head;
    while (current) {
      if (current.next?.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  /**
   * Inserts a new node before the first node that contains the search value.
   * @param {*} searchValue The value to search for within the linked list.
   *  The new node will be placed before this node.
   * @param {*} data Defines the data to be placed within the inserted node.
   * @returns {(Node|null)} the newly created node OR null if the node parameter is falsy.
   */
  insertBefore(searchValue, data) {
    if (this.head.data === searchValue) {
      this.insertAtFront(data);
    } else {
      const searchedNode = this.getNodeBefore(searchValue);
      if (searchedNode) {
        // Creates a new node and sets the referenced node as its next property.
        const nextNode = searchedNode.next;
        const newNode = new Node(data, nextNode);
        return (searchedNode.next = newNode);
      } else return null;
    }
  }

  /**
   * Inserts a new node after the first node that contains the search value.
   * @param {*} searchValue The value to search for within the linked list.
   *  The new node will be placed after this node.
   * @param {*} data Defines the data to be placed within the inserted node.
   * @returns {(Node|null)} the newly created node OR null if the node parameter is falsy.
   */
  insertAfter(searchValue, data) {
    const searchedNode = this.getNode(searchValue);
    if (searchedNode) {
      // Creates a new node and sets the referenced node as its next property.
      const oldNextNode = searchedNode.next;
      searchedNode.next = new Node(data, oldNextNode);
      return searchedNode.next;
    } else return null;
  }

  /**
   * Inserts a new node at the front of the linked list.
   * @param {*} data Defines the data to be placed within the inserted node.
   */
  insertAtFront(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      this.head = new Node(data, this.head);
    }
  }

  /**
   * Inserts a new node at the back of the linked list.
   * @param {*} data Defines the data to be placed within the inserted node.
   */
  insertAtBack(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let current = this.traverseToEnd();
      current.next = new Node(data);
    }
  }

  /**
   *
   * @param {*} data The data value of a {@link Node} to be searched for
   * @returns {boolean} true if the value is found within the link list, false if the value is not found.
   */
  includes(data) {
    if (this.head) {
      let current = this.head;
      while (current) {
        if (current.data === data) {
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }

  toString() {
    if (this.head) {
      let current = this.head;
      let string = '';
      while (current) {
        string += `{ ${current.data} } -> `;
        current = current.next;
      }
      string += 'NULL';
      return string;
    } else return 'NULL';
  }

  getLength() {
    let length = 0;
    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }
    return length;
  }

  findFromEnd(k) {
    const endIndex = this.getLength() - 1;
    const kIndex = endIndex - k;
    if (kIndex < 0 || k < 0) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (current && counter < kIndex) {
      counter++;
      current = current.next;
    }
    return current.data;
  }
}

module.exports = LinkedList;
