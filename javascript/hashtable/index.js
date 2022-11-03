'use strict';

const asciiHash = require('./ascii-hash');

/**
 * A hash table implementation that uses separate chaining for collisions.
 * When a bucket index is used to set a key:value pair, it creates an array to store the key:value pairs as objects.
 */
class HashTable {
  constructor(bucketCount = 100) {
    this.buckets = new Array(bucketCount);
    this.size = 0;
  }

  /**
   * @param {*} key - A key to be hashed and used as the unique key. If the key is found in a bucket, the value of the existing key is replaced.
   * @param {*} value - The value to associate with the key.
   */
  set(key, value) {
    const hashedKey = this.hash(key);
    if (!this.bucketHasItems(key)) {
      this.buckets[hashedKey] = [];
    }

    const bucketArray = this.buckets[hashedKey];
    let includesKey = false;
    for (let i = 0; i < bucketArray.length; i++) {
      if (bucketArray[i][key]) {
        bucketArray[i][key] = value;
        includesKey = true;
      }
    }
    if (!includesKey) {
      const itemPair = {};
      itemPair[key] = value;
      bucketArray.push(itemPair);
      this.size++;
    }
  }

  /**
   * @param {*} key - A unique key to look up in the hash table
   * @returns The value of an item in the hash table corresponding to the unique key. Returns null if the key does not exist.
   */
  get(key) {
    const hashedKey = this.hash(key);
    if (this.buckets[hashedKey]) {
      for (let item of this.buckets[hashedKey]) {
        if (item[key]) {
          return item[key];
        }
      }
    }
  }

  hash(key) {
    const rawHash = asciiHash(key);
    return rawHash % this.buckets.length;
  }

  /**
   * Returns true if the key hashes to a bucket that already contains items. Returns false if the bucket is empty.
   * @param {*} key
   * @returns {boolean}
   */
  bucketHasItems(key) {
    const hashedKey = this.hash(key);
    if (this.buckets[hashedKey]) {
      return true;
    } else return false;
  }

  /**
   * @returns The number of unique items in the hash table.
   */
  getSize() {
    return this.size;
  }

  /**
   *
   * @returns An array of all bucket indexes that contain items.
   */
  getHashedKeys() {
    return Object.keys(this.buckets);
  }

  /**
   * @returns An array of all unique keys in the hash table.
   */
  getRawKeys() {
    const keys = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let item of bucket) {
          keys.push(...Object.keys(item));
        }
      }
    }
    return keys;
  }

  /**
   * Passes each unique key in the hash table to the provided callback function.
   * @param {function} callback - A callback function that takes each key as a parameter
   */
  rawKeysCallback(callback) {
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let item of bucket) {
          callback(...Object.keys(item));
        }
      }
    }
  }
}

module.exports = HashTable;
