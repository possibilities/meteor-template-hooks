Meteor._original_def_template = Meteor._def_template;
Meteor._def_template = function (name, raw_func) {
  var original;
  window.Template = window.Template || {};

  if (Template && Template[name]) {
    original = Template[name];
    delete Template[name];
  }

  var result = Meteor._original_def_template.apply(this, arguments);
  
  if (original)
    _.extend(Template[name], original);
  
  return result;
};
