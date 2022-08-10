// Using factory function, AKA factory object creation pattern, object factory
function makeCat(name, type, fed = false) {
  return {
    name,
    type,
    fed,
    meow() {
      console.log(`Meow. I am ${this.name}, a ${this.type}.`);
      if (!this.fed) console.log('Is it dinner time yet?');
    },
    feed() {
      this.fed = true;
      console.log('Nom nom nom.');
    },
  };
}

// All instances have their own copy of `meow` and `feed`; no behavior sharing.
let tabitha = makeCat('Tabitha', 'tabby cat');
tabitha.meow();
tabitha.feed();
tabitha.meow();
tabitha.feed();

let sammy = makeCat('Sammy', 'Siamese cat');
sammy.meow();
sammy.feed();

// Inherits from Object.prototype. No way to tell it came from `makeCat`.
console.log(typeof tabitha); // object
console.log(Object.getPrototypeOf(tabitha)); // [Object: null prototype] {}
console.log(Object.getPrototypeOf(tabitha) == Object.prototype); // true
console.log(Object.prototype.isPrototypeOf(tabitha)); // true
console.log(Object.getOwnPropertyNames(tabitha)); // [ 'name', 'type', 'fed', 'meow', 'feed' ]
console.log(tabitha instanceof makeCat); // false
console.log(tabitha instanceof Object); // true
console.log(tabitha.constructor); // [Function: Object]
console.log(Object.prototype.constructor); // [Function: Object]

// Without function factory
// Global scope is polluted with variables
let bobName = 'Bob';
let bobType = 'Bobcat';
let bobFed = true;

let callieName = 'Callie';
let callieType = 'calico cat';
let callieFed = false;

function meow(name, type, fed) {
  console.log(`Meow. I am ${name}, a ${type}.`);
  if (!fed) console.log('Is it dinner time yet?');
}

meow(bobName, bobType, bobFed);
meow(callieName, callieType, callieFed);
