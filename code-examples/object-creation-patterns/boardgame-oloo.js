let Game = {
  init(name) {
    this.name = name;
    return this;
  },
  play() {
    console.log(`Let's play ${this.name}`);
  },
};

let IndoorGame = Object.create(Game);

IndoorGame.init = function (name, description, price) {
  Game.init.call(this, name);
  this.description = description;
  this.price = price;
  return this;
};
IndoorGame.keepScore = function () {
  console.log(`${this.name} is a ${this.description} game. Let's keep score`);
};

let BoardGame = Object.create(IndoorGame);

BoardGame.init = function (name, description, price, numberOfPlayers) {
  IndoorGame.init.call(this, name, description, price);
  this.numberOfPlayers = numberOfPlayers;
  return this;
};

BoardGame.rollDice = function () {
  console.log(
    `All of the ${this.numberOfPlayers} players roll dice to see who goes first`
  );
};

let monopoly = Object.create(BoardGame);
monopoly.init('Monopoly', 'try to win money', '19.99', '4');

console.log(monopoly);

monopoly.rollDice();
monopoly.play();
monopoly.keepScore();
