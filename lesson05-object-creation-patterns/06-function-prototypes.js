let Foo = function () {}; // Constructor function
let obj = Foo.prototype; // `prototype` property possessed by all functions

// Create instances using Foo; both inherit from Foo.prototype
let bar = new Foo();
let baz = new Foo();

Object.getPrototypeOf(bar) === obj; // true
Object.getPrototypeOf(baz) === obj; // true

bar.constructor === Foo; // true; bar is created from Foo
baz.constructor === Foo; // true; baz is created from Foo
bar instanceof Foo; // true; bar is an instance of Foo
baz instanceof Foo; // true; baz is an instance of Foo
