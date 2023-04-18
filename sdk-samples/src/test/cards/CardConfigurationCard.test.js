import React from 'react';
import CardConfigurationCard from '../../cards/CardConfigurationCard';
import { mountWithExtensionProps } from '../../utils/test-utils/enzymeUtil';

describe('<CardConfigurationCard>', () => {
    it('Loads with configuration values', () => {

        const mockCardInfo = {
            configuration: {
                "mockLabel": 'mock-url-label',
                "mockUrl": 'https://mockurl'
            }
        };

        const card = mountWithExtensionProps(<CardConfigurationCard cardInfo={mockCardInfo} />);
        expect(card.prop('cardInfo').configuration.mockLabel).toEqual('mock-url-label');
        expect(card.prop('cardInfo').configuration.mockUrl).toEqual('https://mockurl');
    });
});