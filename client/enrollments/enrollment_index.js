Template.enrollmentIndex.rendered = function() {
};

Template.enrollmentIndex.helpers({
  sayHello: function () {
    return "Hello!";
  }
});

Template.enrollmentIndex.events ({
  'click .delete-enrollment': function(e) {
    e.preventDefault();
    var item = this;

    if (confirm("Are you sure?")) {
      Enrollments.remove(item._id);
      console.log("Deleted!")
    }
  }
});
