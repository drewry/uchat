angular.module('app').controller('ucTvChannelsCtrl', function($scope, $http) {

    var urlBase = 'http://192.241.253.215:3000/tvshow/epg';
    var attEpgId = '3958';

    var url = urlBase + '/' + attEpgId;

    $http.get(url, {
        isArray: true
    }).success(function(data) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.tvchannels = data;
        });

	$scope.sortOptions = [
		{value:"display_order", text: "Sort by Channel"},
		{value:"channel_name", text: "Sort by Network"}
		];
	$scope.sortOrder = $scope.sortOptions[0].value;
});

/*
 tvshows =   ["service_id",
 "channel_id",
 "channel_name",
 "lcns",
 "hd_lcns",
 "display_order",
 "logo",
 "masterbrand_id"]
 */