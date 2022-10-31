'use strict';

const asciiHash = require('../ascii-hash');

describe('Test hashing function', () => {
  
  test('Hashes strings based on ASCII code values', () => {
    expect(asciiHash('hello world')).toEqual(1116);
    expect(asciiHash('hello')).toEqual(532);
    expect(asciiHash('helloworld')).toEqual(1084);
  });

  test('Hashes integers as well', () => {
    expect(asciiHash(12345)).toEqual(255);
  });

  test('Hashing an integer and its string equivalent yield the same hash', () => {
    expect(asciiHash(12345)).toEqual(asciiHash('12345'));
    expect(asciiHash(-2039)).toEqual(asciiHash('-2039'));
  });

  test('Hashing objects and arrays works as well', () => {
    expect(typeof asciiHash([12345])).toBe('number');
    expect(typeof asciiHash({
      hello: 'world',
      key: 'value'
    })).toBe('number');
  });

  test('Hashing undefined or null also works, since the function uses template literals', () => {
    expect(typeof asciiHash()).toBe('number');
    expect(typeof asciiHash(null)).toBe('number');
  });
});
