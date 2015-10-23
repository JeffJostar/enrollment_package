Template.enrollmentNew.rendered = function() {
};

Template.enrollmentNew.helpers({
});

Template.enrollmentNew.events ({
});

AutoForm.hooks({
  'enrollmentForm': {
    before: {
      insert: function(doc) {
        doc.createdAt = new Date();
        return doc;
        // doc.dateCreated = new Date();
        // this.result(doc);
      }
    },
    onSuccess: function (operation, result, template) {
      console.log('New enrollment inserted successfully!');
      Router.go('enrollmentIndex', {_id: result});
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
 //    onSubmit: function (insertDoc, updateDoc, currentDoc) {
 //     if (customHandler(insertDoc)) {
 //       this.done();
 //     } else {
 //       this.done(new Error("Submission failed"));
 //     }
 //     return false;
 //   }
 // }

});
