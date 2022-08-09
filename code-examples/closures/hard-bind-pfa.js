// bind and PFA

// Generator function
function myBind(func, context, ...boundArgs) {
  return function (...args) {
    // Applicator function "pre-fills" boundArgs before args
    return func.apply(context, boundArgs.concat(args));
  };
}

let dog = {
  name: 'Spots',
};

// Primary function
let makeSound = function (sound1, sound2) {
  return `${this.name} ${sound1} and ${sound2}`;
};

// 'woofs' always occupies first argument slot, sound1
let dogMakesSound = myBind(makeSound, dog, 'woofs');

// 'barks' occupies second slot, sound2
console.log(dogMakesSound('barks')); // Spots woofs and barks

// Extra args ignored
console.log(dogMakesSound('barks', 'yelp', 'growls'));
