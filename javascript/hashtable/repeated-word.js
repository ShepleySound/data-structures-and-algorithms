'use strict';

const HashTable = require('./');

/**
 *
 * @param {string} string - The string to be split.
 * @returns An array of words, delimited using common word separators and set to lowercase.
 */
function splitWords(string) {
  const regex = /[,!?\s./|]+/gi;
  const split = string.replace(regex, ' ').trim().toLowerCase().split(' ');
  return split;
}

/**
 * Scans an array and inserts each element into a hash table if it does not already exist.
 * If a duplicate is found, the function immediately returns the checked element.
 * Uses the value of each element as a key and sets its value in the hash table to true, mimicking a hashset/set interface.
 *
 * NOTE: The underlying hash table is not type-safe, but this function does not coerce types.
 * If an array contains two elements that are equivalent when coerced to a string, the function will return the *second* element.
 * @param {*} array
 * @returns The first element that is found to be a duplicate. If no duplicates are found, returns null.
 */
function repeatedElement(array) {
  const hashtable = new HashTable();
  for (let element of array) {
    if (hashtable.get(element)) {
      return element;
    }
    hashtable.set(element, true);
  }
  return null;
}

/**
 * Uses the {@link splitWords} function to split a string into individual words, then uses the {@link repeatedElement} function to test for duplicate words.
 * @param {*} string
 * @returns The first word that is found to be a duplicate. If no duplicates are found, returns null.
 */
function repeatedWord(string) {
  const split = splitWords(string);
  return repeatedElement(split);
}

module.exports = { splitWords, repeatedElement, repeatedWord };
