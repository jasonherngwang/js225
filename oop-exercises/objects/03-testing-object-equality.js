/*
Problem
Check deep equality of two objects, i.e. if they have the same key/value pairs.

Requirements
- Assume that objects don't preserve the order of their entries.
- "Deep Equality" means that we must examine every level of nesting.
  - We must drill down until we are comparing primitive values, not object
    identity.
- "Equality" means strict equality of two primitives.
- If two objects have different numbers of entries, they are not equal.
- Two empty objects are equal.

Questions
- Need to compare equality of object methods? No.
- Considered inherited properties? No.
- Need to consider non-enumerable properties? Unsure.

Examples


Algorithm
- If either argument is a primitive, compare them immediately.
  - If value is `null` or `typeof` does NOT return 'object', it is a primitive.
- Else, check deep equality of objects.
  - Check that the objects have the same number of keys, and the same strings
    or symbols as keys.
  - For every key, recursively call the object comparison function on the values
    associated with that key, from both objects.
    - If the values are primitives, they will be compared immediately.
      Otherwise the recursive call will keep going.
*/

// function objectsEqual(obj1, obj2) {
//   return (Object.keys(obj1).length === Object.keys(obj2).length) &&
//     (Object.keys(obj1).every(key => key in obj2 && obj1[key] === obj2[key]));
// }

// From Ethan's solution

function valuesEqual(value1, value2) {
  if (isPrimitive(value1) || isPrimitive(value2)) return value1 === value2;
  return objectsEqual(value1, value2);
}

function isPrimitive(value) {
  return value === null || typeof value !== 'object';
}

function objectsEqual(obj1, obj2) {
  const obj1Keys = Object.getOwnPropertyNames(obj1).sort();
  const obj2Keys = Object.getOwnPropertyNames(obj2).sort();
  
  if (arraysEqual(obj1Keys, obj2Keys)) {
    return obj1Keys.every(key => valuesEqual(obj1[key], obj2[key]));
  }
  
  return false;
}

function arraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;
  return array1.every((elem, idx) => elem === array2[idx]);
}

// Generic cases
console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 0}, {a: 0}));                      // true
console.log(objectsEqual([1, false, null], [1, false, null]));                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

// Multiple levels of nesting
console.log(objectsEqual({a: ['foo', {b: 'bar'}]}, {a: ['foo', {b: 'bar'}]})); // true


// Order doesn't matter
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: 'bar', a: 'foo'})); // true

// Edge cases

// Empty objects are equal
console.log(objectsEqual({}, {})); // true

// Different number of keys => Not equal
console.log(objectsEqual({a: 'foo'}, {})); // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'})); // false
// Nested
console.log(objectsEqual({a: ['foo', {b: 'bar'}]}, {a: ['foo', {b: 'qux'}]})); // false