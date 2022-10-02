'use strict';

const { Stack } = require('../index');

describe('Stack', () => {
  const stack = new Stack();
  const emptyStack = new Stack();
  test('Null when initialized', () => {
    expect(stack.top).toBeNull();
    // expect(stack.traverseToEnd()).toBeNull();
    // expect(stack.getNode()).toBeNull();
    // expect(stack.includes(5)).toEqual(false);
    // expect(stack.toString()).toEqual('NULL');
  });

  test('Push data to the top of the stack', () => {
    stack.push(1);
    expect(stack.top.data).toEqual(1);
    stack.push(2);
    expect(stack.top.data).toEqual(2);
    stack.push(3);
    expect(stack.top.data).toEqual(3);
    stack.push(4);
    expect(stack.top.data).toEqual(4);
    stack.push(5);
    expect(stack.top.data).toEqual(5);
  });

  test('Top property returns the last inserted node.', () => {
    expect(stack.top.data).toEqual(5);
  });

  test('Pop off the stack', () => {
    expect(stack.pop()).toEqual(5);
    expect(stack.top.data).toEqual(4);
    expect(stack.pop()).toEqual(4);
    expect(stack.top.data).toEqual(3);
  });

  test('Error when popping off empty stack', () => {
    expect(() => {
      emptyStack.pop();
    }).toThrow();
  });

  test('Peek at the top of the stack', () => {
    expect(stack.peek()).toEqual(3);
    stack.push(4);
    expect(stack.peek()).toEqual(4);
  });

  test('Error when peeking at empty stack', () => {
    expect(() => {
      emptyStack.peek();
    }).toThrow();
  });

  test('Removing all data from the stack should result in an empty stack', () => {
    // Add 3 things to the stack
    emptyStack.push(1);
    emptyStack.push(2);
    emptyStack.push(3);
    // Pop all 3 things off the stack
    emptyStack.pop();
    emptyStack.pop();
    emptyStack.pop();
    // Stack should be empty
    expect(() => {
      emptyStack.peek();
    }).toThrow();
  });

  test('isEmpty returns false if any data exists in the stack', () => {
    expect(stack.isEmpty()).toEqual(false);
  });

  test('isEmpty returns true if no data exists in the stack', () => {
    expect(emptyStack.isEmpty()).toEqual(true);
  });

});
