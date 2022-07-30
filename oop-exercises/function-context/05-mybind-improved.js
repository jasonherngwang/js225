function myBind(func, context, ...boundArgs) {
  return function (...args) {
    return func.apply(context, boundArgs.concat(args));
  };
}

let dog = {
  name: 'Spots',
};

let makeSound = function (sound1, sound2) {
  return `${this.name} ${sound1} and ${sound2}`;
};

let dogMakesSound = myBind(makeSound, dog, 'woofs');
console.log(dogMakesSound('barks'));
console.log(dogMakesSound('barks', 'yelp', 'growls')); // Extra args ignored
