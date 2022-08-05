class Game {
  constructor(name) {
    this.name = name;
  }

  play() {
    console.log(`Let's play ${this.name}`);
  }
}

class IndoorGame extends Game {
  constructor(name, description, price) {
    super(name);
    this.description = description;
    this.price = price;
  }

  keepScore() {
    console.log(`${this.name} is a ${this.description} game.`);
  }
}

class BoardGame extends IndoorGame {
  constructor(name, description, price, numberOfPlayers) {
    super(name, description, price);
    this.numberOfPlayers = numberOfPlayers;
  }

  rollDice() {
    console.log(
      `All of the ${this.numberOfPlayers} players roll dice to see who goes first`
    );
  }
}

let monopoly = new BoardGame('Monopoly', 'try to win money', '19.99', '4');

console.log(monopoly);

monopoly.rollDice();
monopoly.play();
monopoly.keepScore();
