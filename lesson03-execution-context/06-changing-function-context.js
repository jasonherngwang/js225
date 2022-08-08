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

// Assigning an object property to a method - Arrays are also Objects.
// Calling the method using an explicit receiver will use the receiver as the
// execution context.
temperatures.average = average;
console.log(temperatures.average());

// Enumerable property names, including `average`.
console.log(Object.keys(temperatures));

// Enumerable and non-enumerable property names,
/// including `average` and `length`
console.log(Object.getOwnPropertyNames(temperatures));

// Indices 0, 1, 2, ... only
temperatures.forEach((x) => console.log(x));
