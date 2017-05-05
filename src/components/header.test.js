import React from 'react';
import {shallow} from 'enzyme';

import {Header} from './header';
import InfoModal from './info-modal';

describe('<Header />', () => {
  it('should render without crashing', () => {
    shallow(<Header />);
  });

  it('Shows info modal when showInfoModal = true', () => {
    const wrapper = shallow(<Header showInfoModal={true} />);
    expect(wrapper.find(InfoModal).exists()).toEqual(true);
  });

  it('hides info modal when showInfoModal = false', () => {
    const wrapper = shallow(<Header showInfoModal={false} />);
    expect(wrapper.find(InfoModal).exists()).toEqual(false);
  });
});
