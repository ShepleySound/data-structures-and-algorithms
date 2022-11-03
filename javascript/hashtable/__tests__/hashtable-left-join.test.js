const HashTable = require('../index');
const leftJoin = require('../hashtable-left-join');

const tableOne = new HashTable();
const tableTwo = new HashTable();

tableOne.set('fond', 'enamored');
tableTwo.set('fond', 'averse');

tableOne.set('guide', 'usher');
tableTwo.set('guide', 'follow');

tableOne.set('outfit', 'garb');

tableOne.set('wrath', 'anger');
tableTwo.set('wrath', 'delight');

tableTwo.set('harsh', 'pleasant');

const joined = leftJoin(tableOne, tableTwo);
test('Returns a new hash table', () => {
  expect(joined instanceof HashTable).toEqual(true);
});

test('Each match creates a key with a tuple-like pair as the value', () => {
  expect(tableOne.get('fond')).toEqual('enamored');
  expect(tableTwo.get('fond')).toEqual('averse');

  expect(joined.get('fond')).toEqual(['enamored', 'averse']);
});

test('A word with no match returns null as the second element of the tuple/array', () => {
  expect(tableOne.get('outfit')).toEqual('garb');
  expect(tableTwo.get('outfit')).toBeUndefined();
  expect(joined.get('outfit')[0]).toEqual('garb');
  expect(joined.get('outfit')[1]).toBeNull();
});

test('A word in the second table with no match to the first does not appear in the join', () => {
  expect(tableOne.get('harsh')).toBeUndefined();
  expect(tableTwo.get('harsh')).toEqual('pleasant');
  expect(joined.get('harsh')).toBeUndefined();
});
