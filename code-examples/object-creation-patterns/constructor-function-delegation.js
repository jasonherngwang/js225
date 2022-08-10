// Constructor function with subclassing and behavior delegation

function Animal() {
  this.type = 'mammal';
}

// Shared by all Animals
Animal.prototype.breathe = function () {
  console.log("I'm breathing");
};

function Dog() {
  this.type = 'dog';
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Shared by all Dogs
Dog.prototype.bark = function () {
  console.log('Woof Woof!');
};

let goldenRetriever = new Dog();
let fruitBat = new Animal();

console.log(goldenRetriever); // Dog { type: 'dog' }
console.log(fruitBat); // Animal { type: 'mammal' }

goldenRetriever.breathe(); // I'm breathing
fruitBat.breathe(); // I'm breathing

goldenRetriever.bark(); // Woof Woof!
fruitBat.bark(); // TypeError: fruitBat.bark is not a function
