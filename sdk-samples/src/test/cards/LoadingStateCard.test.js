import React from 'react';
import LoadingStateCard from '../../cards/LoadingStateCard';
import { mountWithExtensionProps } from '../../utils/test-utils/enzymeUtil';

describe('<LoadingStateCard>', () => {
    it('Sets the card to loading', () => {

        const mockCardControl = {
            setLoadingStatus: jest.fn()
        };

        const card = mountWithExtensionProps(<LoadingStateCard cardControl={mockCardControl} />);
        const loadingButton = card.find('button');
        loadingButton.simulate('click');
        expect(card.text().includes('Status: loading')).toBe(true);
    });
});