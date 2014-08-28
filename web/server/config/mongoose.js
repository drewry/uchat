var mongoose = require('mongoose'),
	userModel = require('../models/User'),
    TvShowTwitter = require('../models/TvShowTwitter');

module.exports = function(config) {
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error...'));
	db.once('open', function callback() {
		console.log('uchat db opened');
	});

	userModel.createDefaultUsers();
    TvShowTwitter.createDefaultTvShowTwitter();
	
};
