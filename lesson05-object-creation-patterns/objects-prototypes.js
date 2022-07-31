let parent = {};
let child = Object.create(parent);

// Object.getPrototypeOf
console.log(Object.getPrototypeOf(child) === parent); // true

// Object.prototype.isPrototypeOf
console.log(parent.isPrototypeOf(child)); // true

let sibling = {};

// Object.setPrototypeOf
Object.setPrototypeOf(sibling, parent);

console.log(Object.getPrototypeOf(sibling) === parent); // true
console.log(parent.isPrototypeOf(sibling)); // true

// Prototype chain
let a = {};
let b = Object.create(a);
let c = Object.create(b);

console.log(b.isPrototypeOf(c)); // true (traverse entire prototype chain)
console.log(a.isPrototypeOf(c)); // true
console.log(Object.prototype.isPrototypeOf(a)); // true

console.log(Object.getPrototypeOf(c) === b); // true (1 level up only)

// Prototypeless
let noPrototypeObj = Object.create(null);
console.log(Object.prototype.isPrototypeOf(noPrototypeObj)); // false

// Problems
// 1
let prot = {};
let foo = Object.create(prot);

// 2
console.log(Object.getPrototypeOf(foo) === prot); // true

// 3
console.log(prot.isPrototypeOf(foo)); // true

// 4
console.log(Object.prototype.isPrototypeOf(foo)); // true
