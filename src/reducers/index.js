import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ArtistReducer from './ArtistReducer';
import SelectionReducer from './SelectionReducer';
import FilterCriteriaReducer from './FilterCriteriaReducer';
import ErrorReducer from './ErrorReducer';

export default combineReducers({
	form: formReducer,
	artists: ArtistReducer,
	selection: SelectionReducer,
  errors: ErrorReducer,
	filterCriteria: FilterCriteriaReducer,
});