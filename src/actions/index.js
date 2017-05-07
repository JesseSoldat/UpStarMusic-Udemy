import _ from 'lodash';
import {hashHistory} from 'react-router';
import {
  SET_AGE_RANGE,
  SET_YEARS_ACTIVE_RANGE,
  SEARCH_ARTISTS,
  FIND_ARTIST,
  RESET_ARTIST,
  CREATE_ERROR,
  CLEAR_ERROR,
  DESELECT_ARTIST,
  SELECT_ARTIST,
  RESET_SELECTION
} from './types';

import SearchArtists from '../../database/queries/SearchArtists';
import FindArtist from '../../database/queries/FindArtist';
import CreateArtist from '../../database/queries/CreateArtist';

export const searchArtists = (...criteria) => dispatch =>
  SearchArtistsProxy(...criteria)
    .then((result = []) => 
      dispatch({type: SEARCH_ARTISTS, payload: result})
    );

export const findArtist = id => dispatch =>
  FindArtistProxy(id)
    .then(artist => {
      dispatch({type: FIND_ARTIST, payload: artist})
    });

export const createArtist = props => dispatch =>
  CreateArtistProxy(props)
    .then(artist => {
      hashHistory.push(`artists/${artist.id}`);
    })
    .catch(error => {
      console.log(error);
      //dispatch({type: CREATE_ERROR, payload: error});
    });




const FindArtistProxy = (...args) => {
  const result = FindArtist(...args);
  if(!result || !result.then) {
    return new Promise(() => {});
  }
  return result;
};

const SearchArtistsProxy = (criteria, offset, limit) => {
  const result = SearchArtists(_.omit(criteria, 'sore'), criteria.sort, offset, limit);
  if(!result || !result.then) {
    return new Promise(() => {});
  }
return result;
};


const CreateArtistProxy = (...args) => {
  console.log(...args);
  const result = CreateArtist(...args)
  if(!result || !result.then) {
    return new Promise(() => {})
  }
  return result;
};