import * as types from './actionTypes';

export function setEnv(env) {
  return {
    type: types.SET_ENV,
    env: env
  };
}

// todo: async example
