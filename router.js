

Router.route('/', { 
	template: 'login',
	onBeforeAction: function(){
		Meteor.subscribe("userData");
		// console.log("trying to get to the login page");
		var currentUser = Meteor.userId();
		
		if (Meteor.user()){
			
				// if we have logged in then move to the landing page
				// console.log("We are about to find out the email.")
				// console.log(Meteor.user().services.google.email);
				// console.log(Meteor.user());
				//console.log(Meteor.call('getEmail'));
				//var email = Meteor.call('getEmail');
				var email = Meteor.user().services.google.email;
				// check that it is a choate email first
				
				// this makes it so only choate community members can login.
				//if (/(\@choate\.edu)/.test(email)) {
	 
				// this makes it so only choate students can login.
				//if (/(\@choate\.edu)/.test(email) && (/[0-9]/.test(email))) {
				
				// this make it so only choate adults can login.
				
				if ((/(\@choate\.edu)/.test(email)) && !(/[0-9]/.test(email))) {
	        		this.render('landing');
	     		}

	     		else
	     		{
	     			//Not part of choate. They must be logged out.
	     			// console.log("logging out");
	     			Meteor.logout();
	     			this.next();
	     		}
				
			
		}
		else
		{
			this.next();
		}
	}	
});
