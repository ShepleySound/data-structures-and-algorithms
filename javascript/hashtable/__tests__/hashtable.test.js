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

describe('Test hashtable methods', () => {
  
  test('Add and retrieve items', () => {
    const hashtable = new HashTable(100);
    hashtable.set('hello', 'world');
    hashtable.set('tt', 'ttvalue');
    hashtable.set('abc', 'def');
    hashtable.set(123, 456);

    expect(hashtable.get('hello')).toEqual('world');
    expect(hashtable.get('tt')).toEqual('ttvalue');
    expect(hashtable.get('abc')).toEqual('def');
    expect(hashtable.get(123)).toEqual(456);
  });

  test('Hash table implementation is not type-safe', () => {
    const hashtable = new HashTable(100);
    hashtable.set('123', true);
    expect(hashtable.get('123')).toEqual(true);
    hashtable.set(123, false);
    expect(hashtable.get('123')).toEqual(false);

  })

})
