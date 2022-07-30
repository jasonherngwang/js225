// What do you think is logged on line 7?
// When creating an object using object literal syntax, what is the value of
// `this`? Since we are not invoking a method of `person` using `person` as the
// explicit receiver, the function execution syntax is the global object.
// Therefore `this.firstName` and `this.lastName` resolve to `undefined`.
// The string 'undefined undefined' will be logged. WRONG
// Since neither operand is a string, both will be converted to the number NaN.
const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);
