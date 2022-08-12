// OLOO
// Each instance has its OWN COPY of method `secret`. No behavior delegation.
// Each of these methods has a closure, retaining access to the initially
// provided secret information.
let Person = {
  init(secretData) {
    // secretKeptPrivate is closed over by method `secret`.
    this.secret = function () {
      return secretData;
    };
    return this;
  },
};

const jason = Object.create(Person).init('i am cool');
const james = Object.create(Person).init('i am very cool');

console.log(jason.secret()); // i am cool
console.log(james.secret()); // i am very cool

// OLOO with IIFE
// The prototype has a data structure containing the private data for every
// instance.
// Using a WeakMap, the key is the instance, and the value is an object with
// the private data.
let Person2 = (function () {
  const privateData = new WeakMap();

  return {
    init(secretData) {
      privateData.set(this, { secretData });
      return this;
    },
    secret() {
      return privateData.get(this).secretData;
    },
  };
})();

const jason2 = Object.create(Person2).init('i am cool');
const james2 = Object.create(Person2).init('i am very cool');

console.log(jason2.secret()); // i am cool
console.log(james2.secret()); // i am very cool

// Object Factory
// Each instance has its own duplicated set of properties
function makePerson(secretData) {
  return {
    secret() {
      return secretData;
    },
  };
}

const jason3 = makePerson('i am cool');
const james3 = makePerson('i am very cool');

console.log(jason3.secret()); // i am cool
console.log(james3.secret()); // i am very cool

// Pseudo-Classical Pattern
function Person4(secretData) {
  this.secret = function () {
    return secretData;
  };
}

const jason4 = new Person4('i am cool');
const james4 = new Person4('i am very cool');

console.log(jason4.secret()); // i am cool
console.log(james4.secret()); // i am very cool

// ES6 class syntax
class Person5 {
  // Declare private variables
  #secretData;

  constructor(secretData) {
    this.#secretData = secretData;
  }

  secret() {
    return this.#secretData;
  }
}

const jason5 = new Person5('i am cool');
const james5 = new Person5('i am very cool');

console.log(jason5.secret()); // i am cool
console.log(james5.secret()); // i am very cool

// OLOO
// Use PFA

let Person6 = {
  secret(privateData) {
    return privateData.secret;
  },
  init(secret) {
    const privateData = { secret };
    // Access Person6, the object prototype
    const proto = Object.getPrototypeOf(this);
    // Create a new method on the instance, which is BASED ON a method of the
    // prototype. It pre-binds the provided secret data as the first arg.
    this.secret = proto.secret.bind(this, privateData);
    return this;
  },
};

const jason6 = Object.create(Person6).init('i am cool');
const james6 = Object.create(Person6).init('i am very cool');

console.log(jason6.secret()); // i am cool
console.log(james6.secret()); // i am very cool
