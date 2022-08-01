// OLOO with prototypal inheritance pattern ------------------------------------
// Class/Parent: Object prototype
let Bag = {
  init(bagType) {
    this.bagType = bagType;
    return this;
  },
  open() {
    return `Opening my ${this.bagType}`;
  },
};

// Subclass/Child
let Backpack = Object.create(Bag).init('backpack');
Backpack.open = function () {
  return Bag.open.call(this) + '!';
};

// Instance of Child
let lsBackpack = Object.create(Backpack).init('backpack w/ LS logo');
console.log(lsBackpack.open()); // Opening my backpack w/ LS logo!

// Pseudo-classical pattern ----------------------------------------------------
// Class/Parent: Constructor function (object)
function Bag2(bagType) {
  this.bagType = bagType;
}

Bag2.prototype.open = function () {
  return `Opening my ${this.bagType}`;
};

// Subclass/Child
function Backpack2(bagType) {
  Bag2.call(this, bagType);
}

Backpack2.prototype = Object.create(Bag2.prototype);
Backpack2.prototype.constructor = Bag2;
Backpack2.prototype.open = function () {
  return Bag2.prototype.open.call(this) + '!';
};

// Instance of Child
let lsBackpack2 = new Backpack2('backpack w/ LS Logo');
console.log(lsBackpack2.open()); // Opening my backpack w/ LS logo!

// ES6 class syntax ------------------------------------------------------------
// Class/Parent: ES6 class object
class Bag3 {
  constructor(bagType) {
    this.bagType = bagType;
  }

  open() {
    return `Opening my ${this.bagType}`;
  }
}

// Subclass/Child
class Backpack3 extends Bag3 {
  constructor(bagType) {
    super(bagType);
  }

  open() {
    return super.open() + '!';
  }
}

// Instance of Child
let lsBackpack3 = new Backpack3('backpack w/ LS logo');
console.log(lsBackpack3.open()); // Opening my backpack w/ LS logo!
