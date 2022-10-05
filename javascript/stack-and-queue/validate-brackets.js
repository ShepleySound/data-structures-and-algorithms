'use strict';

const { NullableStack } = require('./index');

const bracketDictionary = {
  '[': ']',
  '{': '}',
  '(': ')',
};


function validateBrackets (string) {
  let openers = new NullableStack();
  for (let char of string) {
    if(char === '(' || char === '[' || char === '{'){
      openers.push(char);
    } else if (char === ')' || char === ']' || char === '}'){
      if(bracketDictionary[openers.peek()] === char) {
        openers.pop();
      } else return false;
    }
  }
  if (openers.isEmpty()) {
    return true
  } else return false
}

module.exports = { validateBrackets };

bracketDictionary['[']; // RETURNS ']'
bracketDictionary['(']; // RETURNS ')'
bracketDictionary['{']; // RETURNS '}'

const testString1 = '([djfjheirttwijdf]()[jdjeieurtjekwjql])'
console.log(validateBrackets(testString1)) // RETURNS TRUE

const testString2= '[(hello)world]'
console.log(validateBrackets(testString2)) // RETURNS TRUE

const testString3= '[((hello)]'
console.log(validateBrackets(testString3)) // RETURNS FALSE

const testString4 = '['
console.log(validateBrackets(testString4)) // RETURNS FALSE

const testString5 = ']'
console.log(validateBrackets(testString5)) // RETURNS FALSE