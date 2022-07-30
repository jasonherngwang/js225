function myBind(func, context) {
  return function (...args) {
    return func.apply(context, args);
  };
}

let dog = {
  name: 'Spots',
};

let makeSound = function (sound) {
  return `${this.name} ${sound}`;
};

let dogMakesSound = myBind(makeSound, dog);
console.log(dogMakesSound('barks'));
