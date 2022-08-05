// Executed in Node.js

var foo = 'foo';
bar = 'bar';
let qux = 'qux';

// Only undeclared variables are set as properties of the global object.
// Declared variables have module scope.
console.log(global.foo); // => undefined
console.log(global.bar); // => bar
console.log(global.qux); // => undefined

// `this` is {}
console.log(this.foo); // => undefined
console.log(this.bar); // => undefined
console.log(this.qux); // => undefined
console.log(this); // => {}

this.foo = 'foo';
console.log(this.foo); // => foo
