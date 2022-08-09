// Use IIFE to set value of `message` property directly.
const greeter = {
  message: (() => {
    const name = 'Naveed';
    const greeting = 'Hello';
    return `${greeting} ${name}!`;
  })(),
  sayGreetings() {
    console.log(this.message);
  },
};

greeter.sayGreetings(); // Hello Naveed!

// Wrap all logic in IIFE
const greeter2 = (function (name, greeting) {
  return {
    message: `${greeting} ${name}!`,
    sayGreetings() {
      console.log(this.message);
    },
  };
})('Naveed', 'Hello');

greeter2.sayGreetings(); // Hello Naveed!
