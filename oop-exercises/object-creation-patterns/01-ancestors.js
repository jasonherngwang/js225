/*
Implement an ancestors method that returns the prototype chain (ancestors) of a
calling object as an array of object names.
*/

// Iterative
// Object.prototype.ancestors = function() {
//   let currentObj = this;
//   let ancestorNames = [];
//   while (Object.getPrototypeOf(currentObj) !== null) {
//     ancestorNames.push(
//       Object.getPrototypeOf(currentObj).name || 'Object.prototype'
//     );
//     currentObj = Object.getPrototypeOf(currentObj);
//   }
//   return ancestorNames;
// }

// Recursive
// Object.prototype.ancestors = function ancestors() {
//   const ancestor = Object.getPrototypeOf(this);
  
//   if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
//     return [ancestor.name].concat(ancestor.ancestors());
//   }
  
//   return ['Object.prototype'];
// }

// Recursive; checks base case first
Object.prototype.ancestors = function ancestors() {
  const ancestor = Object.getPrototypeOf(this);
  
  // Base case
  if (!Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
    return ['Object.prototype'];
  }
  
  // Recursive call
  return [ancestor.name].concat(ancestor.ancestors());
}


// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']