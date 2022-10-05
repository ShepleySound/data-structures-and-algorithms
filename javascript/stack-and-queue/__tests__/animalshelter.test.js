'use strict';

const { AnimalShelter, Cat, Dog } = require('../animalshelter');

describe('Animal Shelter Queue', () => {
  const shelter = new AnimalShelter();
  test('Null when initialized', () => {
    expect(shelter.dogQ.front).toBeNull();
    expect(shelter.catQ.front).toBeNull();
  });

  test('Enqueueing and dequeueing with class instances should work', () => {

    shelter.enqueue(new Cat('honey', 'orange'));
    shelter.enqueue(new Cat('pippin', 'orange'));
    shelter.enqueue(new Cat('nox', 'black'));
    shelter.enqueue(new Dog('frisco', 'golden retriever'));
    shelter.enqueue(new Dog('doggy', 'labradoodle'));
    shelter.enqueue(new Dog('hello buddy', 'chihuahua'));
    shelter.enqueue(new Dog('dog buddy', 'pupper'));

    // Invalid animal type returns null
    expect(shelter.dequeue('horsey')).toBeNull();
    // Dequeue everything
    expect(shelter.dequeue('dog')).toBeInstanceOf(Dog);
    expect(shelter.dequeue('cat')).toBeInstanceOf(Cat);
    expect(shelter.dequeue('dog')).toBeInstanceOf(Dog);
    expect(shelter.dequeue('cat')).toBeInstanceOf(Cat);
    expect(shelter.dequeue('cat')).toBeInstanceOf(Cat);
    expect(shelter.dequeue('dog')).toBeInstanceOf(Dog);
    expect(shelter.dequeue('dog')).toBeInstanceOf(Dog);
    // All dogs are gone, so these should throw
    expect(() => shelter.dequeue('dog')).toThrow();
    expect(() => shelter.dequeue('cat')).toThrow();




  });
});
