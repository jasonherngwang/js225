let parent = {};
let child = Object.create(parent);

// Object.getPrototypeOf
console.log(Object.getPrototypeOf(parent) === Object.prototype); // true
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

console.log(b.isPrototypeOf(c)); // true
console.log(a.isPrototypeOf(c)); // true (traverse entire prototype chain)
console.log(Object.prototype.isPrototypeOf(a)); // true

console.log(Object.getPrototypeOf(c) === b); // true (1 level up only)

// Prototypeless
let noPrototypeObj = Object.create(null);
console.log(Object.prototype.isPrototypeOf(noPrototypeObj)); // false
