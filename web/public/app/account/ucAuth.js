angular.module('app').factory('ucAuth', function($http, ucIdentity, $q, ucUser) {
	return {
		
		authenticateUser: function(username, password) {
			var dfd = $q.defer();
			$http.post('/login', {username:username, password:password}).then(function(response) {
				if(response.data.success) {
					var user = new ucUser();
					angular.extend(user, response.data.user);
					ucIdentity.currentUser = user;
					dfd.resolve(true);
				} else {
					dfd.resolve(false);
				}
			});
			
			return dfd.promise;
		},
		
		createUser: function(newUserData) {
			var newUser = new ucUser(newUserData);
			var dfd = $q.defer();

			newUser.$save().then(function() {
				ucIdentity.currentUser = newUser;
				dfd.resolve();
			}, function(response) {
				dfd.reject(response.data.reason);
			});

			return dfd.promise;
		},

		updateCurrentUser: function(newUserData) {
			var dfd = $q.defer();

			var clone = angular.copy(ucIdentity.currentUser);
			angular.extend(clone, newUserData);
			clone.$update().then(function() {
				ucIdentity.currentUser = clone;
				dfd.resolve();
			}, function(response) {
				dfd.reject(response.data.reason);
			});

			return dfd.promise;
		},
		
		logoutUser: function() {
			var dfd = $q.defer();
			$http.post('/logout', {logout:true}).then(function() {
				ucIdentity.currentUser = undefined;
				dfd.resolve();
			});
			
			return dfd.promise;
		},
		
		authorizeCurrentUserForRoute: function(role) {
			if(ucIdentity.isAuthorized(role)) {
				return true;
			} else {
				return $q.reject('not authorized');
			}
		},

		authorizeAuthenticatedUserForRoute: function() {
			if(ucIdentity.isAuthenticated()) {
				return true;
			} else {
				return $q.reject('not authorized')
			}
		}
	}
});