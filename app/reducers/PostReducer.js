'use strict';

import {ACTIONS} from '../util/Constants';

let initialState = {
  postArray: [], //Conatins list of post data
};

const {UPDATE_MOVIE_DATA} = ACTIONS;

export const post = (state = initialState, action) => {
  const {type, postArray} = action;
  switch (type) {
    case UPDATE_MOVIE_DATA:
      return {...state, postArray};
    default:
      return state;
  }
};
