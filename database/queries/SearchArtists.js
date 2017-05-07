const Artist = require('../models/artist');

module.exports = (criteria, sortProperty, offset = 0, limit = 20) => {
	console.log('SearchArtists', criteria);
	const query = Artist.find({})
		.sort({ [sortProperty]: 1 })
		.skip(offset)
		.limit(limit);

	return Promise.all([query])
	.then((results) => {
		return {
			all: results[0],
			offset,
			limit
		}		
	});
};
