Package.describe({
  summary: "Allow apps to override a smart package's template partials without losing the original partials event bindings"
});

Package.on_use(function (api) {
  api.use('templating', 'client');
  api.add_files('client.js', 'client');  
});
