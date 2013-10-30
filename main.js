// Application namespace
var CourseApp = {};

// =========== Student ==============
CourseApp.Student = function(name) {
                 // a student object properties
}
CourseApp.Student.prototype.generate_html = function(){ ...}


// =========== Teacher ==============
CourseApp.Teacher = function(name) {
                 // a teacher object properties
}
CourseApp.Teacher.prototype.generate_html = function(){ ...}

// =========== Course ==============
CourseApp.Course = function(name) {
                 // a course object properties
}

// This will generate *all* of the html for a specific course
CourseApp.Course.prototype.generate_html = function(){ ...}
CourseApp.Course.prototype.add_teacher = function(teacher){ ...}
CourseApp.Course.prototype.add_student = function(student){ ...}


// Create a course

// Create a teacher and add it to the above course.

// Create a couple of students and add it to the above course.

// Generate the HTML for this course