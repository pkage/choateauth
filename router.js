Router.route('/', {
	template: 'login',
	onBeforeAction: function(){
		//console.log("trying to get to the login page");
		var currentUser = Meteor.userId();
		//console.log(currentUser);
		if (currentUser) {
			// if we have logged in then move to the landing page
			var email = Meteor.user().services.google.email;
			// check that it is a choate email first
			
			// this makes it so only choate community members can login.
			//if (/(\@choate\.edu)/.test(email)) {
 
			// this makes it so only choate students can login.
			//if (/(\@choate\.edu)/.test(email) && (/[0-9]/.test(email))) {
			
			// this make it so only choate adults can login.
			if (/(\@choate\.edu)/.test(email) && !(/[0-9]/.test(email))) {
        		this.render('landing');
     		}

     		else
     		{
     			//Not part of choate. They must be logged out.
     			Meteor.logout();
     			this.next();
     		}
			
		}
		else{
			// not logged in yet. Give them a chance.
			this.next();
		}
	}	
});
