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

let school = (() => {
  const students = [];
  const ALLOWED_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];
  return {
    addStudent(name, year) {
      if (ALLOWED_YEARS.includes(year)) {
        const student = createStudent(name, year);
        students.push(student);
        return student;
      } else {
        console.log('Invalid Year');
      }
    },

    enrollStudent(student, courseName, courseCode) {
      student.addCourse({ name: courseName, code: courseCode });
    },

    getCourse(student, courseName) {
      return student.listCourses().filter(({ name }) => name === courseName)[0];
    },

    addGrade(student, courseName, grade) {
      const course = this.getCourse(student, courseName);

      if (course) {
        course.grade = grade;
      }
    },

    getReportCard(student) {
      student.listCourses().forEach(({ grade, name }) => {
        if (grade) {
          console.log(`${name}: ${String(grade)}`);
        } else {
          console.log(`${name}: In progress`);
        }
      });
    },

    courseReport(courseName) {
      const courseStudents = students
        .map((student) => {
          const course = this.getCourse(student, courseName) || {
            grade: undefined,
          };
          return { name: student.name, grade: course.grade };
        })
        .filter(({ grade }) => grade);

      if (courseStudents.length > 0) {
        console.log(`=${courseName} Grades=`);

        const average =
          courseStudents.reduce((total, { name, grade }) => {
            console.log(`${name}: ${String(grade)}`);
            return total + grade;
          }, 0) / courseStudents.length;

        console.log('---');
        console.log(`Course Average: ${String(average)}`);
      }
    },
  };
})();

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
