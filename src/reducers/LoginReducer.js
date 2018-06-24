import {
  LOGIN,
  LGOIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/types';
import { API_ERROR, LOADING } from '../value/strings';

const INITIAL_STATE = {
  user: {},
  message: '',
  loading: false,
  isLogin: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loading: true, message: LOADING };
    case LGOIN_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload, isLogin: true };
    case LOGIN_FAIL:
      return { ...state, ...INITIAL_STATE, message: API_ERROR };
    default:
      return state;
  }
};
