// 1-2
// Won't execute. Need to use a function expression, not declaration.
// function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// }();
(function () {
  console.log("Sometimes, syntax isn't intuitive!");
})();

// 3
// Function sum hoisted to top. `var sum` re-declares the variable.
// During Execution phase, `sum` assigned to 0 and no longer references the
// function, so invoking sum(numbers) throws an error: "sum is not a function".
var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

// Using IIFE prevents naming conflict.
sum += (function sum(arr) {
  return arr.reduce(function (sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers);

console.log(sum);

// sum += sum(numbers); // ?

// 4
// const countdown = (function () {
//   return function (num) {
//     while (num >= 0) {
//       console.log(num);
//       num -= 1;
//     }
//   };
// })();

function countdown(count) {
  (function (n) {
    for (let i = n; i >= 0; i -= 1) {
      console.log(i);
    }
    console.log('Done!');
  })(count);
}
countdown(7);

// 6
function countdownRecursive(count) {
  (function countdownRecursiveInner(n) {
    console.log(n);
    if (n === 0) {
      console.log('Done!');
    } else {
      countdownRecursiveInner(n - 1);
    }
  })(count);
}
countdownRecursive(7);
