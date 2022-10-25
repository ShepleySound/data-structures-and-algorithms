'use strict';

// Require our linked list implementation
const insertionSort = require('../index');

describe('Test in-place sorting algorithm', () => {
  test('Sort an unordered array', () => {
    const arr = [8, 4, 23, 42, 16, 15];
    insertionSort(arr);
    expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
  });

  test('Sort an unordered array with duplicate values', () => {
    const arr = [5, 12, 7, 5, 5, 7];
    insertionSort(arr);
    expect(arr).toEqual([5, 5, 5, 7, 7, 12]);
  });

  test('Sort a reverse-sorted array', () => {
    const arr = [20, 18, 12, 8, 5, -2];
    insertionSort(arr);
    expect(arr).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  test('Sort a nearly-sorted array', () => {
    const arr = [2, 3, 5, 7, 13, 11];
    insertionSort(arr);
    expect(arr).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
