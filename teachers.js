// ===========  TEACHER ==============
CourseApp.Teacher = function(name) {
  this.name = name;
};

CourseApp.Teacher.prototype = new CourseApp.LearningThing();

// This will give all the teachers access to a method .generate_html
// which you can use to render each student to the page indvidiually
CourseApp.Teacher.prototype.generate_html = function(){ 
  return "<li id=\'" + this.name + "\' class=\'teacher\'>" +
          "<h4>" + this.name + "</h4>" + 
          "</li>";
};