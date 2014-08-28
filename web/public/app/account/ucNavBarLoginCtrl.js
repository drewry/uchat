angular.module('app').controller('ucNavBarLoginCtrl', function($scope, $http, ucIdentity, ucNotifier, ucAuth, $location) {
	$scope.identity = ucIdentity;
	$scope.signin = function(username, password) {
		ucAuth.authenticateUser(username, password).then(function(success) {
			if(success) {
				ucNotifier.notify('You have successfully signed in!');
			} else {
				ucNotifier.notify('Username/Password combination incorrect!');
			}
		});
	}

	$scope.signout = function() {
		ucAuth.logoutUser().then(function() {
			$scope.username = "";
			$scope.password = "";
			ucNotifier.notify('You have successfully signed out!');
			$location.path('/');
		})
	}
});