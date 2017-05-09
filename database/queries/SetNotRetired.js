const Artist = require('../models/artist');

module.exports = (_ids) => {
	console.log(_ids);
	return Artist.update(
		{ _id: { $in: _ids} },
		{	retired: false },
		{ multi: true }
	);
};