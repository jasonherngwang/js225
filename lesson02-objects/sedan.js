// All cars start out not moving, and sedans
// can accelerate about 8 miles per hour per second (mph/s).
// let sedan = {
//   speed: 0,
//   rate: 8,

//   // To accelerate, add the rate of acceleration to the current speed.
//   accelerate() {
//     this.speed += this.rate;
//   },
// };

// console.log(sedan);
// sedan.accelerate();
// console.log(sedan);

function makeCar(accelerationRate, brakingRate) {
  return {
    speed: 0,
    accelerationRate,
    brakingRate,
    accelerate() {
      this.speed += this.accelerationRate;
    },
    brake() {
      this.speed = Math.max(0, this.speed - this.brakingRate);
    },
  };
}

let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed); // 8
sedan.brake();
console.log(sedan.speed); // 2
sedan.brake();
console.log(sedan.speed); // 0

let hatchback = makeCar(9, 7);
hatchback.accelerate();
console.log(hatchback.speed); // 9

let coupe = makeCar(12, 10);
coupe.accelerate();
console.log(coupe.speed); // 12
