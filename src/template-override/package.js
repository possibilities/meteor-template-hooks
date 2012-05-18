Package.describe({
  summary: "Template overriding for Meteor"
});

Package.on_use(function (api) {
  api.use('templating', 'client');
  api.add_files('client.js', 'client');  
});
