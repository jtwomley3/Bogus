// Must have at least one test file in this directory or Mocha will throw an error.
import React from 'react';
import { HomeContainer } from './Home';
import { shallow } from 'enzyme';

describe('<Home />', () => {
  it('should render', () => {
    const home = shallow(<HomeContainer />);

    let actual = home.find('div').exists();
    expect(actual).toEqual(true);

  });
});
