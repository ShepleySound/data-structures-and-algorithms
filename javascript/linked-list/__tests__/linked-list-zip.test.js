'use strict';

const LinkedList = require('../index');
const zipTwoLists = require('../linked-list-zip');

describe('Linked List', () => {

  test('Zip two sorted lists.', () => {
    const LL1 = new LinkedList();
    const LL2 = new LinkedList();

    LL1.insertAtBack(1);
    LL1.insertAtBack(3);
    LL1.insertAtBack(5);
    LL1.insertAtBack(7);
    LL1.insertAtBack(9);
    LL2.insertAtBack(2);
    LL2.insertAtBack(4);
    LL2.insertAtBack(6);
    LL2.insertAtBack(8);
    LL2.insertAtBack(10);
    const zippedList = zipTwoLists(LL1, LL2);
    expect(zippedList.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 7 } -> { 8 } -> { 9 } -> { 10 } -> NULL');
  });

  test('Zip two unsorted lists.', () => {
    const LL1 = new LinkedList();
    const LL2 = new LinkedList();

    LL1.insertAtBack(500);
    LL1.insertAtBack(100);
    LL1.insertAtBack(55);
    LL1.insertAtBack(7);
    LL1.insertAtBack(9);
    LL2.insertAtBack(200);
    LL2.insertAtBack(404);
    LL2.insertAtBack(62);
    LL2.insertAtBack(82);
    LL2.insertAtBack(101);
    const zippedList = zipTwoLists(LL1, LL2);
    expect(zippedList.toString()).toEqual('{ 500 } -> { 200 } -> { 100 } -> { 404 } -> { 55 } -> { 62 } -> { 7 } -> { 82 } -> { 9 } -> { 101 } -> NULL');
  });

  test('Zip two lists of different lengths.', () => {
    const LL1 = new LinkedList();
    const LL2 = new LinkedList();

    LL1.insertAtBack(1);
    LL1.insertAtBack(3);
    LL2.insertAtBack(2);
    LL2.insertAtBack(4);
    LL2.insertAtBack(6);
    LL2.insertAtBack(8);
    LL2.insertAtBack(10);
    const zippedList = zipTwoLists(LL1, LL2);
    expect(zippedList.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 6 } -> { 8 } -> { 10 } -> NULL');
  });
});
