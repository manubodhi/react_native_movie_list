'use strict';

import {Alert} from 'react-native';

import {invokeWebService} from '../util/HttpClient';
const _ = require('lodash');
import {VALIDATION_MSG, ACTIONS, NETWORK} from '../util/Constants';

export const invokeDataWebservice = () => {
  return (dispatch) => {
    invokeWebService(NETWORK.TRENDING_END_POINT + '?api_key=' + NETWORK.API_KEY)
      .then((val) => {
        if (_.has(val, 'results')) {
          dispatch({
            type: ACTIONS.UPDATE_MOVIE_DATA,
            postArray: val.results,
          });
          dispatch({
            type: ACTIONS.MOVIE_DATA_LOADED,
          });
        } else {
          Alert.alert('Failed', VALIDATION_MSG.REQ_FAILED), [{text: 'Ok'}];
        }
      })
      .catch((error) => {
        Alert.alert('Failed', error.message), [{text: 'Ok'}];
      });
  };
};
