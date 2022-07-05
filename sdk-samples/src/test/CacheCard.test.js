import React from 'react';
import CacheCard from '../cards/CacheCard';
import { mountWithExtensionProps } from '../utils/test-utils/enzymeUtil';

describe('<CacheCard', () => {
    it('Pulls data from cache', () => {

        const mockCacheFunctions = {
            getItem: () => ({}),
            removeItem: jest.fn(),
            storeItem: jest.fn()
        };

        const card = mountWithExtensionProps(<CacheCard cache={mockCacheFunctions} />);
        expect(card.text().includes('View Count: 1')).toBe(true);
    });
});