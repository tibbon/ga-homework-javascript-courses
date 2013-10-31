// =========== COURSE ==============
CourseApp.Course = function(name) {
  this.name = name;
};

CourseApp.Course.prototype = new CourseApp.LearningThing();

// This will give all the courses access to a method .generate_html
// which you can use to render each student to the page indvidiually
CourseApp.Course.prototype.generate_html = function(){ 
  return "<li id=\'" + this.name + "\' class=\'course\'>" +
          "<h4>" + this.name + "</h4>" + 
          "</li>";
};