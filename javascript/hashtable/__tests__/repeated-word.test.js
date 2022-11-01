'use strict';

const {
  splitWords,
  repeatedElement,
  repeatedWord,
} = require('../repeated-word');

describe('Test word splitting function', () => {
  test('Splits simple phrases', () => {
    expect(splitWords('hello world')).toEqual(['hello', 'world']);
    expect(splitWords('The Wheel of Time turns')).toEqual([
      'the',
      'wheel',
      'of',
      'time',
      'turns',
    ]);
  });

  test('Splits phrases with punctuation', () => {
    expect(splitWords('fades to myth, and even myth')).toEqual([
      'fades',
      'to',
      'myth',
      'and',
      'even',
      'myth',
    ]);

    expect(splitWords('become legend. Legend fades')).toEqual([
      'become',
      'legend',
      'legend',
      'fades',
    ]);

    expect(splitWords('hello.wor?ld.sp/lit')).toEqual([
      'hello',
      'wor',
      'ld',
      'sp',
      'lit',
    ]);
  });
});

describe('Test repeated element function', () => {
  test('Works with strings', () => {
    expect(repeatedElement(['become', 'legend', 'legend', 'fades'])).toEqual(
      'legend'
    );
    expect(
      repeatedElement(['fades', 'to', 'myth', 'and', 'even', 'myth'])
    ).toEqual('myth');
  });
  test('No match returns null', () => {
    expect(repeatedElement(['legend', 'fades', 'to', 'myth'])).toBeNull();
    expect(repeatedElement(['fades', 'Fades'])).toBeNull();
  });
});

describe('Test repeated word function', () => {
  test('Nonsense string with no repetition', () => {
    expect(
      repeatedWord('abc/de.f4|the|hello!world?fjdnsj1@js.fp/ab,t')
    ).toBeNull();
  });

  test('Nonsense string with repetition', () => {
    expect(repeatedWord('sb.ab/s|j?4.gjs/ab?sgj')).toEqual('ab');
  });

  test('Prose with repetition', () => {
    expect(
      repeatedWord(
        'The Wheel of Time turns, and Ages come and pass, leaving memories that become legend. Legend fades to myth, and even myth is long forgotten when the Age that gave it birth comes again.'
      )
    ).toEqual('and');
  });

  test('More prose with repetition', () => {
    expect(
      repeatedWord(
        'In one Age, called the Third Age by some, an Age yet to come, an Age long past, a wind rose above the great mountainous island of Tremalking. The wind was not the beginning.'
      )
    ).toEqual('age');
  });

  test('Prose with no repetition', () => {
    expect(
      repeatedWord(
        'There are neither beginnings nor endings to the Wheel of Time. But it was a beginning.'
      )
    ).toBeNull();
  });
});
