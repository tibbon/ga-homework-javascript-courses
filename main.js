// Application namespace
var CourseApp = {};

// =========== STUDENT ==============
CourseApp.Student = function(name) {
       this.name = name;
}

p1 = new CourseApp.Student('Emma');
p2 = new CourseApp.Student('Abby');
p3 = new CourseApp.Student('Cori');
p4 = new CourseApp.Student('Amal');
var people = [p1, p2, p3, p4]
// This will give all the students access to a method .generate_html
// which you can use to render each student to the page indvidiually
CourseApp.Student.prototype.generate_html = function(people){
	var i = 0;
	max = people.length;
	students = document.getElementById('students').innerHTML;
	for(; i < max;) {
		students += "<li class='student-list'>" + people[i].name + "</li>";
		i += 1;
	}
	document.getElementById('students').innerHTML = students;
}

// ===========  TEACHER ==============
CourseApp.Teacher = function(name) {
           this.name = name;
}

s1 = new CourseApp.Teacher('Teddy');
s2 = new CourseApp.Teacher('Tom');
s3 = new CourseApp.Teacher('David');
s4 = new CourseApp.Teacher('Matt');
var teachers = [s1, s2, s3, s4]
// This will give all the teachers access to a method .generate_html
// which you can use to render each student to the page indvidiually
CourseApp.Teacher.prototype.generate_html = function(teachers){
	var i = 0;
	max = teachers.length;
	teacherHTML = document.getElementById('teachers').innerHTML;
	for(; i < max;) {
		teacherHTML += "<li class='teacher-list'>" + teachers[i].name + "</li>";
		i += 1;
	}
	document.getElementById('teachers').innerHTML = teacherHTML;
}



// =========== COURSE ==============
CourseApp.Course = function(name) {
           this.name = name;
}

c1 = new CourseApp.Course('JavaScript');
c2 = new CourseApp.Course('Ruby');
c3 = new CourseApp.Course('HTML');
c4 = new CourseApp.Course('CSS');
var courses = [c1, c2, c3, c4]
// This will give all the courses access to a method .generate_html
// which you can use to render each student to the page indvidiually
CourseApp.Course.prototype.generate_html = function(){ 	
	var i = 0;
	max = courses.length;
	courseHTML = document.getElementById('courses').innerHTML;
	for(; i < max;) {
		courseHTML += "<li class='course-list'>" + courses[i].name + "</li>";
		i += 1;
	}
	document.getElementById('courses').innerHTML = courseHTML;
}

// ///////////////////////////////////////////////////////////
// //                                                       //
// //            BONUS STAGE BELOW                          //
// //                                                       //
// ///////////////////////////////////////////////////////////


// // The following 3 methods will run ONLY when you click the 
// // 'Add Foo' button in the HTML. Ignore what the 'e' is in each
// // of the methods

// // For example, if I click the 'Add Teacher' button on the page
// // the 'CourseApp.add_teacher' method will run

CourseApp.add_teacher = function(e){
  // Prompt the user for information to add a teacher
  var name = prompt("What is the teacher's name?");
  // Append this teacher to the list of teachers on the page
  new_teacher = new CourseApp.Teacher(name);
  teachers.push(new_teacher);
   CourseApp.Teacher.prototype.generate_html(teachers);
}


//// ADD COURSE 
CourseApp.add_course = function(e){
  // Prompt the user for information to add a course
  var name = prompt("What is the course name?")
  // Append this course to the list of courses on the page
  new_course = new CourseApp.Course(name);
  courses.push(new_course);
}



// STUDENT
CourseApp.add_student = function(e){
  // Prompt the user for information to add a student
  var name = prompt("What is the student name?")
  // Append this student to the list of students on the page
  new_student = new CourseApp.Student(name);
  people.push(new_student);
}



var teacher_button = document.getElementById("add-teacher");
teacher_button.addEventListener("click", CourseApp.add_teacher,false);

// CourseApp.add_teacher();
// CourseApp.Teacher.prototype.generate_html(teachers);

CourseApp.add_course();
CourseApp.Course.prototype.generate_html(courses);

CourseApp.add_student();
CourseApp.Student.prototype.generate_html(people);