// ***************************************************************
// ROUTES (enrollments)
// ***************************************************************

Router.map(function() {

  // DOCUMENTS INDEX
  // -------------------------------------------------------
  this.route('enrollmentIndex', {
    template: 'enrollmentIndex',
    path: '/enrollments',
    waitOn: function () {
      return Meteor.subscribe('enrollments');
    },
    data: {
      enrollments: function () {
        return Enrollments.find({}, {sort: {createdAt: -1}});
      }
    }
  });

  // DOCUMENT NEW
  // -------------------------------------------------------
  this.route('enrollmentNew', {
    template: 'enrollmentNew',
    path: '/enrollments/new'
  });

  // DOCUMENT SHOW
  // -------------------------------------------------------
  this.route('enrollmentShow', {
    template: 'enrollmentShow',
    path: '/enrollments/:_id',
    waitOn: function () {
      return Meteor.subscribe('enrollment', this.params._id);
    },
    data: function () {
      return enrollments.findOne(this.params._id);
    }
  });

  // DOCUMENT EDIT
  // -------------------------------------------------------
  this.route('enrollmentEdit', {
    template: 'enrollmentEdit',
    path: '/enrollments/:_id/edit',
    waitOn: function () {
      return Meteor.subscribe('enrollment', this.params._id);
    },
    data: function () {
      return Enrollments.findOne(this.params._id);
    }
  });

});
