'use strict';

const HashTable = require('./');

function leftJoin(left, right) {
  const joinTable = new HashTable();

  left.rawKeysCallback((key) => {
    joinTable.set(key, [left.get(key), right.get(key) || null]);
  });
  return joinTable;
}

module.exports = leftJoin;
