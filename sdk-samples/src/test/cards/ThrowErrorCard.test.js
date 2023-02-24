import React from 'react';
import ThrowErrorCard from '../../cards/ThrowErrorCard';
import { shallow } from 'enzyme';

describe('<ThrowErrorCard>', () => {
    it('Throws an error', () => {
        expect(() => shallow(<ThrowErrorCard />)).toThrowError();
    });
});