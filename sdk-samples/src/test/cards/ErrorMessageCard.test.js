import ErrorMessageCard from '../../cards/ErrorMessageCard';
import { renderWithExtensionProps }  from '../../utils/test-utils/testUtils';
import { screen, render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe('<ErrorMessageCard>', () => {
    it('Loads with error', () => {
        const card = renderWithExtensionProps(<ErrorMessageCard />);
        userEvent.click(screen.findByRole('button'));

        // React Testing Library approach to test for rendering errors
        expect(() => card.rerender(<ErrorMessageCard />)).toThrow();
    });
});