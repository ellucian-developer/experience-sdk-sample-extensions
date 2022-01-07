import React from 'react';
import PropsPage from './index';
import { mountWithExtensionProps } from '../utils/test-utils/enzymeUtil';

describe('<PropsPage>', () => {
    it('Loads props page', () => {

        const card = mountWithExtensionProps(<PropsPage />);
        expect(card.find('pre').text()).not.toBeNull();
    })
})