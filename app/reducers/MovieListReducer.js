'use strict';

import {ACTIONS} from '../util/Constants';

let initialState = {
  showPostLoading: true, //Shows spinner when the post webservice is loading.
};

const {MOVIE_DATA_LOADED} = ACTIONS;

export const movieListState = (state = initialState, action) => {
  const {type} = action;
  switch (type) {
    case MOVIE_DATA_LOADED:
      return {...state, showPostLoading: false};
    default:
      return state;
  }
};
