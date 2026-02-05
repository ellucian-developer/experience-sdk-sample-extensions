import ThrowErrorCard from '../../cards/ThrowErrorCard';
import { render } from '@testing-library/react';

describe('<ThrowErrorCard>', () => {
    it('Throws an error', () => {
        expect(() => render(<ThrowErrorCard />)).toThrow();
    });
});