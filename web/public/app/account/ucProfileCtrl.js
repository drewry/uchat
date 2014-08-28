angular.module('app').controller('ucProfileCtrl', function($scope, ucAuth, ucIdentity, ucNotifier) {
	$scope.email = ucIdentity.currentUser.username;
	$scope.fname = ucIdentity.currentUser.firstName;
	$scope.lname = ucIdentity.currentUser.lastName;

	$scope.update = function() {
		var newUserData = {
			username: $scope.email,
			firstName: $scope.fname,
			lastName: $scope.lname
		}
		if($scope.password && $scope.password.length > 0) {
			newUserData.password = $scope.password;
		}

		ucAuth.updateCurrentUser(newUserData).then(function() {
			ucNotifier.notify('Your user account has been updated');
		}, function(reason) {
			ucNotifier.error(reason);
		})
	}
})