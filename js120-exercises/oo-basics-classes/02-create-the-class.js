class Cat {
  constructor(name) {
    // Instance property
    this.name = name;
  }

  // Static property
  static animalType = 'cat';

  // Static method
  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }

  // Instance methods
  personalGreeting() {
    console.log(`Hello! My name is ${this.name}!`);
  }

  rename(name) {
    this.name = name;
  }
}

console.log(Cat.animalType); // cat
Cat.genericGreeting(); // Hello! I'm a cat!

let kitty = new Cat('Sophie');
console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe

kitty.personalGreeting(); // Hello! My name is Chloe!
