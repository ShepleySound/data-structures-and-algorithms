"use strict";

const { BinaryTree } = require("../trees");
const HashTable = require("../hashtable");

/**
 *
 * @param {BinaryTree} tree
 */
function treeToSet(tree) {
  const hashSet = new HashTable();
  tree.inorderCallback((value) => {
    hashSet.set(value, true);
  });

  return hashSet;
}

/**
 *
 * @param {BinaryTree} tree
 * @param {HashTable} hashSet
 */
function checkTreeAgainstSet(tree, hashSet) {
  const arr = [];

  tree.inorderCallback((value) => {
    if (hashSet.get(value)) {
      arr.push(value);
    }
  });

  return arr;
}

function treeIntersection(one, two) {
  const hashSet = treeToSet(one);
  const duplicateArray = checkTreeAgainstSet(two, hashSet);
  return duplicateArray;
}

module.exports = { treeToSet, checkTreeAgainstSet, treeIntersection };
