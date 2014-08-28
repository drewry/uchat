angular.module('app').controller('ucSignupCtrl', function($scope, ucUser, ucNotifier, $location, ucAuth) {

	$scope.signup = function() {
		var newUserData = {
			username: $scope.email,
			password: $scope.password,
			firstName: $scope.fname,
			lastName: $scope.lname
		};

		ucAuth.createUser(newUserData).then(function() {
			ucNotifier.notify('User account created!');
			$location.path('/');
		}, function(reason) {
			ucNotifier.error(reason);
		})
	}
})