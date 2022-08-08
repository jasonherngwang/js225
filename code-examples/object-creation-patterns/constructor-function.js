// Constructor function only, no prototyal inheritance

function Dog() {
  this.color = 'golden';
}

// Dog.prototype is set as the prototype for instance `bitey`.
let bitey = new Dog();

console.log(typeof Dog.prototype); // object
console.log(Dog.prototype.isPrototypeOf(bitey)); // true

// Instances inherit properties
Dog.prototype.temper = 'evil';
console.log(bitey.hasOwnProperty('temper')); // false
console.log(bitey.temper); // evil
