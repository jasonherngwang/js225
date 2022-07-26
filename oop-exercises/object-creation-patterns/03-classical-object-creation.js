/*
Implement the following diagram using the pseudo-classical approach. Subclasses
should inherit all of the superclass's methods. Reuse the constructors of the
superclass when implementing a subclass.
*/

// Pseudo-classical pattern
// Use constructor function to initialize state.
function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

// Add shared behavior to the constructor's function prototype.
Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.communicate = function () {
  console.log('Communicating');
};

Person.prototype.eat = function () {
  console.log('Eating');
};

Person.prototype.sleep = function () {
  console.log('Sleeping');
};

// Subclass from Person
// Invoke superclass' constructor to initialize state.
// Initialize state specific to the subclass.
function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}

// Reassign function prototoype so it inherits from superclass' function
// prototype. Reassign constructor as well.
Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;

// Add behavior shared by Doctor and its potential subclasses.
Doctor.prototype.diagnose = function () {
  console.log('Diagnosing');
};

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function () {
  console.log('Teaching');
};

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function () {
  console.log('Studying');
};

function GraduateStudent(
  firstName,
  lastName,
  age,
  gender,
  degree,
  graduateDegree
) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;

GraduateStudent.prototype.research = function () {
  console.log('Researching');
};

// ES6 class syntax
// class Person {
//   constructor(firstName, lastName, age, gender) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//   }

//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   communicate() {
//     console.log('Communicating');
//   }

//   eat() {
//     console.log('Eating');
//   }

//   sleep() {
//     console.log('Sleeping');
//   }
// }

// class Doctor extends Person {
//   constructor(firstName, lastName, age, gender, specialization) {
//     super(firstName, lastName, age, gender);
//     this.specialization = specialization;
//   }

//   diagnose() {
//     console.log('Diagnosing');
//   }
// }

// class Professor extends Person {
//   constructor(firstName, lastName, age, gender, subject) {
//     super(firstName, lastName, age, gender);
//     this.subject = subject;
//   }

//   teach() {
//     console.log('Teaching');
//   }
// }

// class Student extends Person {
//   constructor(firstName, lastName, age, gender, degree) {
//     super(firstName, lastName, age, gender);
//     this.degree = degree;
//   }

//   study() {
//     console.log('Studying');
//   }
// }

// class GraduateStudent extends Student {
//   constructor(firstName, lastName, age, gender, degree, graduateDegree) {
//     super(firstName, lastName, age, gender, degree);
//     this.graduateDegree = graduateDegree;
//   }

//   research() {
//     console.log('Researching');
//   }
// }

const person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person); // logs true
person.eat(); // logs 'Eating'
person.communicate(); // logs 'Communicating'
person.sleep(); // logs 'Sleeping'
console.log(person.fullName()); // logs 'foo bar'

const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person); // logs true
console.log(doctor instanceof Doctor); // logs true
doctor.eat(); // logs 'Eating'
doctor.communicate(); // logs 'Communicating'
doctor.sleep(); // logs 'Sleeping'
console.log(doctor.fullName()); // logs 'foo bar'
doctor.diagnose(); // logs 'Diagnosing'

const graduateStudent = new GraduateStudent(
  'foo',
  'bar',
  21,
  'gender',
  'BS Industrial Engineering',
  'MS Industrial Engineering'
);
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat(); // logs 'Eating'
graduateStudent.communicate(); // logs 'Communicating'
graduateStudent.sleep(); // logs 'Sleeping'
console.log(graduateStudent.fullName()); // logs 'foo bar'
graduateStudent.study(); // logs 'Studying'
graduateStudent.research(); // logs 'Researching'
