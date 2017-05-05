import _ from 'lodash';
import faker from 'faker';
import {Db, Server} from 'mongodb';
import {GENRES} from './constants';

const MINIMUM_ARTIST = 2;
const ARTIST_TO_ADD = 15;

let artistsCollection;
const db = new Db('upstar_music', new Server('localhost', 27017));

db.open()
	.then(() => {
		artistsCollection = db.collection('artists');
		return artistsCollection.count({});
	})
	.then(count => {
		if(count < MINIMUM_ARTIST) {
			const artists = _.times(ARTIST_TO_ADD, () => createArtist());

			artistsCollection.insertMany(artists);
		}
	})
	.catch(err => console.log(err));

	function createArtist() {
		return {
			name: faker.name.findName()
		};
	}