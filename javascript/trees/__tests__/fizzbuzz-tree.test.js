const { Tree } = require('../m-ary-tree');
const { fizzBuzz, callbackTree } = require('../fizzbuzz-tree');

describe('Test the functionality of the fizzbuzz algorithm', () => {
  test('Numbers divisible by 3 (NOT 5) should output "fizz"', () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
    expect(fizzBuzz(6)).toEqual('Fizz');
    expect(fizzBuzz(9)).toEqual('Fizz');
    expect(fizzBuzz(3333333363)).toEqual('Fizz');
  });

  test('Numbers divisible by 5 (NOT 3) should output "Buzz"', () => {
    expect(fizzBuzz(5)).toEqual('Buzz');
    expect(fizzBuzz(10)).toEqual('Buzz');
    expect(fizzBuzz(20)).toEqual('Buzz');
    expect(fizzBuzz(555555505)).toEqual('Buzz');
  });

  test('Numbers divisible by 3 AND 5 should output "FizzBuzz"', () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
    expect(fizzBuzz(30)).toEqual('FizzBuzz');
    expect(fizzBuzz(45)).toEqual('FizzBuzz');
    expect(fizzBuzz(45000000)).toEqual('FizzBuzz');
  });
});

describe('Test the functionality of the fizzbuzz algorithm on an m-ary tree', () => {
  test('Run test on tree with m = 3', () => {
    const tree = new Tree(3);

    tree.iterativeInsert(1);
    tree.iterativeInsert(2);
    tree.iterativeInsert(3);
    tree.iterativeInsert(4);
    tree.iterativeInsert(5);
    tree.iterativeInsert(6);
    tree.iterativeInsert(7);
    tree.iterativeInsert(8);
    tree.iterativeInsert(9);
    tree.iterativeInsert(10);
    tree.iterativeInsert(11);
    tree.iterativeInsert(12);
    tree.iterativeInsert(13);
    tree.iterativeInsert(14);
    tree.iterativeInsert(15);

    const fizzBuzzTree = callbackTree(tree, fizzBuzz);

    expect(tree.preorderRecursive()).toEqual([
      1, 2, 5, 14, 15, 6,
      7, 3, 8, 9, 10, 4,
      11, 12, 13
    ]);
    expect(fizzBuzzTree.preorderRecursive()).toEqual([
      '1', '2','Buzz', '14', 'FizzBuzz', 'Fizz',
      '7', 'Fizz', '8', 'Fizz', 'Buzz', '4',
      '11', 'Fizz', '13'
    ]);
  });
});

