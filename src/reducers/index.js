import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ArtistReducer from './ArtistReducer';
import SelectionReducer from './SelectionReducer';
import FilterCriteriaReducer from './FilterCriteriaReducer';


export default combineReducers({
	form: formReducer,
	artists: ArtistReducer,
	selection: SelectionReducer,
	filterCriteria: FilterCriteriaReducer,
});