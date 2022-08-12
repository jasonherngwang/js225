// Factory Function ------------------------------------------------------------
// All objects have own copy of properties and methods.
function makeHorse(name, color) {
  return {
    name,
    color,
    jump() {
      console.log(`${this.name} jumps!`);
    },
  };
}

let jason = makeHorse('Jason', 'cimarron');
jason.jump(); // Jason jumps!
console.log(jason.constructor); // [Function: Object]

// Constructor Pattern ---------------------------------------------------------
// Define properties directly onto the object. Can initialize state during
// creation.
function MakeHorse(name, color) {
  this.name = name;
  this.color = color;
  this.jump = function () {
    console.log(`${this.name} jumps!`);
  };

  return this;
}

// Use `new` operator with a function.
let james = new MakeHorse('James', 'amber');
james.jump(); // James jumps!
// Can determine the source where the object was created from
console.log(james.constructor); // [Function: MakeHorse]
console.log(james instanceof MakeHorse); // true
console.log(MakeHorse.prototype.isPrototypeOf(james)); // true
// All objects have own copy of properties and methods.
console.log(Object.getOwnPropertyNames(james)); // [ 'name', 'color', 'jump' ]
console.log(Object.keys(james)); // [ 'name', 'color', 'jump' ]
console.log(james.hasOwnProperty('jump')); // true

// Prototype Pattern -----------------------------------------------------------
// Approach 1: Using empty constuctor and `new`
// Do not initialize state during creation.
function MakeHorsie() {}
MakeHorsie.prototype.neigh = function () {
  console.log('Neigh');
};

let john = new MakeHorsie();
john.neigh(); // Neigh
// Manually set properties on the object, since constructor is empty.
john.name = 'John';

// Approach 2: Using Object.create with function prototype
let jill = Object.create(MakeHorsie.prototype);
jill.neigh(); // Neigh

// Approach 3: Using Object.create with standalone object
let Horsie = {
  neigh() {
    console.log('Neigh');
  },
};

let jack = Object.create(Horsie);
jack.neigh(); // Neigh
jack.name = 'Jack';

// A prototype chain is created
console.log(MakeHorsie.prototype.isPrototypeOf(john)); // true
console.log(Object.getPrototypeOf(john) === MakeHorsie.prototype); // true
console.log(Object.getPrototypeOf(jack) === Horsie); // true
// Behavior is delegated to the object prototype
console.log(Object.getOwnPropertyNames(john));
// [ 'name' ] (doesn't include neigh; it's delegated)
console.log(john.hasOwnProperty('neigh')); // false

// Pseudo-Classical Pattern ----------------------------------------------------
// Constructor Pattern: Initialize state during creation
// Can't take advantage of this if using Object.create; must use `new`.
function Stallion(name, color) {
  this.name = name;
  this.color = color;

  return this;
}
// Prototype Pattern: Delegate behavior to object prototype(s)
Stallion.prototype.jump = function () {
  console.log(`${this.name} jumps!`);
};

let spirit = new Stallion('Spirit', 'auburn');
spirit.jump(); // Spirit jumps!
console.log(spirit.hasOwnProperty('jump')); // false
console.log(spirit instanceof Stallion); // true
console.log(spirit.constructor === Stallion); // true
console.log(Object.getPrototypeOf(spirit) === Stallion.prototype); // true

// Subclassing with Pseudo-Classical Pattern
function SpeedyStallion(name, color, speed) {
  Stallion.call(this, name, color);
  this.speed = speed;
  return this;
}
SpeedyStallion.prototype = Object.create(Stallion.prototype);
SpeedyStallion.prototype.constructor = SpeedyStallion;

let magic = new SpeedyStallion('Magic', 'onyx', 9000);
magic.jump(); // Magic jumps!
console.log(magic.speed); // 9000
console.log(magic.constructor); // SpeedyStallion

// Class Syntax Pattern --------------------------------------------------------
// Syntactic sugar for Pseudo-Classical Pattern
class Horse {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  jump() {
    console.log(`${this.name} jumps!`);
  }
}

let eunice = new Horse('Eunice', 'white');
eunice.jump(); // Eunice jumps!
console.log(eunice.hasOwnProperty('jump')); // false
console.log(eunice instanceof Horse); // true
console.log(eunice.constructor === Horse); // true
console.log(Object.getPrototypeOf(eunice) === Horse.prototype); // true

// Subclassing with class syntax
class Thoroughbred extends Horse {
  constructor(name, color, species) {
    super(name, color);
    this.species = species;
  }

  jump() {
    super.jump();
    console.log('Really high!');
  }
}

let buddy = new Thoroughbred('Buddy', 'chestnut', 'thoroughbred');
buddy.jump();
console.log(buddy.hasOwnProperty('jump')); // false
console.log(buddy instanceof Horse); // true
console.log(buddy.constructor === Horse); // false
console.log(buddy.constructor === Thoroughbred); // true
console.log(Object.getPrototypeOf(buddy) === Horse.prototype); // false
console.log(Object.getPrototypeOf(buddy) === Thoroughbred.prototype); // true
console.log(Horse.prototype.isPrototypeOf(buddy)); // true

// OLOO ------------------------------------------------------------------------
const Horsey = {
  init(name, color) {
    this.name = name;
    this.color = color;
    return this;
  },
  jump() {
    console.log(`${this.name} jumps!`);
  },
};

let rudolph = Object.create(Horsey).init('Rudolph', 'brown');
rudolph.jump(); // Rudolph jumps!

const Pony = Object.create(Horsey);

Pony.init = function (name, color, temper) {
  Horsey.init.call(this, name, color);
  this.temper = temper;
  return this;
};

let tiny = Object.create(Pony).init('Tiny', 'white', 'nice');
tiny.jump(); // Tiny jumps!
console.log(tiny.temper); // nice
