'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  const list = new LinkedList();
  test('Null when initialized', () => {
    expect(list.traverseToEnd()).toBeNull();
    expect(list.getNode()).toBeNull();
    expect(list.includes(5)).toEqual(false);
    expect(list.toString()).toEqual('NULL');
  });

  test('Insert an integer', () => {
    list.insertAtFront(5);
    expect(list.traverseToEnd().data).toEqual(5);
    expect(list.toString()).toEqual('{ 5 } -> NULL');
  });

  test('includes() returns true if a value exists', () => {
    expect(list.includes(5)).toEqual(true);
  });

  test('includes() returns false if a value does not exist', () => {
    expect(list.includes(5000)).toEqual(false);
  });

  test('Head property returns the first inserted value.', () => {
    expect(list.head.data).toEqual(5);
  });

  test('Insert 5 integers, each at the front of the linked list.', () => {
    const newList = new LinkedList();
    newList.insertAtFront(1);
    newList.insertAtFront(2);
    newList.insertAtFront(3);
    newList.insertAtFront(4);
    newList.insertAtFront(5);
    expect(newList.traverseToEnd().data).toEqual(1);
    expect(newList.toString())
      .toEqual('{ 5 } -> { 4 } -> { 3 } -> { 2 } -> { 1 } -> NULL');
  });

  test('Insert 5 integers, each at the back of the linked list.', () => {
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

describe('Test insertion methods', () => {
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

describe('Find the length of the linked list', () => {
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

describe('Test finding an element k from the end', () => {
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
