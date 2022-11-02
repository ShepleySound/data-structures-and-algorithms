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
 * @param {HashTable} set
 */
function checkTreeAgainstSet(tree, set) {}

module.exports = { treeToSet, checkTreeAgainstSet };
