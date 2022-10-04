'use strict';

const { PseudoQueue } = require('../index');

describe('Queue', () => {
  const queue = new PseudoQueue();
  const emptyQueue = new PseudoQueue();
  test('Internal stacks are null when initialized', () => {
    expect(queue.pushStack.top).toBeNull();
    expect(queue.pullStack.top).toBeNull();
  });

  test('Enqueue places nodes at the back of the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.peek()).toEqual(1);
  });

  test('Dequeue removes data from the front', () => {
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
  });

  test('Error when attempting to dequeue from empty queue', () => {
    expect(() => {
      emptyQueue.dequeue();
    }).toThrow();
  });

  test('Peek at the front of the queue', () => {
    expect(queue.peek()).toEqual(3);
    queue.enqueue(4);
    expect(queue.peek()).toEqual(3);
  });

  test('Error when peeking at empty queue', () => {
    expect(() => {
      emptyQueue.peek();
    }).toThrow();
  });

  test('Removing all data from the queue should result in an empty queue', () => {
    // Add 3 things to the queue
    emptyQueue.enqueue(1);
    emptyQueue.enqueue(2);
    emptyQueue.enqueue(3);
    // Pop all 3 things off the queue
    emptyQueue.dequeue();
    emptyQueue.dequeue();
    emptyQueue.dequeue();
    // Queue should be empty
    expect(() => {
      emptyQueue.peek();
    }).toThrow();
    // Both the front and back properties should be null
    expect(emptyQueue.isEmpty()).toEqual(true);

  });

  test('isEmpty returns false if any data exists in the queue', () => {
    expect(queue.isEmpty()).toEqual(false);
  });

  test('isEmpty returns true if no data exists in the queue', () => {
    expect(emptyQueue.isEmpty()).toEqual(true);
  });
});
