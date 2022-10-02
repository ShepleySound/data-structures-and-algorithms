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

  xtest('Insert 5 integers, each at the back of the linked list.', () => {
    const newList = new LinkedList();
    newList.insertAtBack(1);
    newList.insertAtBack(2);
    newList.insertAtBack(3);
    newList.insertAtBack(4);
    newList.insertAtBack(5);
    expect(newList.traverseToEnd().data).toEqual(5);
    expect(newList.toString())
      .toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> NULL');
  });

});

xdescribe('Test insertion methods', () => {
  const list = new LinkedList();
  test('Search methods return null on empty linked list', () => {
    expect(list.getNodeBefore(1)).toBeNull();
    expect(list.getNode(1)).toBeNull();
  });
  test('Insert some test nodes', () => {
    list.insertAtFront(1);
    list.insertAtFront(2);
    list.insertAtFront(4);
    list.insertAtFront(5);
    expect(list.toString())
      .toEqual('{ 5 } -> { 4 } -> { 2 } -> { 1 } -> NULL');
  });

  test('Insert a new node before the node with data: 2', () => {
    list.insertBefore(2, 3);
    expect(list.includes(3)).toEqual(true);
    expect(list.toString())
      .toEqual('{ 5 } -> { 4 } -> { 3 } -> { 2 } -> { 1 } -> NULL');
  });

  test('Insert a new node after the node with data: 3', () => {
    list.insertAfter(3, 10);
    expect(list.includes(10)).toEqual(true);
    expect(list.toString())
      .toEqual('{ 5 } -> { 4 } -> { 3 } -> { 10 } -> { 2 } -> { 1 } -> NULL');
  });

  test('Insert a new node before the head node', () => {
    list.insertBefore(5, 500);
    expect(list.includes(500)).toEqual(true);
    expect(list.toString())
      .toEqual('{ 500 } -> { 5 } -> { 4 } -> { 3 } -> { 10 } -> { 2 } -> { 1 } -> NULL');
  });

  test('Insert a new node after the last node', () => {
    list.insertAfter(1, 1000);
    expect(list.includes(1000)).toEqual(true);
    expect(list.toString())
      .toEqual('{ 500 } -> { 5 } -> { 4 } -> { 3 } -> { 10 } -> { 2 } -> { 1 } -> { 1000 } -> NULL');
  });

  test('Fail to get a node that does not exist', () => {
    expect(list.getNodeBefore(404)).toBeNull();
  });

  test('Fail to get a node that only exists as the head node using the getNodeBefore method', () => {
    expect(list.getNodeBefore(500)).toBeNull();
  });

  test('Fail to insert a node before a non-existant node', () => {
    expect(list.insertBefore(404)).toBeNull();
  });

  test('Fail to insert a node after a non-existant node', () => {
    expect(list.insertAfter(404)).toBeNull();
  });
});

xdescribe('Find the length of the linked list', () => {
  const list = new LinkedList();
  test('Empty list should return 0', () => {
    expect(list.getLength()).toEqual(0);
  });

  test('List with 1 element should return 1', () => {
    list.insertAtFront(1);
    expect(list.getLength()).toEqual(1);
  });

  test('List with 5 elements should return 5', () => {
    list.insertAtFront(2);
    list.insertAtFront(3);
    list.insertAtFront(4);
    list.insertAtFront(5);
    expect(list.getLength()).toEqual(5);
  });
});

xdescribe('Test finding an element k from the end', () => {
  const list = new LinkedList();
  test('k should be a positive integer', () => {
    expect(list.findFromEnd(-1)).toBeNull();
  });

  test('k should not be larger than (length - 1) of the linked list', () => {
    expect(list.getLength()).toEqual(0);
    expect(list.findFromEnd(5)).toBeNull();
    list.insertAtFront(1);
    list.insertAtFront(2);
    list.insertAtFront(3);
    list.insertAtFront(4);
    list.insertAtFront(5);
    expect(list.findFromEnd(5)).toBeNull();
    expect(list.findFromEnd(8)).toBeNull();
  });
 
  test('If valid, k should return the data property of a node in the linked list', () => {
    expect(list.findFromEnd(0)).toEqual(1);
    expect(list.findFromEnd(1)).toEqual(2);
    expect(list.findFromEnd(2)).toEqual(3);
    list.insertAtFront(100);
    expect(list.findFromEnd(0)).toEqual(1);
    list.insertAtBack(5001);
    expect(list.findFromEnd(0)).toEqual(5001);
  });

  test('Should work on a linked list of size 1', () => {
    const listTwo = new LinkedList();
    listTwo.insertAtFront(2005);
    expect(listTwo.findFromEnd(0)).toEqual(2005);
  });

  test('Should not work on a linked list of size 0', () => {
    const listThree = new LinkedList();
    expect(listThree.findFromEnd(0)).toBeNull;
  });

});
