const Artist = require('../models/artist');

module.exports = (_ids) => {
	return Artist.update(
		{ _id: { $in: _ids }},
		{ retired: true },
		{ multi: true }
	);
};