let temperatures = [53, 86, 12, 43];

function average() {
  let total = 0;
  let i;
  for (i = this.length - 1; i >= 0; i -= 1) {
    total += this[i];
  }

  return total / this.length;
}

console.log(average(temperatures)); // => NaN

// Temporary binding with `call` and `apply`
console.log(average.call(temperatures));
console.log(average.apply(temperatures));

// Permanent binding with `bind`
let averageTemperature = average.bind(temperatures);
console.log(averageTemperature());

// Assigning an object property to a method
// Calling the method using an explicit receiver will use the receiver as the
// execution context.
temperatures.average = average;
console.log(temperatures.average());
console.log(Object.keys(temperatures));
console.log(Object.getOwnPropertyNames(temperatures));
temperatures.forEach((x) => console.log(x));
