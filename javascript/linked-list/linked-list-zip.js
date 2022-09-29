'use strict';

const LinkedList = require('./index');

module.exports = (LL1, LL2) => {
  const zipList = new LinkedList();
  let currentZip = zipList.head;
  let currentOne = LL1.head;
  let currentTwo = LL2.head;
  let counter = 0;

  while (currentOne || currentTwo) {
    if (!zipList.head) {
      counter++;
      zipList.head = currentOne;
      currentZip = zipList.head;
      currentOne = currentOne.next;
    } else if (counter % 2 === 0) {
      if (currentOne) {
        currentZip.next = currentOne;
        currentZip = currentZip.next;
        currentOne = currentOne.next;
      }
      counter++;
    } else if (counter % 2 === 1) {
      if (currentTwo) {
        currentZip.next = currentTwo;
        currentZip = currentZip.next;
        currentTwo = currentTwo.next;
      }
      counter++;
    }
  }

  return zipList;
};
