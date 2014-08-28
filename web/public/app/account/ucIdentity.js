angular.module('app').factory('ucIdentity', function($window, ucUser) {
	var currentUser;
	if(!!$window.bootstrappedUserObject) {
		currentUser = new ucUser();
		angular.extend(currentUser, $window.bootstrappedUserObject);
	}
	return {
		currentUser: currentUser,
		isAuthenticated: function() {
			return !!this.currentUser;
		},
		isAuthorized: function(role) {
			return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
		}
	}
})