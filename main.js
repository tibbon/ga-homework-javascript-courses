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
CourseApp.Teacher = function(teacher) { 
	this.teacher=teacher;

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

CourseApp.add_teacher = function(e){

	teacher = prompt('Whats your teachers name?');
	teachers.push(new CourseApp.Teacher(teacher));
};

CourseApp.add_teacher();

CourseApp.add_course = function(e){
	name = prompt('Whats your students name?');
	this.courses.push(new CourseApp.Course(name));
};

CourseApp.add_course();

CourseApp.add_student = function(e){

	e = prompt('Whats your students name?');
	this.students.push(new CourseApp.Student(name));
};

CourseApp.add_student();



