function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    listCourses() {
      return this.courses;
    },
    addCourse(course) {
      this.courses.push(course);
    },
    addNote(code, note) {
      const course = this.courses.filter((course) => course.code === code)[0];

      if (course) {
        if (course.notes) {
          course.notes.push(note);
        } else {
          course.notes = [note];
        }
      }
    },
    viewNotes() {
      this.courses.forEach((course) => {
        if (course.notes) {
          console.log(`${course.name}: ${course.notes.join('; ')}`);
        }
      });
    },
    updateNote(code, note) {
      const course = this.courses.filter((course) => course.code === code)[0];
      if (course) course.notes = [note];
    },
  };
}

let school = {
  students: [],
  // Returns a student object, which can later be passed as an argument.
  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      let newStudent = createStudent(name, year);
      this.students.push(newStudent);
      return newStudent;
    } else {
      console.log('Invalid Year');
    }
  },
  enrollStudent(student, courseName, courseCode) {
    student.addCourse({ name: courseName, code: courseCode });
  },
  addGrade(student, courseName, grade) {
    let selectedCourse = student
      .listCourses()
      .filter(({ name }) => name === courseName)[0];

    if (selectedCourse) selectedCourse.grade = grade;
  },
  getReportCard(student) {
    student.listCourses().forEach(({ grade, name }) => {
      console.log(`${name}: ${grade || 'In progress'}`);
    });
  },
  courseReport(courseName) {
    let grades = [];
    this.students.forEach((student) => {
      let course = student
        .listCourses()
        .filter(({ name }) => name === courseName)[0];

      if (course) {
        if (course.grade !== undefined) {
          grades.push([student.name, course.grade]);
        }
      }
    });
    if (grades.length === 0) return;
    let sumGrades = grades.reduce((sum, grade) => sum + grade[1], 0);
    let averageGrade = sumGrades / grades.length;

    console.log(`=${courseName} Grades=`);
    grades.forEach((grade) => console.log(`${grade[0]}: ${grade[1]}`));
    console.log('---');
    console.log(`Course Average: ${averageGrade}`);
  },
};

let foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, 'Math', 101);
school.addGrade(foo, 'Math', 95);
school.enrollStudent(foo, 'Advanced Math', 102);
school.addGrade(foo, 'Advanced Math', 90);
school.enrollStudent(foo, 'Physics', 202);

let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, 'Math', 101);
school.addGrade(bar, 'Math', 91);

let qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, 'Math', 101);
school.addGrade(qux, 'Math', 93);
school.enrollStudent(qux, 'Advanced Math', 102);
school.addGrade(qux, 'Advanced Math', 90);

school.getReportCard(foo);
// Math: 95
// Advanced Math: 90
// Physics: In progress

school.getReportCard(bar);
school.getReportCard(qux);

school.courseReport('Math');
// =Math Grades=
// foo: 95
// bar: 91
// qux: 93
// ---
// Course Average: 93
school.courseReport('Advanced Math');
// =Advanced Math Grades=
// foo: 90
// qux: 90
// ---
// Course Average: 90
school.courseReport('Physics');
// undefined
