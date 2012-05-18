if (Meteor.is_client) {
  Template.theTime.timeOfDay = function () {
    var timeOfDay = Session.get('timeOfDay');
    return timeOfDay;
  };

  Template.theTime.weLiveInTheFuture = function () {
    var weLiveInTheFuture = Session.get('weLiveInTheFuture');
    return weLiveInTheFuture;
  };

  Template.theTime.events = {
    'click input' : function () {
      Session.set('weLiveInTheFuture', true);
    }
  };
  
  Session.set('timeOfDay', moment().format('h:mm:ss a'));
  Meteor.setInterval(function() {
    if (Session.equals('weLiveInTheFuture', true)) {
      Session.set('timeOfDay', moment().add('hours', 5).format('h:mm:ss a'));
    } else {
      Session.set('timeOfDay', moment().format('h:mm:ss a'));
    }
  }, 999);
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
