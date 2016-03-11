if (Meteor.isClient) {
 

  Template.shun.helpers({
    'isShunned': function() {
      if (Meteor.userId() == null) {
        return true;
      }
      var email = Meteor.user().services.google.email;
      if (/(\@choate\.edu)/.test(email)) {
        return /[0-9]/.test(email);
      }
      return true;
    }
  })
}


