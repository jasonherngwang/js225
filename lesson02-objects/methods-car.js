let car = {
  fuel: 10,
  running: false,
  stop() {
    if (this.running) {
      console.log("Stopping");
      this.running = false;
    } else {
      console.log("Already off");
    }
  },
  start() {
    if (this.fuel === 0) {
      console.log("Out of fuel");
    } else if (this.running === true) {
      console.log("Already running");
    } else {
      console.log("Starting");
      this.running = true;
    }
  },
  drive(distance) {
    const DISTANCE_PER_FUEL = 30.0;
    let fuelRequired = distance / DISTANCE_PER_FUEL;
    let fuelConsumed = Math.min(this.fuel, fuelRequired);
    let actualDistanceTraveled = fuelConsumed * DISTANCE_PER_FUEL;
    if (!this.running) {
      console.log("Need to start car first");
    } else if (this.fuel === 0) {
      console.log("No fuel");
    } else {
      this.fuel -= fuelConsumed;
      console.log(
        `Drove ${actualDistanceTraveled} miles, consuming ${fuelConsumed} fuel, ${this.fuel} gal remaining`
      );
    }
  },
};

car.start();
car.drive(100);
car.start();
car.stop();
car.drive();
car.start();
car.fillUp = function () {
  this.fuel = 10;
};
car.fillUp();
car.drive(2000);
car.stop();
