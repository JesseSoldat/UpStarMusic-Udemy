const Artist = require('../models/artist');

module.exports = (_id) => {
	return Artist.remove({_id});
}