import React from 'react';
import MarkdownTemplate from './MarkdownTemplate';
import { mountWithExtensionProps } from '../utils/test-utils/enzymeUtil';

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

        const card = mountWithExtensionProps(<MarkdownTemplate cardInfo={mockCardInfo} />);
        expect(card.text().includes('some text')).toBe(true);
    });
});