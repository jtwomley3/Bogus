// import initialState from './initialState';
import * as types from '../actions/actionTypes';

const env = {
  vars: {}
};

export default function envReducer(state = env, action) {
  switch (action.type) {
    case types.SET_ENV:
      return Object.assign({}, state, {
        vars: action.env
      });
    default:
      return state;
  }
}
