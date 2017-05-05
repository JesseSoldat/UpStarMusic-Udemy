import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';
import ArtistCreate from './components/artists/ArtistCreate';

const Routes = () => {
	return (
		<Router history={hashHistory}>
			<Route path="/" component={Home}>
				<IndexRoute component={ArtistMain} />
				<Route path="artists/new" component={ArtistCreate} />
			</Route>
		</Router>
	);
};

export default Routes;			
