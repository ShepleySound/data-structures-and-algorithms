'use strict';

const { Queue } = require ('./index');

/**
 * Class representing a dog
 */
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.timestamp = new Date();
  }
}

/**
 * Class representing a cat
 */
class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.timestamp = new Date();
  }
}

/**
 * Class representing an Animal Shelter.
 * The Animal Shelter uses two queues to allow for
 * the enqueuing and dequeueing of cats and dogs.
 */
class AnimalShelter {
  constructor() {
    this.dogQ = new Queue();
    this.catQ = new Queue();
  }

  /**
   *
   * @param {Dog | Cat} animal
   */
  enqueue(animal) {
    if (animal instanceof Dog) {
      this.dogQ.enqueue(animal);
    }
    if (animal instanceof Cat) {
      this.catQ.enqueue(animal);
    }
  }

  /**
   * Takes in a preference in the form of the string and dequeues from the corresponding queue.
   * @param {string} pref 
   * @returns The Node dequeued from the appropriate queue. Returns null if preference does not match an existing queue.
   */
  dequeue(pref) {
    if (pref === 'dog') {
      return this.dogQ.dequeue();
    }
    else if (pref === 'cat') {
      return this.catQ.dequeue();
    } else return null;
  }
}

module.exports = { AnimalShelter, Dog, Cat };
