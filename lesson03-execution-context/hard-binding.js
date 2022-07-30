let object = {
  a: 'hello',
  b: 'world',
  foo() {
    return this.a + ' ' + this.b;
  },
};

let bar = object.foo;
console.log(bar()); // "undefined undefined"

let baz = object.foo.bind(object);
console.log(baz()); // "hello world"

let object2 = {
  a: 'hi',
  b: 'there',
};

console.log(baz.call(object2)); // "hello world" - `this` is still `object`

function logSomething(arg1, arg2) {
  console.log(`${this.a}: ${arg1} ${arg2}`);
}

let obj = { a: 'i am' };

let me = logSomething.bind(obj, 'legend');
let you = logSomething.bind(obj);

me();
me('cool');

you();
you('cool');
you('cool', '???');

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
