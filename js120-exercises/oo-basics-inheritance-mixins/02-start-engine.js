class Vehicle {
  constructor(year) {
    this.year = year;
  }

  startEngine() {
    return 'Ready to go!';
  }
}

class Truck extends Vehicle {
  constructor(year, bedType) {
    super(year);
    this.bedType = bedType;
  }

  startEngine(speed) {
    return super.startEngine() + ` Drive ${speed}, please!`;
  }
}

let truck1 = new Truck(2003, 'Short');
console.log(truck1.year);
console.log(truck1.bedType);

console.log(truck1.startEngine('fast'));

let truck2 = new Truck();
console.log(truck2.startEngine('slow'));
