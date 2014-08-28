angular.module('app').controller('ucTvshowDetailCtrl', function($scope, $http, $routeParams, ucTvShowTwitter) {

    var urlBase = 'http://192.241.253.215:3000/tvshow/broadcast_event';
    var url = urlBase + '/' + $routeParams.id;

    $http.get(url, {
        isArray: true
    }).success(function(data) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.tvshowDetails = data;

        var array_values = [];
        var array_key = [];

        for (var key in data.aired_by){
            array_values.push(data.aired_by[key]);
            array_key.push(key);
        }
        $scope.aired_by = array_values;
        $scope.aired_by_network_id = array_key[0];

        $http.get('http://192.241.253.215:3000/tvshow/episode' + '/' + $scope.tvshowDetails.eid, {
            isArray: true
        }).success(function(episode_data) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.tvshowEpisodeDetails = episode_data;
            $scope.tvshowEpisodeDetails.original_air_date = $scope.tvshowEpisodeDetails.original_air_date.substring(0,4) + "/" + $scope.tvshowEpisodeDetails.original_air_date.substring(4,6) + "/" + $scope.tvshowEpisodeDetails.original_air_date.substring(6,8);

            //$scope.twitter_hashtag = ucTvShowTwitter.query($scope.tvshowEpisodeDetails.twitter_searches[0].hashtag);

            $http.get('http://192.241.253.215:3000/tvshow/tweetsByHashtag' + '/' + $scope.tvshowEpisodeDetails.twitter_searches[0].hashtag, {
                isArray: true
            }).success(function(twitter_hashtag_data) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.tvshowTwitterData = twitter_hashtag_data;

            });
            var episode_title_query = $scope.tvshowEpisodeDetails.title.toString().replace(/ /g,'');

            $http.get('http://192.241.253.215:3000/tvshow/tweetsByHashtag' + '/' + episode_title_query, {
                isArray: true
            }).success(function(twitter_query_data) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.tvshowTwitterData2 = twitter_query_data;

            });
            var tvshow_title_query = $scope.tvshowDetails.title.toString().replace(/ /g,'');

            $http.get('http://192.241.253.215:3000/tvshow/tweetsByTimeline' + '/' + tvshow_title_query, {
                isArray: true
            }).success(function(twitter_query_data2) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.tvshowTwitterData3 = twitter_query_data2;

            });



        });

    });

	$scope.$on('$viewContentLoaded', function() {
		//hidden on load
		$('#TvShow_onDemandContent').hide();
		$('#TvShow_twitterContent').hide();
		$('#TvShow_chatContent').hide();

		// sidebar link content; hide & show proper content
		// scheduled content is the default

		// todays showings
		$('#showSchedule').on('click', function() {
			$('#TvShow_twitterContent').hide();
			$('#TvShow_onDemandContent').hide();
			$('#TvShow_chatContent').hide();
			$('#TvShow_ScheduledContent').show();
    	});

		// on demand content
		$('#showOnDemand').on('click', function() {
			$('#TvShow_twitterContent').hide();
			$('#TvShow_ScheduledContent').hide();
			$('#TvShow_chatContent').hide();
			$('#TvShow_onDemandContent').show();
    	});

		// twitter community
		$('#showTwitter').on('click', function() {
			$('#TvShow_ScheduledContent').hide();
			$('#TvShow_onDemandContent').hide();
			$('#TvShow_chatContent').hide();
			$('#TvShow_twitterContent').show();
    	});

		// chat content
		$('#showChat').on('click', function() {
			$('#TvShow_twitterContent').hide();
			$('#TvShow_onDemandContent').hide();
			$('#TvShow_ScheduledContent').hide();
			$('#TvShow_chatContent').show();
    	});

        // back button
        $('#goBack').on('click', function() {
            parent.history.back();
            return false;
        });

        // show details
        $('#showDescCopy').hide();
        $('#showDesc').on('click', function() {
            $('#showDescCopy').toggle('slow');
        });


		// remove
		$('#scheduleSearch').focus(function() {
			$('#TvShow_topContent').fadeToggle('slow');
			setTimeout(function() {
			    $('html body').animate({
				 	scrollTop:0
				},"slow");
			  }, 500);

			
		});
			$('#scheduleSearch').blur(function(){
				$('#TvShow_topContent').fadeToggle('slow');
			});

		// test
		$('#scrollBtn').on('click', function() {
			$('html body').animate({
				 scrollTop:0
			},"slow");
    	});

    }); // all jQuery content in above function

	$scope.sortOptions = [
		{value:"channel", text: "Sort by Channel"},
		{value:"network", text: "Sort by Network"},
		{value:"title", text: "Sort by Title"}
		];
	$scope.sortOrder = $scope.sortOptions[0].value;

});

/*
 tvshowEpisodeDetails = ["episode_id",
                         "title",
                         "image",
                         "description",
                         "genre_ids",
                         "brand",
                         "credits",
                         "slug",
                         "twitter_searches",
                         "original_air_date",
                         "source_type",
                         "program_type",
                         "image_origin"]

tvshowDetails = ["bce",
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

 tvshowTwitterData = ["metadata"
                     "created_at",
                     "id",
                     "id_str",
                     "text",
                     "source",
                     "truncated",
                     "in_reply_to_status_id",
                     "in_reply_to_status_id_str",
                     "in_reply_to_user_id",
                     "in_reply_to_user_id_str",
                     "in_reply_to_screen_name",
                     "user",
                     "geo",
                     "coordinates",
                     "place",
                     "contributors",
                     "retweet_count",
                     "favorite_count",
                     "entities",
                     "favorited",
                     "retweeted",
                     "lang"]

 tvshowTwitterData[0].user = ["id"
                         "id_str"
                         "name"
                         "screen_name"
                         "location"
                         "description"
                         "url"
                         "entities"
                         "protected"
                         "followers_count"
                         "friends_count"
                         "listed_count"
                         "created_at"
                         "favourites_count"
                         "utc_offset"
                         "time_zone"
                         "geo_enabled"
                         "verified"
                         "statuses_count"
                         "lang"
                         "contributors_enabled"
                         "is_translator"
                         "is_translation_enabled"
                         "profile_background_color"
                         "profile_background_image_url"
                         "profile_background_image_url_https"
                         "profile_background_tile"
                         "profile_image_url"
                         "profile_image_url_https"
                         "profile_banner_url"
                         "profile_link_color"
                         "profile_sidebar_border_color"
                         "profile_sidebar_fill_color"
                         "profile_text_color"
                         "profile_use_background_image"
                         "default_profile"
                         "default_profile_image"
                         "following"
                         "follow_request_sent"
                         "notifications"]

 */