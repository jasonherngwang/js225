class Dog {
  #treatsEaten;

  constructor(name, treatsEaten) {
    this.name = name;
    this.#treatsEaten = treatsEaten;
  }

  numTreatsEaten() {
    return Math.max(this.#treatsEaten, 0);
  }

  feedTreat() {
    this.#treatsEaten += 1;
    console.log('Woof!');
  }
}

let spot = new Dog('Spot', 42);
console.log(spot.name); // Spot

// console.log(spot.#treatsEaten);
// SyntaxError: Private field '#treatsEaten' must be declared in an enclosing class
console.log(spot.treatsEaten); // undefined
console.log(spot.numTreatsEaten()); // 42
spot.feedTreat();
console.log(spot.numTreatsEaten()); // 43
