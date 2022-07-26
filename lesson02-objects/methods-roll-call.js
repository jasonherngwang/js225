let me = {
  firstName: 'Jason',
};

// Add method using dot notation
me.lastName = 'Wang';

console.log(me); // { firstName: 'Jason', lastName: 'Wang' }

// Create others
let person1 = {
  firstName: '',
};

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

fullName(me);
