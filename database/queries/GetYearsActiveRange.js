const Artist = require('../models/artist');

module.exports = () =>  {
	const minQuery = Artist
		.find({})
		.sort({yearsActive: 1})
		.limit(1)
		.then(artist => artist[0].yearsActive);

	const maxQuery = Artist
		.find({})
		.sort({yearsActive: -1})
		.limit(1)
		.then(artist => artist[0].yearsActive);

		return Promise.all([minQuery, maxQuery])
			.then(result => {
				console.log('Get yearsActive', result);
				return { min: result[0], max: result[1] }
			});
};