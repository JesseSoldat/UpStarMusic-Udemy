to index name for searching


	if(criteria.name) {
		query.$text = {$search: criteria.name};
	}

C:\mongodb\bin
open mongo shell

show dbs

use upstar_music

db.artists.createIndex({ name: "text"})