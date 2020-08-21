'use strict';

export const ACTIONS = {
  MOVIE_DATA_LOADED: 'MOVIE_DATA_LOADED',
  UPDATE_MOVIE_DATA: 'UPDATE_MOVIE_DATA',
};
export const VALIDATION_MSG = {
  NO_INTERNET: 'Please check your internet connectivity.',
  REQ_FAILED: 'Request failed.',
};

export const NETWORK = {
  BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_URL: 'https://image.tmdb.org/t/p',
  API_KEY: 'e5779ccbe20272ae9fd6bfbae6c635fc',
  TRENDING_END_POINT: '/trending/all/day',
  // BASE_URL: 'http://www.mocky.io/v2',
  // END_POINT: '/5b9755c43000006a000bd53f'
};
