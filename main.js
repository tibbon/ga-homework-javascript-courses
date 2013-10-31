// Application namespace
var CourseApp = {
  // If I'm setting attributes on an object, using semicolons
  // I don't need a var. These are 'attributes' not variables. 
  students: [],
  courses: [],
  teachers: [],
  render_collection: function(collection_name) {
    var i = 0,
        array_length;

    array_length = this[collection_name].length
    for(;i<array_length;) {
      this[collection_name][i].render_item(collection_name);
      i = i + 1;
    };
  }
};

CourseApp.LearningThing = function() {};
CourseApp.LearningThing.prototype.render_item = function(collection_name) {
  var html = "";
  html = this.generate_html();
  document.getElementById(collection_name + '-list').innerHTML += html;
};


// Doesn't execute until the body is done loading
window.onload = function() {
  CourseApp.students.push(new CourseApp.Student("Stacy"));
  CourseApp.students.push(new CourseApp.Student("Bobby"));
  CourseApp.teachers.push(new CourseApp.Teacher("David_d_1"));
  CourseApp.teachers.push(new CourseApp.Teacher("Tom_t_1"));
  CourseApp.courses.push(new CourseApp.Course("6.001"));
  CourseApp.courses.push(new CourseApp.Course("6.002"));

  CourseApp.render_collection("students");
  CourseApp.render_collection("teachers");
  CourseApp.render_collection("courses");
};




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
  var teacher_name = "", teacher;
  teacher_name = prompt("Name of teacher");
  console.log(teacher_name);
  teacher = new CourseApp.Teacher(teacher_name);
  CourseApp.teachers.push(teacher);
  teacher.render_item("teachers");
};

CourseApp.add_course = function(e){
  // Prompt the user for information to add a course
  // Append this course to the list of courses on the page
};

CourseApp.add_student = function(e){
  // Prompt the user for information to add a student
  // Append this student to the list of students on the page
};