'use strict';

/**
 * Class represting a node.
 */
class Node {
  /**
   * Create a node.
   * @param {*} data - Contains data for the node.
   * @param {Node} next - A pointer to the next node.
   */
  constructor(data, next) {
    this.data = data;
    this.next = next ?? null;
  }
}

/**
 * Class representing a stack. It is aware of its `top` property, even when empty.
 */
class Stack {
  /**
   * Create a stack. The stack is empty when instantiated.
   */
  constructor() {
    this.top = null;
  }

  /**
   * Push a new {@link Node}.
   * @param {*} data - Data for the new {@link Node} to contain.
   */
  push(data) {
    const temp = this.top;
    this.top = new Node(data, temp);
  }

  /**
   * Removes the node that exists at the top of the stack.
   * @returns data from the popped {@link Node}.
   * @throws Will throw an error if the stack is empty.
   */
  pop() {
    if (this.top) {
      const temp = this.top.data;
      this.top = this.top.next;
      return temp;
    } else throw new Error('Cannot pop data from empty stack.');
  }

  /**
   * Returns the data from the top node of the stack.
   * @returns data from the node at the top of the stack.
   * @throws Will throw an error if the stack is empty.
   */
  peek() {
    if (this.top) {
      return this.top.data;
    } else throw new Error('No data available in empty stack.');
  }

  /**
   * Checks to see if the stack is empty by checking its top property.
   * @returns {boolean} If the stack is empty, return true. If the stack contains any nodes, return false.
   */
  isEmpty() {
    if (this.top) {
      return false;
    } else return true;
  }
}

/**
 * Class representing a queue. It is aware of its `front` and `back` properties, even when empty.
 */
class Queue {
  /**
   * Create a queue. The queue is empty when instantiated.
   */
  constructor() {
    this.front = null;
    this.back = null;
  }

  /**
   * create a new {@link Node} at the back of the queue.
   * @param {*} data - Data for the new {@link Node} to contain.
   */
  enqueue(data) {
    if(this.back) {
      this.back.next = new Node(data);
      this.back = this.back.next;
    } else {
      // Set both front and back to new node
      this.front = this.back = new Node(data);
    }
  }

  /**
   * Removes the node that exists at the front of the queue.
   * @returns data from the dequeued {@link Node}.
   * @throws Will throw an error if the stack is empty.
   */
  dequeue() {
    if (this.front) {
      if (this.front === this.back) {
        // Set both front and back to null
        return this.front = this.back = null;
      }
      const temp = this.front.data;
      this.front = this.front.next;
      return temp;
    } else throw new Error('Cannot dequeue data from empty queue.');
  }

  /**
   * Returns the data from the front node of the queue.
   * @returns data from the node at the front of the queue.
   * @throws Will throw an error if the queue is empty.
   */
  peek() {
    if (this.front) {
      return this.front.data;
    } else throw new Error('No data available in empty queue.');
  }

  /**
   * Checks to see if the queue is empty by checking its front property.
   * @returns {boolean} If the queue is empty, return true. If the queue contains any nodes, return false.
   */
  isEmpty() {
    if (this.front) {
      return false;
    } else return true;
  }
}

/**
 * A class reprenting a stack which can return a null value from its peek() method.
 * @extends Stack
 */
class NullableStack extends Stack {
  peek() {
    if (this.top) {
      return this.top.data;
    } else return null;
  }
}

/**
 * Class representing a "pseudo-queue". Implemented using two simultaneous instances of {@link NullableStack}.
 */
class PseudoQueue {
  /**
   * Create a pseudo-queue. The queue contains two empty instances of {@link NullableStack} when instantiated
   */
  constructor() {
    this.pushStack = new NullableStack();
    this.pullStack = new NullableStack();
  }

  /**
   * create a new {@link Node} at the back of the queue.
   * @param {*} data - Data for the new {@link Node} to contain.
   */
  enqueue(data) {
    this.pushStack.push(data);
  }

  /**
   * Removes the node that exists at the front of the queue.
   * @returns data from the dequeued {@link Node}.
   * @throws Will throw an error if the stack is empty.
   */
  dequeue() {
    if (this.pullStack.peek() === null) {
      while (this.pushStack.peek() !== null) {
        const popped = this.pushStack.pop();
        this.pullStack.push(popped);
      }
    }
    if (this.pullStack.peek() !== null) {
      return this.pullStack.pop();
    } else throw new Error('Cannot dequeue from an empty queue.');
  }

  /**
   * Returns the data from the front node of the queue.
   * @returns data from the node at the front of the queue.
   * @throws Will throw an error if the queue is empty.
   */
  peek() {
    if (this.pullStack.peek() === null) {
      while (this.pushStack.peek() !== null) {
        const popped = this.pushStack.pop();
        this.pullStack.push(popped);
      }
    }
    if (this.pullStack.peek() !== null) {
      return this.pullStack.peek();
    } else throw new Error('Cannot peek at an empty queue.');
  }

  /**
   * Checks to see if the queue is empty by checking its front property.
   * @returns {boolean} If the queue is empty, return true. If the queue contains any nodes, return false.
   */
  isEmpty() {
    if (this.pullStack.peek() === null && this.pushStack.peek() === null) {
      return true;
    } else return false;
  }
}

const pseudo = new PseudoQueue();

pseudo.enqueue(1);
pseudo.enqueue(2);
pseudo.enqueue(3);
pseudo.enqueue(4);
pseudo.enqueue(5);
console.log(pseudo.dequeue());
console.log(pseudo.dequeue());
console.log(pseudo.dequeue());
console.log(pseudo.dequeue());
console.log(pseudo.dequeue());

module.exports = { Stack, Queue, PseudoQueue };
