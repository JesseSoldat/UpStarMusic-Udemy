const Artist = require('../models/artist');

module.exports = (artistProps) => {
	const artist = new Artist(artistProps);

	return artist.save();
}; 