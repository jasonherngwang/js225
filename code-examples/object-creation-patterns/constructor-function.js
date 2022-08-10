// Constructor function only, no behavior delegation
function Dog(name) {
  this.name = name;
  // This behavior is duplicated in every instance, not shared among instances.
  this.bark = function () {
    console.log('Woof Woof!');
  };
}

// Dog.prototype is set as the object prototype for instance `bitey`.
let bitey = new Dog('Bitey');

console.log(typeof Dog.prototype); // object
console.log(Dog.prototype.isPrototypeOf(bitey)); // true

// Instances inherit properties
Dog.prototype.temper = 'evil';
console.log(bitey.hasOwnProperty('temper')); // false
console.log(bitey.temper); // evil

// Object analysis
console.log(typeof bitey); // object
console.log(Dog.prototype); // { temper: 'evil' }
console.log(Object.getPrototypeOf(bitey)); // { temper: 'evil' }
console.log(Object.getPrototypeOf(bitey) == Object.prototype); // false
console.log(Object.getPrototypeOf(bitey) == Dog.prototype); // true
console.log(Object.prototype.isPrototypeOf(bitey)); // true
console.log(Object.prototype.isPrototypeOf(Dog.prototype)); // true
console.log(Dog.prototype.isPrototypeOf(bitey)); // true
console.log(Object.getOwnPropertyNames(bitey)); // [ 'name' ]
console.log(bitey instanceof Dog); // true
console.log(bitey instanceof Object); // true
console.log(bitey instanceof Function); // false
console.log(bitey.constructor); // [Function: Dog]
console.log(Dog.prototype.constructor); // [Function: Dog]
console.log(Object.prototype.constructor); // [Function: Object]
