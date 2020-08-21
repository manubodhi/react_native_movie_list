'use strict';

import {combineReducers} from 'redux';
import {movieListState} from './MovieListReducer';
import {post} from './PostReducer';

//Combines all the reducer for the store and exports to it
const rootReducer = combineReducers({
  movieListState,
  post,
});

export default rootReducer;
