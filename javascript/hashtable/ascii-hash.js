'use strict';

/**
 * Takes in a key, stringifies it using a template literal, and uses ASCII codes to create a numeric hash.
 * Note, because of its stringifying behavior, this hashing function is *not* type-safe.
 * For example, the keys '1234' and 1234 will both return the same hash.
 * @param {*} key - A key to be hashed.
 * @returns {number} An integer representing the hashed key.
 */
function asciiHash(key) {
  let hash = 0;
  const stringifiedKey = `${key}`;
  for (let i in stringifiedKey) {
    hash += stringifiedKey.charCodeAt(i);
  }
  return hash;
}

module.exports = asciiHash;
