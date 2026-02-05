import LoadingStateCard from '../../cards/LoadingStateCard';
import { renderWithExtensionProps, userEvent, screen } from '../../utils/test-utils/testUtils';


describe('<LoadingStateCard>', () => {
    it('Sets the card to loading', async() => {

        const mockCardControl = {
            setLoadingStatus: jest.fn()
        };

        renderWithExtensionProps(<LoadingStateCard cardControl={mockCardControl} />);
        const loadingButton = screen.getByRole('button');
        userEvent.click(loadingButton);
        expect(await screen.findByText('Status: loading')).toBeInTheDocument();
    });
});