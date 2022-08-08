// 2
// `filter` is a higher-order func that takes a callback func as an arg.
// checkEven neither accepts nor returns a function.
let numbers = [1, 2, 3, 4];
function checkEven(number) {
  return number % 2 === 0;
}

numbers.filter(checkEven); // [2, 4]

// 3
// Return a callback function that can be passed to `filter`.
let numbers3 = [1, 2, 3, 4];
function makeCheckEven() {
  return (num) => num % 2 === 0;
}

let checkEven3 = makeCheckEven();

console.log(numbers3.filter(checkEven3)); // [2, 4]

// 4
// `execute` takes a func but doesn't return one. Still a higher-order func.
function execute(func, operand) {
  return func(operand);
}

console.log(
  execute(function (number) {
    return number * 2;
  }, 10)
); // 20

console.log(
  execute(function (string) {
    return string.toUpperCase();
  }, 'hey there buddy')
); // "HEY THERE BUDDY"

// 5
// makeListTransformer accepts and returns a function
function makeListTransformer(func) {
  return (array) => array.map(func);
}

let timesTwo = makeListTransformer(function (number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]
