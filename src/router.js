import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';
import ArtistCreate from './components/artists/ArtistCreate';
import ArtistDetails from './components/artists/ArtistDetails';
import ArtistEdit from './components/artists/ArtistEdit';

const Routes = () => {
	return (
		<Router history={hashHistory}>
			<Route path="/" component={Home}>
				<IndexRoute component={ArtistMain} />
				<Route path="artists/new" component={ArtistCreate} />
				<Route path="artists/:id" component={ArtistDetails} />
				<Route path="artists/:id/edit" component={ArtistEdit} />
			</Route>
		</Router>
	);
};

export default Routes;			
