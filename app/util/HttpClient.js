'use strict';

import store from '../store';
import axios from 'axios';

import {VALIDATION_MSG, NETWORK} from '../util/Constants';

export const invokeWebService = (url, method = 'GET') => {
  return new Promise(function (success, failed) {
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const config = {
      url,
      method,
      headers,
    };

    var api_base = axios.create({
      baseURL: NETWORK.BASE_URL,
      timeout: 45000,
    });

    // api_base.interceptors.request.use((req) => {
    //   console.log(req.url += '?api_key=' + NETWORK.API_KEY);
    //   req.url += '?api_key=' + NETWORK.API_KEY;
    // });

    api_base(config)
      .then((response) => {
        const {status, data} = response;
        if (status === 200) {
          try {
            return data;
          } catch (e) {
            throw {status, message: VALIDATION_MSG.REQ_FAILED};
          }
        } else {
          throw {status, message: VALIDATION_MSG.REQ_FAILED};
        }
      })
      .then((response) => {
        success(response);
      })
      .catch((err) => {
        failed(err);
      });
  });
};
