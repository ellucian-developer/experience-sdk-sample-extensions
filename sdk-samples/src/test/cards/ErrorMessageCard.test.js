import React from 'react';
import ErrorMessageCard from '../../cards/ErrorMessageCard';
import { mountWithExtensionProps } from '../../utils/test-utils/enzymeUtil';
import { shallow } from 'enzyme';

describe('<ErrorMessageCard>', () => {
    it('Loads with error', () => {

        const card = mountWithExtensionProps(<ErrorMessageCard />);
        card.find('button').simulate('click');
        expect(() => shallow(<ErrorMessageCard />)).toThrowError();
    });
});