import PropsPage from '../../page/index';
// import { shallow } from 'enzyme';
import { renderWithExtensionProps, screen } from '../../utils/test-utils/testUtils';

describe('<PropsPage>', () => {
    it('Loads props page', () => {

        renderWithExtensionProps(<PropsPage />);

        // look for output of useData hook
        expect(screen.getByText(/"someData": "test-data"/i)).toBeInTheDocument();

        // look for out of the useDashboardInfo hook
        expect(screen.getByText(/"id": "test-dashboard/i)).toBeInTheDocument();

    })
})