import React from 'react';
import {shallow} from 'enzyme';

import {InfoModal} from './info-modal';
import {toggleInfoModal} from '../actions';

describe('<InfoModal />', () => {
  it('Should render the component without crashing', () => {
    shallow(<InfoModal />);
  });

  it('should dispatch toggleInfoModal', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<InfoModal dispatch={dispatch} />);
    wrapper.find('.close').simulate('click', {
      preventDefault() {}
    });
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch.mock.calls[0][0]).toEqual(toggleInfoModal());
  });

});
