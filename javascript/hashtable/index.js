'use strict';

const asciiHash = require('./ascii-hash');

class HashTable {
  constructor(bucketCount = 100) {
    this.buckets = new Array(bucketCount);
    this.size = 0;
  }

  set(key, value) {
    const hashedKey = this.hash(key);
    if (!this.hasKey(key)) {
      this.size++;
    }
    this.buckets[hashedKey] = value;
  }

  get(key) {
    const hashedKey = this.hash(key);
    if (this.buckets[hashedKey]) {
      return this.buckets[hashedKey];
    } else return null;
  }

  hash(key) {
    const rawHash = asciiHash(key);
    return rawHash % this.buckets.length;
  }

  hasKey(key) {
    const hashedKey = this.hash(key);
    if (this.buckets[hashedKey]) {
      return true;
    } else return false;
  }

  getSize() {
    return this.size;
  }

  getHashedKeys() {
    return this.buckets;
  }
}

const hashmap = new HashTable(100);

module.exports = HashTable;
