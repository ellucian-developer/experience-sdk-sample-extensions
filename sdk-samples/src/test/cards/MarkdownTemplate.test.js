import MarkdownTemplate from '../../cards/MarkdownTemplate';
import { renderWithExtensionProps } from '../../utils/test-utils/testUtils';
import { screen } from '@testing-library/react';

jest.mock("react-markdown", () => (props) => {
    return <>{props.children}</>
})

describe('<MarkdownTemplate>', () => {
    it('Sets markdown text', () => {

        const mockCardInfo = {
            configuration: {
                customConfiguration: {
                    markdown: '### some text'
                }
            }
        };

        renderWithExtensionProps(<MarkdownTemplate cardInfo={mockCardInfo} />);
        expect(screen.getByText('### some text')).toBeInTheDocument()
    });
});