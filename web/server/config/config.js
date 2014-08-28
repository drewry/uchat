var path = require('path');
var rootPath = path.normalize(__dirname +'/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/uchat',
		rootPath: rootPath,
		port: process.env.PORT || 3030
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://covello:covelloAdmin1@ds037688.mongolab.com:37688/uchat',
		port: process.env.PORT || 80
	}
};