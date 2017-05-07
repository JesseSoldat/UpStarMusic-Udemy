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

export const findArtist = id => dispatch =>
  FindArtistProxy(id)
    .then(artist => {
      dispatch({type: FIND_ARTIST, payload: artist})
    });

export const searchArtists = (...criteria) => dispatch =>
  SearchArtistsProxy(...criteria)
    .then((result = []) => 
      dispatch({type: SEARCH_ARTISTS, payload: result})
    );


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
// const SearchArtistsProxy = (criteria, offset, limit) => {
//   const result = SearchArtists(_.omit(criteria, 'sort'), criteria.sort, offset, limit);
//   if (!result || !result.then) {
//     return new Promise(() => {});
//   }
//   return result;
// };