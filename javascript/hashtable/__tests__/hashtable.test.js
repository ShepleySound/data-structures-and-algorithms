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

describe('Test hash table methods', () => {

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

  test('Hash collisions are handled', () => {
    const hashtable = new HashTable(100);
    expect(hashtable.hash('hello')).toEqual(hashtable.hash('tt'));
    hashtable.set('hello', 'world');
    hashtable.set('tt', 'ttvalue');
    expect(hashtable.get('hello')).toEqual('world');
    expect(hashtable.get('tt')).toEqual('ttvalue');

  });

  test('Hash table implementation is not type-safe', () => {
    const hashtable = new HashTable(100);
    hashtable.set('123', 456);
    expect(hashtable.get('123')).toEqual(456);
    hashtable.set(123, 1000);
    expect(hashtable.get('123')).toEqual(1000);
  });

  test('Setting a key\'s value to false removes it from the hash table', () => {
    const hashtable = new HashTable(100);
    hashtable.set('123', true);
    expect(hashtable.get('123')).toEqual(true);
    hashtable.set('123', false);
    expect(hashtable.get('123')).toEqual(undefined);
  });

  test('Keys of type number are converted to strings', () => {
    const hashtable = new HashTable(100);
    hashtable.set('123', 'value');
    hashtable.set(444, 'value');
    expect(hashtable.get(123)).toEqual('value');
    expect(hashtable.get(444)).toEqual('value');
    expect(hashtable.get('444')).toEqual('value');
  });

  test('Get all unique keys in hash table', () => {
    const hashtable = new HashTable(100);
    hashtable.set('hello', 'world');
    hashtable.set('tt', 'ttvalue');
    hashtable.set('abc', 'def');
    hashtable.set(123, 456);
    expect(hashtable.getRawKeys()).toContain('hello');
    expect(hashtable.getRawKeys()).toContain('tt');
    expect(hashtable.getRawKeys()).toContain('abc');
    expect(hashtable.getRawKeys()).toContain('123');
  });

  test('Get number of unique items in a table', () => {
    const hashtable = new HashTable(100);
    hashtable.set('hello', 'world');
    hashtable.set('tt', 'ttvalue');
    hashtable.set('abc', 'def');
    hashtable.set(123, 456);
    expect(hashtable.getSize()).toEqual(4);
  });

  test('Get a list of buckets in use', () => {
    const hashtable = new HashTable(100);
    hashtable.set('hello', 'world');
    hashtable.set('tt', 'ttvalue');
    hashtable.set('abc', 'def');
    hashtable.set(123, 456);
    console.log(hashtable.getHashedKeys());
    expect(hashtable.getHashedKeys()).toContain('32');
    expect(hashtable.getHashedKeys()).toContain('50');
    expect(hashtable.getHashedKeys()).toContain('94');
  });

});
