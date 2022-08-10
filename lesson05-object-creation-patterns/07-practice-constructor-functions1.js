// 1
let a = 1;
let foo;
let obj;

// Constructor function
function Foo() {
  // Set properties
  this.a = 2;
  this.bar = function () {
    console.log(this.a);
  };
  // Invoke method
  this.bar();
}

// Instantiate new object, using Foo.prototype as the prototype object.
// For constructor invocation, `this` references the newly created object `foo`.
// Foo doesn't explicitly return an object, so `this` (the new object) is
// returned.
foo = new Foo(); // 2

// Invoke method, with `foo` as the implicit function execution context.
foo.bar(); // 2

// This function invocation implicitly sets `this` to global object,
// window or global.
// Sets properties `a` and `bar` as properties of global object (non-strict)
Foo(); // 2

// Object literal syntax. Uses Object.prototype as the prototype object.
obj = {};
// Explicitly set `obj` as function execution context.
// Sets properties `a` and `bar` on `obj`. Calls `bar()`.
Foo.call(obj); // 2
obj.bar(); // 2

// When invoking Foo() w/o `new`, we set property `global.a` (Node) or
// `window.a` (browser).
console.log(global.a); // 2
// Node.js wraps files inside a function, so `this` references module.exports,
// not `global`. In the browser, this is the same as `window.a`.
console.log(this.a); // undefined

// 2
// Declare and initialize a constant object with several methods.
let RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

// Constructor function
// Doesn't explicitly return an object, so returns `this`.
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  // Accesses RECTANGLE from lexical scope.
  // this.area = RECTANGLE.area();
  // this.perimeter = RECTANGLE.perimeter();
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}
// Use `new` operator to create new object using Rectangle.prototype as its
// prototype object. Within the constructor function, invokes methods
// RECTANGLE.area() and RECTANGLE.perimeter(). RECTANGLE is the explicit
// receiver, but it doesn't have properties `width` or `height`. Therefore,
// undefined * undefined and undefined + undefined both return NaN.
let rect1 = new Rectangle(2, 3);
console.log(rect1.area); // NaN => 6
console.log(rect1.perimeter); // NaN => 10

// 3
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function () {
  return Math.PI * Math.pow(this.radius, 2);
};

let a3 = new Circle(3);
let b3 = new Circle(4);

console.log(a3.area().toFixed(2)); // => 28.27
console.log(b3.area().toFixed(2)); // => 50.27

// 4
let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

// The prototype object associated with constructor function Ninja is mutated
// after an object has already been instantiated using the constructor. This
// change will be reflected by the newly created object because the prototype
// chain lookup occurs when the method is invoked. JS doesn't take a frozen
// snapshot of the prototype when the object is instantiated.
Ninja.prototype.swingSword = function () {
  return this.swung;
};

console.log(ninja.swingSword()); // true

// 5
// In problem 4, we added a new method `swingSword` to the object that served
// as both the function prototype of constructor function Ninja and as the
// object prototype of `ninja`.
// In this problem we don't mutate the object prototype of `ninja`, so the
// method `swingSword` doesn't exist in its prototype chain.
// We reassign the function prototype of Ninja to a new object, but that doesn't
// affect `ninja`.
let ninja2;
function Ninja2() {
  this.swung = true;
}

ninja2 = new Ninja2();

Ninja2.prototype = {
  swingSword: function () {
    return this.swung;
  },
};

// console.log(ninja2.swingSword());
// TypeError: ninja2.swingSword is not a function

// 6
let ninjaA;
let ninjaB;
function Ninja3() {
  this.swung = false;
}

ninjaA = new Ninja3();
ninjaB = new Ninja3();

// Add a swing method to the Ninja prototype which
// returns the calling object and modifies swung
Ninja3.prototype.swing = function () {
  this.swung = true;
  return this;
};

console.log(ninjaA.swing().swung); // must log true
console.log(ninjaB.swing().swung); // must log true

// 7
let ninjaA7 = (function () {
  function Ninja7() {
    this.name = 'Ninja';
  }
  return new Ninja7();
})();

let ninjaB7 = Object.create(Object.getPrototypeOf(ninjaA7));
let ninjaB7FromConstructor = new ninjaA7.constructor();

console.log(ninjaB7.constructor === ninjaA7.constructor); // should log true

console.log(ninjaB7); // Ninja7 {}
// Code inside constructor Ninja7 executes.
console.log(ninjaB7FromConstructor); // Ninja7 { name: 'Ninja' }
