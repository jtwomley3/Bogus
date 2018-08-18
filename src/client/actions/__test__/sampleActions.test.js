import { setEnv } from "../sampleActions";

describe('Authorize Actions tests', () => {

  test('should create action to save current user', () => {

    const env = {
      api: '/api/',
      port: '3000',
      secret: 'password'
    };

    expect(setEnv(env)).toEqual({
      type: "SET_ENV",
      env: env
    });

  });
});
