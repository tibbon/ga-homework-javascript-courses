// Application namespace
var CourseApp = {};

// =========== STUDENT ==============
CourseApp.Student = function(name) {
  this.name = name;
};

sheldon  = new CourseApp.Student("Sheldon Doe");
sally    = new CourseApp.Student("Sally Mander");
satoshi  = new CourseApp.Student("Satoshi Nakamoto");
sara     = new CourseApp.Student("Sara Nader");
students = [sheldon, sally, satoshi, sara];

// This will give all the students access to a method .generate_html
// which you can use to render each student to the page indvidiually
CourseApp.Student.prototype.generate_html = function(students) {
  var studentHTML = document.getElementById('students').innerHTML,
  max = students.length, i = 0;

  for (; i < max; ) {
    studentHTML += "<li class='student'>" + students[i].name + "</li>";
    i += 1;
  }
  document.getElementById('students').innerHTML = studentHTML;
};

CourseApp.Student.prototype.generate_html(students);

// ===========  TEACHER ==============
CourseApp.Teacher = function(name) {
  this.name = name;
};

knightly   = new CourseApp.Student("Mrs. Knightly");
phil       = new CourseApp.Student("Dr. Phil");
krugman    = new CourseApp.Student("Mr. Krugman");
paul       = new CourseApp.Student("Prof. Paul");
teachers   = [knightly, phil, krugman, paul];

// This will give all the teachers access to a method .generate_html
// which you can use to render each student to the page indvidiually
CourseApp.Teacher.prototype.generate_html = function(teachers) {
var teacherHTML = document.getElementById('teachers').innerHTML,
  max = teachers.length, i = 0;

  for (; i < max; ) {
    teacherHTML += "<li class='teacher'>" + teachers[i].name + "</li>";
    i += 1;
  }
  document.getElementById('teachers').innerHTML = teacherHTML;
};

CourseApp.Teacher.prototype.generate_html(teachers);

// =========== COURSE ==============
CourseApp.Course = function(name) {
  this.name = name;
};

// This will give all the courses access to a method .generate_html
// which you can use to render each student to the page indvidiually
CourseApp.Course.prototype.generate_html = function() {
  var course_index = ['Biology', 'Chemistry', 'Physics', 'English', 'History', 'Calculus', 'Algebra', 'Trignometry', 'Computer Science'],
  courseHTML = document.getElementById('courses').innerHTML,
  max = course_index.length, i = 0, ul = createElement('ul');


  courseHTML.appendChild(ul);
};

CourseApp.Course();



///////////////////////////////////////////////////////////
//                                                       //
//            BONUS STAGE BELOW                          //
//                                                       //
///////////////////////////////////////////////////////////


// The following 3 methods will run ONLY when you click the 
// 'Add Foo' button in the HTML. Ignore what the 'e' is in each
// of the methods

// For example, if I click the 'Add Teacher' button on the page
// the 'CourseApp.add_teacher' method will run

CourseApp.add_teacher = function(e){
  // Prompt the user for information to add a teacher
  // Append this teacher to the list of teachers on the page
};

CourseApp.add_course = function(e){
  // Prompt the user for information to add a course
  // Append this course to the list of courses on the page
};

CourseApp.add_student = function(e){
  // Prompt the user for information to add a student
  // Append this student to the list of students on the page
};