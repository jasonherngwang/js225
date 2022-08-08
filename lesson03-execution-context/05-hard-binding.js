// Example 1: bind is permanent
let object = {
  a: 'hello',
  b: 'world',
  foo() {
    return this.a + ' ' + this.b;
  },
};

let bar = object.foo;
console.log(bar()); // "undefined undefined" (implicit FEC is global object)

let baz = object.foo.bind(object);
console.log(baz()); // "hello world" (object.foo permanently bound to object)

console.log(bar()); // "undefined undefined"
// original function not altered by bind

let object2 = {
  a: 'hi',
  b: 'there',
};

console.log(baz.call(object2)); // "hello world" - `this` is still `object`
// bind is permanent. Invoking call on the returned object will not do anything.

// Example 2: Binding context and arguments
function logSomething(arg1, arg2) {
  console.log(`${this.a}: ${arg1} ${arg2}`);
}

let obj = { a: 'i am' };

// Only a context is passed
let you = logSomething.bind(obj);
you(); // i am: undefined undefined
you('cool'); // i am: cool undefined
you('cool', '???'); // i am: cool ???

// 'legend' permanently takes the place of the first argument arg1.
let me = logSomething.bind(obj, 'legend');
// Passed args occupy the second argument "slot" onward
me(); // i am: legend undefined
me('cool'); // i am: legend cool

// Example 3: Original function is unaltered
let greetings = {
  morning: 'Good morning, ',
  afternoon: 'Good afternoon, ',
  evening: 'Good evening, ',

  greeting(name) {
    let currentHour = new Date().getHours();

    if (currentHour < 12) {
      console.log(this.morning + name);
    } else if (currentHour < 18) {
      console.log(this.afternoon + name);
    } else {
      console.log(this.evening + name);
    }
  },
};

let spanishWords = {
  morning: 'Buenos dias, ',
  afternoon: 'Buenas tardes, ',
  evening: 'Buenas noches, ',
};

let spanishGreeter = greetings.greeting.bind(spanishWords);

spanishGreeter('Jose'); // Buenos dias, Jose
spanishGreeter('Juan'); // Buenos dias, Juan
greetings.greeting('Jason'); // Good morning, Jason (original function unaltered)
