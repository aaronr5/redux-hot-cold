import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {

  it('Renders the component', () => {
    shallow(<Game />);
  });
});
