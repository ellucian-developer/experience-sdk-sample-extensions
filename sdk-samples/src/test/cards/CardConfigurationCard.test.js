import CardConfigurationCard from '../../cards/CardConfigurationCard';
import { renderWithExtensionProps, screen } from '../../utils/test-utils/testUtils';

describe('<CardConfigurationCard>', () => {
    it('Loads with configuration values', () => {

        const mockCardInfo = {
            configuration: {
                "mockLabel": 'mock-url-label',
                "mockUrl": 'https://mockurl'
            }
        };

        renderWithExtensionProps(<CardConfigurationCard cardInfo={mockCardInfo} />);
        expect(screen.getByText('mock-url-label')).toBeInTheDocument();
        expect(screen.getByText('https://mockurl')).toBeInTheDocument();
    });
});