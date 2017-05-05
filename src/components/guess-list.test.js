import React from 'react';
import {shallow} from 'enzyme';

import {GuessList} from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[]} />);
    });

    it('Renders a list of guesses', () => {
        const guessValues = [20, 40, 60];
        const wrapper = shallow(<GuessList guesses={guessValues} />);
        const items = wrapper.find('li');
        expect(items.length).toEqual(guessValues.length);
        guessValues.forEach((value, index) => {
            expect(items.at(index).text()).toEqual(value.toString());
        });
    });
});
