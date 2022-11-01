# Repeated Word

## Challenge

Write a function that finds the first word to occur more than once in a string. The function should take in a string as an argument and return the first word that appears twice.

For this challenge, I have used a custom [hash table implementation](./README.md) and the following functions. The functions work together to solve the challenge. One splits the words in a string into an array of strings based on a set of delimiters. Another finds any duplicate value in an array by checking each value of the array against a hash table and adding it to the hash table if it is not registered as a duplicate. The third function combines these two to create a function that specifically works on strings with a sentence/phrase structure.

## Functions

<dl>
<dt><a href="#splitWords">splitWords(string)</a> ⇒</dt>
<dd></dd>
<dt><a href="#repeatedElement">repeatedElement(array)</a> ⇒</dt>
<dd><p>Scans an array and inserts each element into a hash table if it does not already exist.
If a duplicate is found, the function immediately returns the checked element.
Uses the value of each element as a key and sets its value in the hash table to true, mimicking a hashset/set interface.</p>
<p>NOTE: The underlying hash table is not type-safe, but this function does not coerce types.
If an array contains two elements that are equivalent when coerced to a string, the function will return the <em>second</em> element.</p>
</dd>
<dt><a href="#repeatedWord">repeatedWord(string)</a> ⇒</dt>
<dd><p>Uses the <a href="#splitWords">splitWords</a> function to split a string into individual words, then uses the <a href="#repeatedElement">repeatedElement</a> function to test for duplicate words.</p>
</dd>
</dl>

<a name="splitWords"></a>

### splitWords(string) ⇒

**Kind**: global function  
**Returns**: An array of words, delimited using common word separators and set to lowercase.

| Param  | Type                | Description             |
| ------ | ------------------- | ----------------------- |
| string | <code>string</code> | The string to be split. |

<a name="repeatedElement"></a>

### repeatedElement(array) ⇒

Scans an array and inserts each element into a hash table if it does not already exist.
If a duplicate is found, the function immediately returns the checked element.
Uses the value of each element as a key and sets its value in the hash table to true, mimicking a hashset/set interface.

NOTE: The underlying hash table is not type-safe, but this function does not coerce types.
If an array contains two elements that are equivalent when coerced to a string, the function will return the _second_ element.

**Kind**: global function  
**Returns**: The first element that is found to be a duplicate. If no duplicates are found, returns null.

| Param | Type            |
| ----- | --------------- |
| array | <code>\*</code> |

<a name="repeatedWord"></a>

### repeatedWord(string) ⇒

Uses the [splitWords](#splitWords) function to split a string into individual words, then uses the [repeatedElement](#repeatedElement) function to test for duplicate words.

**Kind**: global function  
**Returns**: The first word that is found to be a duplicate. If no duplicates are found, returns null.

| Param  | Type            |
| ------ | --------------- |
| string | <code>\*</code> |
