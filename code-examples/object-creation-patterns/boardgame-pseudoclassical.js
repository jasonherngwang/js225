function Game(name) {
  this.name = name;
}
Game.prototype.play = function () {
  console.log(`Let's play ${this.name}`);
};

function IndoorGame(name, description, price) {
  // Call superclass's constructor.
  Game.call(this, name);
  this.description = description;
  this.price = price;
}
IndoorGame.prototype = Object.create(Game.prototype);
// Reassign constructor from Game to IndoorGame.
IndoorGame.prototype.constructor = IndoorGame;

IndoorGame.prototype.keepScore = function () {
  console.log(`${this.name} is a ${this.description} game.`);
};

function BoardGame(name, description, price, numberOfPlayers) {
  IndoorGame.call(this, name, description, price);
  this.numberOfPlayers = numberOfPlayers;
}
BoardGame.prototype = Object.create(IndoorGame.prototype);
BoardGame.prototype.constructor = BoardGame;

BoardGame.prototype.rollDice = function () {
  console.log(
    `All of the ${this.numberOfPlayers} players roll dice to see who goes first`
  );
};

BoardGame.takeOut = () => console.log('Take board and pieces out of box.');
BoardGame.brand = 'Hasbro';

// Static methods and properties
BoardGame.takeOut(); // Take board and pieces out of box.
console.log(BoardGame.brand); // Hasbro

let monopoly = new BoardGame('Monopoly', 'try to win money', '19.99', '4');

console.log(monopoly);

monopoly.rollDice();
monopoly.play();
monopoly.keepScore();
