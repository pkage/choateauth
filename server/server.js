// this publishes just the services.google.email part of the user() object
// to the client.
Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'services.google.email': 1}});
  } else {
    this.ready();
  }
});