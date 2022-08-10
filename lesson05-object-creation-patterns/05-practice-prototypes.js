// 1
// Write a function that returns the object on a given object's prototype chain
// where a property is defined.
// function getDefiningObject(object, propKey) {
//   while (object && !object.hasOwnProperty(propKey)) {
//     object = Object.getPrototypeOf(object);
//   }
//   return object;
// }
function getDefiningObject(object, propKey) {
  // Take advantage of the fact that the prototype of Object.prototype is `null`
  if (!object) return object;

  return object.hasOwnProperty(propKey)
    ? object
    : getDefiningObject(Object.getPrototypeOf(object), propKey);
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar); // => true
console.log(getDefiningObject(qux, 'e')); // => null

// 2
// function shallowCopy(object) {
//   let copy = Object.create(Object.getPrototypeOf(object));

//   Object.getOwnPropertyNames(object).forEach((name) => {
//     copy[name] = object[name];
//   });
//   return copy;
// }

function shallowCopy(object) {
  let copy = Object.create(Object.getPrototypeOf(object));

  // for..in includes inherited properties; we only care about the object's own.
  for (let prop in object) {
    // if (object.hasOwnProperty(prop)) {
    if (Object.prototype.hasOwnProperty.call(object, prop)) {
      copy[prop] = object[prop];
    }
  }

  return copy;
}

let foo2 = {
  a: 1,
  b: 2,
};

let bar2 = Object.create(foo2);
bar2.c = 3;
bar2.say = function () {
  console.log('c is ' + this.c);
};

let baz2 = shallowCopy(bar2);
console.log(baz2.a); // => 1
baz2.say(); // => c is 3
console.log(baz2.hasOwnProperty('a')); // false
console.log(baz2.hasOwnProperty('b')); // false

// 3
function extend(destination) {
  // Index 0 is `destination`.
  for (let i = 1; i < arguments.length; i++) {
    let sourceObj = arguments[i];
    for (let prop in sourceObj) {
      if (Object.prototype.hasOwnProperty.call(sourceObj, prop)) {
        destination[prop] = sourceObj[prop];
      }
    }
  }

  return destination;
}

// function extend(destination, ...sources) {
//   return Object.assign(destination, ...sources);
// }

let foo3 = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe',
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo3, joe, funcs);

console.log(object.b.x); // => 1
object.sayHello(); // => Hello, Joe
