 const Artist = require('../models/artist');

// module.exports = (criteria, sortProperty, offset = 0, limit = 20) => {
// 	// console.log('SearchArtists', criteria);
// 	const query = Artist.find(buildQuery(criteria))
// 		.sort({ [sortProperty]: 1 })
// 		.skip(offset)
// 		.limit(limit);

// 	return Promise.all([query])
// 	.then((results) => {
// 		return {
// 			all: results[0],
// 			offset,
// 			limit
// 		}		
// 	});
// };

// const buildQuery = (criteria) => {
// 	const query = {};

// 	if(criteria.name) {
// 		query.$text = {$search: criteria.name};
// 	}

// 	if(criteria.age) {
// 		query.age = {
// 			$gte: criteria.age.min,
// 			$lte: criteria.age.max
// 		};
// 	}

// 	if(criteria.yearsActive) {
// 		query.yearsActive = {
// 			$gte: criteria.yearsActive.min,
// 			$lte: criteria.yearsActive.max
// 		};
// 	}

// 	return query;
// };



module.exports = (criteria, sortProperty, offset = 0, limit = 10) => {
  const all = buildQuery(criteria, sortProperty)
    .skip(offset)
    .limit(limit);
 
  const count = buildQuery(criteria, sortProperty)
    .count();
 
  return Promise.all([all, count])
    .then((results) => {
      return {
        all: results[0],
        count: results[1],
        offset,
        limit
      };
    });
};
 
const buildQuery = (criteria, sortProperty) => {
  let query = Artist
      .find({})
      .sort({ [sortProperty]: 1 });
 
  if (criteria.name) {
    query = query
      .where('name')
      .equals(new RegExp(criteria.name, 'i'));
  }
 
  if (criteria.age) {
    query = query
      .where('age')
      .gte(criteria.age.min)
      .lte(criteria.age.max);
  }
 
  if (criteria.yearsActive) {
    query = query
      .where('yearsActive')
      .gte(criteria.yearsActive.min)
      .lte(criteria.yearsActive.max);
  }
 
  return query;
};
