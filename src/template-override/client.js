Meteor._original_def_template = Meteor._def_template;
Meteor._def_template = function (name, raw_func) {
  if (window.Template && window.Template[name]) {
    delete window.Template[name];
  }
  return Meteor._original_def_template.apply(this, arguments);
};
