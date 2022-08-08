// Constructor function with subclassing and prototypal inheritance

function Animal() {
  this.type = 'mammal';
}

Animal.prototype.breathe = function () {
  console.log("I'm breathing");
};

function Dog() {
  this.type = 'dog';
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log('Woof Woof!');
};

let fruitBat = new Animal();
let goldenRetriever = new Dog();

console.log(fruitBat);
console.log(goldenRetriever);

fruitBat.breathe();
goldenRetriever.breathe();

fruitBat.bark();
goldenRetriever.bark();
