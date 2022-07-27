/*
Expected output:
> const helloVictor = createGreeter('Victor');
> helloVictor.greet('morning');
= Good Morning Victor

Must use `this` to reference properties of the parent object. Otherwise
`morning`, `afternoon`, and `evening` will be treated as local variables which
are undefined.

Don't need to use `this.name` because `name` is a local var inside
`createGreeter`, and included in closure of function `greet`.
*/

function createGreeter(name) {
  return {
    name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          // msg += `${morning} ${name}`;
          msg += `${this.morning} ${name}`;
          break;
        case 'afternoon':
          // msg += `${afternoon} ${name}`;
          msg += `${this.afternoon} ${name}`;
          break;
        case 'evening':
          // msg += `${evening} ${name}`;
          msg += `${this.evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}

const helloVictor = createGreeter('Victor');
helloVictor.greet('morning');
