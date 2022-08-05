/*
https://launchschool.com/posts/490d79fa

Implement a Stack
- LIFO
- Push, Pop, Print
- Store elements in an Array

Requirements
- Instances should have a meaningul prototype
- Data is private
- Behavior located on prototype object
*/

// 1. Factory function

const createStack = () => {
  const stack = []; // Private; inside closure (GOOD)

  // Every instance has its own copy of all methods (BAD)
  return {
    push(elem) {
      stack.push(elem);
      return this;
    },

    pop() {
      return stack.pop();
    },

    print() {
      stack.forEach((elem) => console.log(elem));
    },
  };
};

let stack1 = createStack();

stack1.push(1);
stack1.push(2).push(3);
stack1.print();
// 1
// 2
// 3
console.log(stack1.pop()); // 3
console.log(stack1.pop()); // 2
stack1.print(); // 1

// stack1 and stack2 are independent objects
let stack2 = createStack();
stack2.push('a');
stack1.print(); // 1
stack2.print(); // a

// Private data `stack` is in closure of methods (GOOD)
console.log(stack1.stack); // undefined
console.log(Object.getPrototypeOf(stack1).stack); // undefined

// No meaningful prototype (BAD)
// Prototype of all instances is the default Object.prototype
console.log(Object.getPrototypeOf(stack1) === Object.prototype); // true
console.log(Object.getPrototypeOf(stack1) === Object.getPrototypeOf(stack2));
// true

// Behavior is defined on instance, not prototype. (BAD, Duplication)
console.log(stack1.hasOwnProperty('push')); // true
console.log(Object.getPrototypeOf(stack1).hasOwnProperty('push')); // false

// 2. OLOO + Closures
const Stack = (function () {
  // Keep track of all instances in this `stack` object of the prototype.
  const stack = {};
  let stackID;

  function incrementID() {
    stackID = (stackID || 0) + 1;
  }

  return {
    init() {
      incrementID();
      // Prevent changing `this.id`
      Object.defineProperty(this, 'id', {
        value: stackID,
        configurable: false,
        enumerable: false,
        writable: false,
      });
      stack[this.id] = [];
      return this;
    },

    push(elem) {
      stack[this.id].push(elem);
      return this;
    },

    pop() {
      return stack[this.id].pop();
    },

    print() {
      stack[this.id].forEach((elem) => console.log(elem));
    },
  };
})();

let olooStack1 = Object.create(Stack).init();
let olooStack2 = Object.create(Stack).init();

olooStack1.push(1).push(2).push(3);
olooStack1.print();
console.log(olooStack1.pop());
olooStack1.print();

// Private data `stack` is in closure of methods (GOOD)
console.log(olooStack1.stack); // undefined
console.log(Object.getPrototypeOf(olooStack1).stack); // undefined

// Meaningful prototype (GOOD)
console.log(Object.getPrototypeOf(olooStack1) === Stack); // true
console.log(Object.getPrototypeOf(olooStack1) === Object.prototype); // false
// Instances share same prototype
console.log(
  Object.getPrototypeOf(olooStack1) === Object.getPrototypeOf(olooStack2)
);
// true

// Behavior is defined on prototype (GOOD)
console.log(olooStack1.hasOwnProperty('push')); // false
console.log(Object.getPrototypeOf(olooStack1).hasOwnProperty('push')); // true
