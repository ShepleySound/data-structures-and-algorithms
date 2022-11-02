"use strict";
const { BinaryTree } = require("../../trees");
const { HashTable } = require("../../hashtable");
const {
  treeToSet,
  checkTreeAgainstSet,
  treeIntersection,
} = require("../index");

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
  const treeOne = new BinaryTree();
  treeOne.iterativeInsert(1);
  treeOne.iterativeInsert(500);
  treeOne.iterativeInsert(20);
  treeOne.iterativeInsert(21);
  treeOne.iterativeInsert(200);

  const treeTwo = new BinaryTree();
  treeTwo.iterativeInsert(4);
  treeTwo.iterativeInsert(100);
  treeTwo.iterativeInsert(500);
  treeTwo.iterativeInsert(20);
  treeTwo.iterativeInsert(320);

  const hashSet = treeToSet(treeOne);

  test("Add the nodes of a tree to a hash set", () => {
    expect(hashSet.get(1)).toEqual(true);
    expect(hashSet.get(500)).toEqual(true);
    expect(hashSet.get(20)).toEqual(true);
    expect(hashSet.get(21)).toEqual(true);
    expect(hashSet.get(200)).toEqual(true);
  });

  const duplicateArray = checkTreeAgainstSet(treeTwo, hashSet);

  test("Check the created hash set against the second tree's nodes", () => {
    expect(duplicateArray).toContain(20);
    expect(duplicateArray).toContain(500);
  });

  test("Combine both functions to produce the desired solution", () => {
    const duplicateArray = treeIntersection(treeOne, treeTwo);
    expect(duplicateArray).toContain(20);
    expect(duplicateArray).toContain(500);
  });
});
