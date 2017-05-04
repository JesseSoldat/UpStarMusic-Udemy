import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';


const App = () => {
	

	return (
	<div>Hello World</div>
	);
};

ReactDOM.render(<App/>, document.getElementById('root'), () => {
	console.log('Render success');
});