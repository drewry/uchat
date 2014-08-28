angular.module('app').factory('ucTvShowTwitter', function($resource) {
	// var TvShowTwitterResource = $resource('/api/tvguide/tvshow/:tvshow_hashtag', {tvshow_hashtag: "@hashtag"}, {
	// 	update: { method:'PUT', isArray:false }
	// });

var TvShowTwitterResource = $resource('/api/tvguide/tvshow/:tvshow_handle', {tvshow_handle: "@handle"}, {
		update: { method:'PUT', isArray:false }
	});

	return TvShowTwitterResource;
});