const Artist = require('../models/artist');

module.exports = (_id, artistProps) => {
	return Artist.update({_id}, artistProps);
}; 