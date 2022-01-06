import React from 'react';
import ThrowErrorCard from './ThrowErrorCard';
import { shallow } from 'enzyme';

describe('<ThrowErrorCard>', () => {
    it('Throws an error', () => {
        expect(() => shallow(<ThrowErrorCard />)).toThrowError();
    });
});