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

// Invoke method, with `foo` as the function execution context.
// JS finds `bar` higher in the prototype chain, in Foo.prototype.
foo.bar(); // 2

// This function invocation implicitly sets `this` to global object.
// Sets properties `a` and `bar` as properties of global object (non-strict)
Foo(); // 2

// Object literal syntax. Uses Object.prototype as the prototype object.
obj = {};
// Explicitly set `obj` as function execution context.
// Sets properties `a` and `bar` on `obj`.
Foo.call(obj); // 2
obj.bar(); // 2

// `this` references global object. Previously we already set property `a` on
// the global object.
console.log(global.a); // 2
// Node.js wraps files inside a function, so `this` references module.exports
// Foo.call(this);
console.log(this.a); // undefined

// 2
let RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area);
console.log(rect1.perimeter);
