angular.module('app').controller('ucUserListCtrl', function($scope, ucUser) {
	$scope.users = ucUser.query();
});