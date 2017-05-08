const Artist = require('../models/artist');

module.exports = () => {
	const minQuery = Artist
		.find({})
		.sort({ age: 1 })
		.limit(1)
		.then(artists => artists[0].age);

	const maxQuery = Artist
		.find({})
		.sort({age: -1 })
		.limit(1)
		.then(artists => artists[0].age);

		return Promise.all([minQuery, maxQuery])
			.then(res => {
				console.log('Get Age Range Query', res);
				return { min: res[0], max: res[1] };
			});
};

