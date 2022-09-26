'use strict';

// Require our linked list implementation
const DoublyLinkedList = require('../index');

describe('Doubly Linked List', () => {
  const list = new DoublyLinkedList();
  test('Null when initialized', () => {
    expect(list.traverseToEnd()).toBeNull();
    expect(list.includes(5)).toEqual(false);
    expect(list.toString()).toEqual('NULL');
  });

  test('Insert an integer', () => {
    list.insertAtFront(5);
    expect(list.traverseToEnd().data).toEqual(5);
    expect(list.toString()).toEqual('{ 5 } <-> NULL');
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
    const newList = new DoublyLinkedList();
    newList.insertAtFront(1);
    newList.insertAtFront(2);
    newList.insertAtFront(3);
    newList.insertAtFront(4);
    newList.insertAtFront(5);
    expect(newList.traverseToEnd().data).toEqual(1);
    expect(newList.toString())
      .toEqual('{ 5 } <-> { 4 } <-> { 3 } <-> { 2 } <-> { 1 } <-> NULL');
  });

  test('Insert 5 integers, each at the back of the linked list.', () => {
    const newList = new DoublyLinkedList();
    newList.insertAtBack(1);
    newList.insertAtBack(2);
    newList.insertAtBack(3);
    newList.insertAtBack(4);
    newList.insertAtBack(5);
    expect(newList.traverseToEnd().data).toEqual(5);
    expect(newList.toString())
      .toEqual('{ 1 } <-> { 2 } <-> { 3 } <-> { 4 } <-> { 5 } <-> NULL');
  });

  test('Get a node inside the linked list', () => {
    const newList = new DoublyLinkedList();
    expect(newList.getNode(4)).toBeNull();
    newList.insertAtFront(1);
    newList.insertAtFront(2);
    newList.insertAtFront(3);
    newList.insertAtFront(4);
    newList.insertAtFront(5);
    expect(newList.traverseToEnd().data).toEqual(1);
    expect(newList.getNode(8)).toBeNull();
    expect(newList.getNode(4).data).toEqual(4);
  });

  test('Get a previous node using a known node', () => {
    const newList = new DoublyLinkedList();
    expect(newList.getNode(4)).toBeNull();
    newList.insertAtFront(1);
    newList.insertAtFront(2);
    newList.insertAtFront(3);
    newList.insertAtFront(4);
    newList.insertAtFront(5);
    const knownNode = newList.getNode(3);
    expect(newList.getPreviousNode(knownNode).data).toEqual(4);
  });
});

