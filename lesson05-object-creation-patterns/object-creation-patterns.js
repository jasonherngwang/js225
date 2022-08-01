// Pseudo-classical pattern: Constructors as fake classes

// 1. Create a constructor function to set object state.
let Dog = function (name) {
  this.name = name;
};

// 2. Create shared methods on the constructor's prototype.
Dog.prototype.bark = function () {
  console.log('woof');
};

// Use `new` operator to create objects from the constructor's prototype.
let fido = new Dog('Fido');

console.log(fido.name); // Fido
fido.bark(); // woof

console.log(fido instanceof Dog); // true
console.log(Dog.prototype.isPrototypeOf(fido)); // true
console.log(Object.getPrototypeOf(fido) === Dog.prototype); // true
console.log(fido.constructor === Dog); // true

// OLOO pattern: Prototype-based object model

// 1. Define shared methods on prototype object
let Cat = {
  meow() {
    console.log('meow');
  },
  init(name) {
    this.name = name;
    return this;
  },
};

// 2. Inherit directly from the prototype object.
let paws = Object.create(Cat).init('Paws');

// Don't have to use `init`
let mittens = Object.create(Cat);
mittens.name = 'Mittens';

console.log(paws.name); // Paws
paws.meow(); // meow
console.log(mittens.name); // Mittens
mittens.meow(); // meow

console.log(Cat.isPrototypeOf(paws)); // true
console.log(Cat.isPrototypeOf(mittens)); // true
