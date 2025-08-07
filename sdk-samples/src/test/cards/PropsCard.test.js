import PropsCard from '../../cards/PropsCard';
import { renderWithExtensionProps, screen } from '../../utils/test-utils/testUtils';

describe('<PropsCard>', () => {
    it('Loads props', () => {

        renderWithExtensionProps(<PropsCard />);

        // look for output of useData hook
        expect(screen.getByText(/"someData": "test-data"/i)).toBeInTheDocument();

        // look for out of the useDashboardInfo hook
        expect(screen.getByText(/"id": "test-dashboard/i)).toBeInTheDocument();
    })
})