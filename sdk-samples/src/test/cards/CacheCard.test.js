import CacheCard from '../../cards/CacheCard';
import { renderWithExtensionProps, screen } from '../../utils/test-utils/testUtils';

describe('<CacheCard', () => {
    it('Pulls data from cache', () => {

        const mockCacheFunctions = {
            getItem: () => ({}),
            removeItem: jest.fn(),
            storeItem: jest.fn()
        };

        renderWithExtensionProps(<CacheCard cache={mockCacheFunctions} />);
        expect(screen.getByText('View Count: 1')).toBeInTheDocument();
    });
});