// 1
let shape = {
  getType() {
    return this.type;
  },
};

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = 'triangle';
}

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function () {
  return this.a + this.b + this.c;
};
Triangle.prototype.constructor = Triangle;

let t = new Triangle(3, 4, 5);
console.log(t.constructor); // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t)); // true
console.log(t.getPerimeter()); // 12
console.log(t.getType()); // "triangle"

// 2
function User(first, last) {
  // ...
  console.log(this.constructor === User);
  console.log(this instanceof User);
  if (this.constructor === User) {
    this.name = `${first} ${last}`;
  } else {
    return {
      name: `${first} ${last}`,
    };
  }
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name); // => Jane Doe
console.log(user1.name); // => John Doe
console.log(user2.name); // => John Doe

// 3
function createObject(obj) {
  // let newObj = {};
  // Object.setPrototypeOf(newObj, obj);
  // return newObj;

  // Temporary constructor function
  function F() {}
  // Reassign prototype
  F.prototype = obj;
  return new F();
}

let foo = {
  a: 1,
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar)); // true

// 4
let foo4 = {
  a: 1,
};

// Shouldn't add properties to Object.prototype
Object.prototype.begetObject = function () {
  function F() {}
  F.prototype = this;
  return new F();
};

let bar4 = foo4.begetObject();
console.log(foo4.isPrototypeOf(bar4)); // true

// 5
function neww(constructor, args) {
  let newObj = Object.create(constructor.prototype);
  let result = constructor.apply(newObj, args);
  return typeof result === 'object' ? result : newObj;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function () {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting(); // => Hello, John Doe
console.log(john.constructor); // Person(firstName, lastName) {...}
