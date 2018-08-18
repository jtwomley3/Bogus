import reducer from '../sampleReducer';
import * as types from '../../actions/actionTypes';

describe('Authorize Reducer tests', () => {

  test('should return the initial state', () => {

    const initialState = {
      vars: {}
    };

    expect(reducer(undefined, {})).toEqual(initialState);

  });

  test('should handle SET_ENV action', () => {

    const action = {
      type: types.SET_ENV,
      env: {
        api: "/api/",
        port: "3000",
        secret: "password"
      }
    };

    expect(reducer(undefined, action)).toEqual({
      vars: {
        api: "/api/",
        port: "3000",
        secret: "password"
      }
    });

  });

});
