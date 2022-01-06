import React from 'react';
import PropsCard from './PropsCard';
import { mountWithExtensionProps } from '../utils/test-utils/enzymeUtil';

describe('<PropsCard>', () => {
    it('Loads props', () => {

        const card = mountWithExtensionProps(<PropsCard />);
        expect(card.find('pre').text()).not.toBeNull();
    })
})