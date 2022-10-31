'use strict';

const HashTable = require('../index');

describe('Test hashtable initialization', () => {

  test('Passing in a value to the constructor sets the initial number of buckets', () => {
    const testOne = new HashTable(10);
    expect(testOne.buckets.length).toEqual(10);
    const testTwo = new HashTable(500);
    expect(testTwo.buckets.length).toEqual(500);
  });

  test('If not defined, the initial number of buckets is 100.', () => {
    const testOne = new HashTable();
    expect(testOne.buckets.length).toEqual(100);
  });

  test('Initial size should be 0', () => {
    const testOne = new HashTable();
    expect(testOne.size).toEqual(0);
  });
});
