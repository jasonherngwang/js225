// 1
// Write a function named greet that takes two arguments and logs a greeting:
function greet(greeting, name) {
  let capitalizedGreeting = greeting[0].toUpperCase() + greeting.slice(1);
  console.log(`${capitalizedGreeting}, ${name}!`);
}

greet('howdy', 'Joe');
// Howdy, Joe!
greet('good morning', 'Sue');
// Good morning, Sue!

// 2
// Use PFA

function partial(primary, arg1) {
  return function (arg2) {
    return primary(arg1, arg2);
  };
}

const sayHello = partial(greet, 'hello');
sayHello('Brandon');
const sayHi = partial(greet, 'hi');
sayHi('Sarah');
