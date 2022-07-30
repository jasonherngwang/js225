// 2
// `filter` is a higher-order func that takes a callback func.
// checkEven neither accepts nor returns a function.
let numbers = [1, 2, 3, 4];
function checkEven(number) {
  return number % 2 === 0;
}

numbers.filter(checkEven); // [2, 4]

// 3
let numbers3 = [1, 2, 3, 4];
function makeCheckEven() {
  return (num) => num % 2 === 0;
}

let checkEven3 = makeCheckEven();

console.log(numbers3.filter(checkEven3)); // [2, 4]

// 4
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
function makeListTransformer(func) {
  return (array) => array.map(func);
}

let timesTwo = makeListTransformer(function (number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]
