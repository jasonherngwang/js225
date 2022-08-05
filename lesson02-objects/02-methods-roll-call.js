'use strict';

let me = {
  index: 0,
  firstName: 'Jason',
};

// Add property using dot notation
me.lastName = 'Wang';

// Create other objects
let person1 = {
  index: 1,
  firstName: 'A',
  lastName: 'Wang',
};

let person2 = {
  index: 2,
  firstName: 'B',
  lastName: 'Wang',
};

// people Object
let people = {
  // Objects stored inside other objects
  collection: [me, person1, person2],
  // Methods
  // We will use `people` as the explicit receiver, so it is referenced by
  // `this`.
  generateIndex() {
    return this.collection[this.collection.length - 1].index + 1;
  },
  add(person) {
    if (this.isInvalidPerson(person)) return;
    // Merging objects together
    Object.assign(person, { index: this.generateIndex() });
    this.collection.push(person);
  },
  getIndex(person) {
    if (this.isInvalidPerson(person)) return;

    let index = -1;
    this.collection.forEach((personInCollection, personIndex) => {
      if (
        person.firstName === personInCollection.firstName &&
        person.lastName === personInCollection.lastName
      ) {
        index = personIndex;
      }
    });
    return index;
  },
  get(person) {
    if (this.isInvalidPerson(person)) return;

    return this.collection[this.getIndex(person)];
  },
  isInvalidPerson(person) {
    return (
      typeof person.firstName !== 'string' ||
      typeof person.lastName !== 'string'
    );
  },
  update(person) {
    if (this.isInvalidPerson(person)) return;

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
  remove(person) {
    if (this.isInvalidPerson(person)) return;

    let index = this.getIndex(person);
    if (index !== -1) this.collection.splice(index, 1);
  },
  logFullName(person) {
    console.log(person.index, person.firstName + ' ' + person.lastName);
  },
  rollCall(collection) {
    this.collection.forEach(this.logFullName);
  },
  logThis() {
    console.log(this);
  },
};

people.rollCall();
people.add({ firstName: null, lastName: 'Wang' });
people.rollCall();
people.remove({ firstName: 'A', lastName: 'Wang' });
people.remove({ firstName: 'AB', lastName: 'Wang' });
people.rollCall();
console.log(people.get({ firstName: 'Jason', lastName: 'Wang' }));

people.update({ firstName: 'Jason', lastName: 'Wang', occupation: 'baker' });
console.log(people.get({ firstName: 'Jason', lastName: 'Wang' }));

people.update({ firstName: 'D', lastName: 'Wang', occupation: 'writer' });
people.rollCall();
console.log(people.get({ firstName: 'D', lastName: 'Wang' }));
console.log(people);
