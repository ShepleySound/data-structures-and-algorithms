'use strict';

console.log(__dirname)

const { validateBrackets } = require('../validate-brackets');

describe('Small cases', () => {
  test('Empty string passes', () => {
    expect(validateBrackets('')).toEqual(true);
  });

  test('String with no brackets passes', () => {
    expect(validateBrackets('hello world where are my brackets?')).toEqual(true);
  });

  test('Starting with a closing bracket fails', () => {
    expect(validateBrackets(']')).toEqual(false);
    expect(validateBrackets(')')).toEqual(false);
    expect(validateBrackets('}')).toEqual(false);
  });

  test('No closing bracket fails', () => {
    expect(validateBrackets('[')).toEqual(false);
    expect(validateBrackets('(')).toEqual(false);
    expect(validateBrackets('{')).toEqual(false);
  });

  test('Slightly longer fail cases', () => {
    expect(validateBrackets('[)[')).toEqual(false);
    expect(validateBrackets('[bracket(city]')).toEqual(false);
    expect(validateBrackets('([hello][world]{i:have[brackets}now)')).toEqual(false);
    expect(validateBrackets('{{{{{((((([[[{[([([[]])])]}])]])))))}}}}}')).toEqual(false);
  });

  test('Ending a new bracket type before a previous bracket type closes fails', () => {
    expect(validateBrackets('([)]')).toEqual(false);
    expect(validateBrackets('[(])')).toEqual(false);
    expect(validateBrackets('{(hello)(world]}')).toEqual(false);
  });

  test('Basic passing cases', () => {
    expect(validateBrackets('()')).toEqual(true);
    expect(validateBrackets('[]')).toEqual(true);
    expect(validateBrackets('{}')).toEqual(true);
  });

  test('Slightly longer passing cases', () => {
    expect(validateBrackets('([hello][world])')).toEqual(true);
    expect(validateBrackets('[{this}(is)[a]](world)[{((()))}]')).toEqual(true);
    expect(validateBrackets('{{{{{((((([[([{[([([[]])])]}])]])))))}}}}}')).toEqual(true);
  });


});

describe('Try it on real code', () => {
  const fs = require('fs');
  const path = require('path');
  // Module for stripping comments from code strings. Very useful here.
  const strip = require('strip-comments');
  // Grab index.js from the parent directory.
  const fileContents = fs.readFileSync(path.join(__dirname, '..', 'index.js')).toString();
  // Strip the comments
  const strippedContents = strip(fileContents);
  test('Test stack-and-queue/index.js', () => {
    expect(validateBrackets(strippedContents)).toEqual(true)
  });
});