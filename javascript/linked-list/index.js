'use strict';

class Node {
  constructor(data, next, previous) {
    this.data = data;
    this.next = next ?? null;
    this.previous = previous ?? null;
  }
}

class LinkedList {
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
      this.head = new Node(data, this.head);
    }
  }

  insertAtBack(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let current = this.traverseToEnd();
      current.next = new Node(data);
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
}

module.exports = LinkedList;
