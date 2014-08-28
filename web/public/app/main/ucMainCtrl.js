angular.module('app').controller('ucMainCtrl', function($scope, $http) {

    $scope.favoriteTvShows = [];

    var favoriteTvShowsEids = [
        '4407722',
        '4408651',
        '4374627',
        '4407357',
        '4425772',
        '4371044',
        '20525',
        '4344068',
        '3969989',
        '209696',
        '4407608',
        '16891'
    ];
    for(var c = 0; c < favoriteTvShowsEids.length; c++) {
        $http.get('http://192.241.253.215:3000/tvshow/episode' + '/' + favoriteTvShowsEids[c], {
            isArray: true
        }).success(function(data) {
            // $http.get all favorite tv shows eids
            // put the return objects into an array
            // return the array to ng-repeated in the view
            console.log(data);
            $scope.favoriteTvShows.push(data);
        });
    }
   

	$scope.$on('$viewContentLoaded', function() {
		// hidden elements
			$('.loginORsignup').hide();
			$('.jumbotron').hide();
			$('.randbomButton button').hide();

		// old; can be deleted soon	
	    	$('.jumbotron').mouseover(function(){
	    		$(this).css('background-color', 'pink')
	    	});
	    	
	    	$('.jumbotron').mouseout(function(){
	    		$(this).css('background-color', '#ecf0f1')
	    	});

	        $('.randbomButton button').on('click', function() {
	        	$('.jumbotron').toggle('slow');
	    	});
	    ///////////////////////////////////////////////////////////////////// 

    	$('#LoginBtn').on('click', function() {
    		$('.loginORsignup').fadeToggle('slow');
    	});

    }); // all jQuery content in above function
});

