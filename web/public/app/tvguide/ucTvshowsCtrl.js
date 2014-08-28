angular.module('app').controller('ucTvshowsCtrl', function($scope, $http, $routeParams) {

    var urlBase = 'http://192.241.253.215:3000/tvshow/schedule';
    var url = urlBase + '/' + $routeParams.id;

    $http.get(url, {
        isArray: true
    }).success(function(data) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.tvshows = data;
    });

	$scope.sortOptions = [
		{value:"channel", text: "Sort by Channel"},
		{value:"network", text: "Sort by Network"},
		{value:"title", text: "Sort by Title"}
		];
	$scope.sortOrder = $scope.sortOptions[0].value;


    $scope.$on('$viewContentLoaded', function() {

        // back button
        $('#goBack').on('click', function() {
            parent.history.back();
            return false;
        });

    }); // all jQuery content in above function

});
/*
 tvshows = ["bce",
             "b",
             "desc",
             "start",
             "end",
             "brand_id",
             "eid",
             "g",
             "img",
             "img_origin",
             "title",
             "episode_title",
             "offair",
             "src",
             "movie_release_year",
             "aired_by",
             "is_new",
             "is_live",
             "booking_types"]
 */