// Class declaration syntax
class Game {
  // Constructor method initializes state.
  constructor(name) {
    this.name = name;
  }

  // Shared behavior (instance methods) will be defined on Game.prototype.
  play() {
    console.log(`Let's play ${this.name}`);
  }
}

class IndoorGame extends Game {
  constructor(name, description, price) {
    // Here, `super` references the superclass's `constructor` method.
    // Comes before any use of `this`.
    super(name);
    this.description = description;
    this.price = price;
  }

  keepScore() {
    console.log(`${this.name} is a ${this.description} game.`);
  }
}

// Class expression syntax, with anonymous class
const BoardGame = class extends IndoorGame {
  constructor(name, description, price, numberOfPlayers) {
    super(name, description, price);
    this.numberOfPlayers = numberOfPlayers;
  }

  static takeOut() {
    console.log('Take board and pieces out of box.');
  }

  rollDice() {
    console.log(
      `All of the ${this.numberOfPlayers} players roll dice to see who goes first`
    );
  }
};

BoardGame.brand = 'Hasbro';

// Static methods and properties
BoardGame.takeOut(); // Take board and pieces out of box.
console.log(BoardGame.brand); // Hasbro

// Must use `new` operator with classes.
let monopoly = new BoardGame('Monopoly', 'try to win money', '19.99', '4');

console.log(monopoly);

monopoly.rollDice();
monopoly.play();
monopoly.keepScore();

// Examining objects
console.log(typeof Game); // function
console.log(monopoly instanceof Game); // true

console.log(monopoly.constructor); // [class BoardGame extends IndoorGame]
