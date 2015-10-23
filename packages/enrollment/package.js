Package.describe({
  name: 'maodouio:enrollments',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Maodou.io enrollments package, A meteor package that provides enrollments pages at /enrollments',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/maodouio/meteor-enrollments',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  // version
  api.versionsFrom('1.2.0.2');
  // package
  api.use('iron:router@1.0.12', ["server", "client"]);
  api.use('aldeed:autoform@5.1.2', ["server", "client"]);
  api.use('aldeed:collection2@2.3.3', ["server", "client"]);
  api.use('aldeed:simple-schema@1.3.2', ["server", "client"]);
  api.use('matb33:collection-hooks@0.8.0', ["server", "client"]);

  // template
  api.use('templating');
  // file
  // ls -l | awk '{print "api.addFiles(\""$9"\", \"client\");"}'
  api.addFiles('enrollments.js');
  api.addFiles('client/routes.js', 'client');
  api.addFiles("client/enrollments/enrollment_edit.html", "client");
  api.addFiles("client/enrollments/enrollment_edit.js", "client");
  api.addFiles("client/enrollments/enrollment_new.html", "client");
  api.addFiles("client/enrollments/enrollment_new.js", "client");
  api.addFiles("client/enrollments/enrollment_show.html", "client");
  api.addFiles("client/enrollments/enrollment_show.js", "client");
  api.addFiles("client/enrollments/enrollment.html", "client");
  api.addFiles("client/enrollments/enrollment_index.html", "client");
  api.addFiles("client/enrollments/enrollment_index.js", "client");

  api.addFiles("lib/collections.js");

  api.addFiles("server/publications.js", "server");

  api.export('Enrollments');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('maodouio:enrollments');
  api.addFiles('enrollments-tests.js');
});
