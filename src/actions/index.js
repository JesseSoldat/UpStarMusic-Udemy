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

import FindArtist from '../../database/queries/FindArtist';

export const findArtist = id => dispatch =>
  FindArtistProxy(id)
    .then(artist => {
      dispatch({type: FIND_ARTIST, payload: artist})
    });

const FindArtistProxy = (...args) => {
  const result = FindArtist(...args);
  if(!result || !result.then) {
    return new Promise(() => {});
  }
  return result;
};