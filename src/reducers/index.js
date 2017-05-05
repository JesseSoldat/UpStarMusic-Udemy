import { combineReducers } from 'redux';
import ArtistReducer from './ArtistReducer';
import SelectionReducer from './SelectionReducer';


export default combineReducers({
	artists: ArtistReducer,
	selection: SelectionReducer
});