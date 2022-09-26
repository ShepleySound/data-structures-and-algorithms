'use strict';

class Node {
  constructor(data, next = null, previous = null) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  traverseToEnd() {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      return current;
    } else return null;
  }

  insertAtFront(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      const oldHead = this.head;
      this.head = new Node(data, oldHead);
      oldHead.previous = this.head;
    }
  }

  insertAtBack(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let current = this.traverseToEnd();
      current.next = new Node(data, null, current);
    }
  }

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

  getNode(data) {
    if (this.head) {
      let current = this.head;
      while (current) {
        if (current.data === data) {
          return current;
        }
        current = current.next;
      }
    }
    return null;
  }

  getPreviousNode(node) {
    return node.previous;
  }

  toString() {
    if (this.head) {
      let current = this.head;
      let string = '';
      while (current) {
        string += `{ ${current.data} } <-> `;
        current = current.next;
      }
      string += 'NULL';
      return string;
    } else return 'NULL';
  }
}

module.exports = DoublyLinkedList;
