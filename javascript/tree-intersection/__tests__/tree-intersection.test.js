"use strict";
const { BinaryTree } = require("../../trees");
const { HashTable } = require("../../hashtable");
const { treeToSet, checkTreeAgainstSet } = require("../index");

describe("Test tree implementation", () => {
  test("Add values to tree and test preorder callback method", () => {
    const tree = new BinaryTree();
    tree.iterativeInsert(1);
    tree.iterativeInsert(500);
    tree.iterativeInsert(20);
    tree.iterativeInsert(21);
    tree.iterativeInsert(200);
    const arr = [];
    tree.preorderCallback((e) => {
      arr.push(e);
    });
    expect(arr).toContain(1);
    expect(arr).toContain(200);
  });
});

describe("Test tree intersection functions", () => {
  const tree = new BinaryTree();
  tree.iterativeInsert(1);
  tree.iterativeInsert(500);
  tree.iterativeInsert(20);
  tree.iterativeInsert(21);
  tree.iterativeInsert(200);

  test("Add the nodes of a tree to a hash set", () => {
    const hashSet = treeToSet(tree);
    expect(hashSet.get(1)).toEqual(true);
    expect(hashSet.get(500)).toEqual(true);
    expect(hashSet.get(20)).toEqual(true);
    expect(hashSet.get(21)).toEqual(true);
    expect(hashSet.get(200)).toEqual(true);
  });
});
