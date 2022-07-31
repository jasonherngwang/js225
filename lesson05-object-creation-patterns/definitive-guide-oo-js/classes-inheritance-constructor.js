// Prototypal model

// Class prototype
let MyClass = {
  // Initialization function
  constructor(value) {
    this._val = value; // _variable indicates private property
  },
  get() {
    return this._val;
  },
};

// Subclass prototype
let SubMyClass = Object.create(MyClass);
SubMyClass.get = function () {
  return MyClass.get.call(this) + '!';
};

// Instance of class
let a = Object.create(MyClass); // 1. Extend prototype
a.constructor('a'); // 2. Initialize the data
console.log(a.get()); // a

// Instance of subclass
let b = Object.create(SubMyClass);
b.constructor('b'); // `this` is `b` when invoking constructor
console.log(b.get()); // b!
