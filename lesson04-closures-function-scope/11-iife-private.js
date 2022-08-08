// Private scope
(function (verb) {
  let cat = 'Paws';
  console.log(cat + ' ' + verb);
})('eats');

// Private data
// Return a function
let catCount = (function () {
  let numCats = 0;

  return function () {
    numCats += 1;
    return numCats;
  };
})();
console.log(catCount()); // 1
console.log(catCount()); // 2
console.log(catCount()); // 3

// Return an object
let myZoo = (function () {
  let animals = [];

  function isUnique(newAnimal) {
    return animals.every((animal) => {
      return newAnimal.name !== animal.name;
    });
  }

  return {
    counts() {
      animals.forEach((animal) =>
        console.log(animal.name + ' ' + animal.count)
      );
    },
    addAnimal(newAnimal) {
      if (isUnique(newAnimal)) animals.push(newAnimal);
    },
  };
})();

myZoo.addAnimal({ name: 'Cheetah', count: 1 });
myZoo.counts();
myZoo.addAnimal({ name: 'Cheetah', count: 200 }); // Duplicate
myZoo.addAnimal({ name: 'Tiger', count: 1 });
myZoo.counts();

// myZoo.animals.push({ name: 'Panda', count: 3 }); // Doesn't work
// myZoo.counts();
