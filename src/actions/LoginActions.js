import {
  LOGIN_FAIL,
  LGOIN_SUCCESS,
  LOGIN,
} from './types';
import { LOGIN_URL } from '../net/ApiConst';
import { CallAPI } from '../net/ApiUtils';

export const onLogin = () => (dispatch) => {
  dispatch({ type: LOGIN });
  const config = {
    url: LOGIN_URL,
    method: 'GET',
  };
  const request = CallAPI(config, respnse => onLoginSuccess(dispatch, respnse), error => onLoginError(dispatch, error));
};

const onLoginSuccess = (dispatch, response) => {
  if (response && response.data && (response.status === 200 || response.status === 201)) {
    dispatch({
      type: LGOIN_SUCCESS,
      payload: response.data || {}
    });
  }
}

const onLoginError = (dispatch, error) => {
  dispatch({ type: LOGIN_FAIL });
  console.log('onError: ', error);
}