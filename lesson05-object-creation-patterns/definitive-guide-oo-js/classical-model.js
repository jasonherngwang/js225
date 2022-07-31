// Classical model

// Constructor
function MyClass(value) {
  this._val = value;
}

// Update the prototype automatically created in association
// with the constructor
MyClass.prototype.get = function () {
  return this._val;
};

// Instantiate objects from prototype
let a = new MyClass('a');
console.log(a.get()); // a

// Subclass constructor
function SubMyClass(value) {
  MyClass.call(this, value);
}

// Replace prototype with new object that extends main class's
// prototype.
SubMyClass.prototype = Object.create(MyClass.prototype);
SubMyClass.prototype.constructor = SubMyClass;
SubMyClass.prototype.get = function () {
  return MyClass.prototype.get.call(this) + '!';
};

let b = new SubMyClass('b');
console.log(b.get()); // b!
