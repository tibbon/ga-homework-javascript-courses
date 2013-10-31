var CourseApp = {};

// =========== STUDENT ==============
CourseApp.Student = function(name) {
	this.name = name;
};
CourseApp.Student.prototype.generate_html = function(){ 
	var students = ['Amal', 'Zahra', 'Sara', 'Abdi'], 
	studentTML = document.getElementById('students').innerHTML,
	max = students.length, 
	i = 0; 

	for(; i < max;) {
		studentTML += "<div id='students'><ul><li>" + students[i] + "</li></ul></div>";
		i += 1;
	};
	document.getElementById('students').innerHTML = studentTML;
};

CourseApp.Student.prototype.generate_html();

// ===========  TEACHER ==============
CourseApp.Teacher = function(name) { 
};
CourseApp.Teacher.prototype.generate_html = function(){ 

	var teachers = ['Billy', 'Neesha', 'Samara', 'Geesha'], 
	teacherTML = document.getElementById('teachers').innerHTML,
	max = teachers.length, 
	i = 0; 

	for(; i < max;) {
		teacherTML += "<div id='teachers'><ul><li>" + teachers[i] + "</li></ul></div>";
		i += 1;
	};
	document.getElementById('teachers').innerHTML = teacherTML;
};
CourseApp.Teacher.prototype.generate_html();

// =========== COURSE ==============
CourseApp.Course = function(name) {
	this.name = name; 
      };

// This will give all the courses access to a method .generate_html
// which you can use to render each student to the page indvidiually
CourseApp.Course.prototype.generate_html = function(){ 

	var courses = ['physics', 'chemistry', 'math', 'computer science'], 
	courseTML = document.getElementById('courses').innerHTML,
	max = courses.length, 
	i = 0; 

	for(; i < max;) {
		courseTML += "<div id='courses'><ul><li>" + courses[i] + "</li></ul></div>";
		i += 1;
	};
	document.getElementById('courses').innerHTML = courseTML;
};

CourseApp.Course.prototype.generate_html();

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

	name = prompt('Whats your teachers name?');
	teachers.push(new CourseApp.Teacher(name));
  // Prompt the user for information to add a teacher
  // Append this teacher to the list of teachers on the page
};

CourseApp.add_teacher();

CourseApp.add_course = function(e){
	name = prompt('Whats your students name?');
	courses.push(new CourseApp.Course(name));
};

CourseApp.add_course();

CourseApp.add_student = function(e){

	name = prompt('Whats your students name?');
	students.push(new CourseApp.Student(name));
  // Prompt the user for information to add a student
  // Append this student to the list of students on the page
};

CourseApp.add_student();
