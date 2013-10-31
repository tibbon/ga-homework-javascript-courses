// =========== STUDENT ==============
CourseApp.Student = function(name) {
	this.name = name;
  // a student object properties
};

CourseApp.Student.prototype = new CourseApp.LearningThing();

// This will give all the students access to a method .generate_html
// which you can use to render each student to the page indvidiually
CourseApp.Student.prototype.generate_html = function() {
  return "<li id=\'" + this.name + "\' class=\'student\'>" +
    			"<h4>" + this.name + "</h4>" + 
  				"</li>";
};