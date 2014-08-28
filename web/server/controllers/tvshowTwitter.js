var TvShowTwitter = require('mongoose').model('TvShowTwitter');

exports.matchTvShowsTwitterHashtag = function(req, res) {
    TvShowTwitter.findOne({tvshow_hashtag:req.params.hashtag}).exec(function(err, tvshow_hashtag) {
		res.send(tvshow_hashtag);
	})
}

exports.matchTvShowsTwitterHandle = function(req, res) {
    TvShowTwitter.findOne({tvshow_handle:req.params.handle}).exec(function(err, tvshow_handle) {
		res.send(tvshow_handle);
	})
}