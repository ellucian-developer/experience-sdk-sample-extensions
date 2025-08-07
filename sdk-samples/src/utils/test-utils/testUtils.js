import React from 'react';
import { IntlProvider } from 'react-intl';
import { render } from '@testing-library/react';
import { getMessages } from '../../i18n/intlUtility';
import { EDSApplication } from '@ellucian/react-design-system/core';

const locale = 'en';
const mockSetErrorMessage = jest.fn();

/**
 * Sets up the React context on which extensions depend
 */
export function setupExtensionContext() {
    const ContextProvider = React.createContext({});

    global.contexts = {
        ExtensionContext: ContextProvider
    };

    return ContextProvider;
}

/**
 * Wrapper around React Testing Library's render to add necessary parents and extension props
 *
 * @param {JSXElement} component -The JSX element to wrap with needed parents
 * @param {Object} options        Additional options to pass to render
 * @return {React.element}        Render result from React Testing Library
 */
export function renderWithExtensionProps(component, options = {}) {
    return render(withProps(component), {
        wrapper: CardWrappingComponent,
        ...options
    });
}

function withProps(element) {
    const oldProps = element.props;
    const tempElement = React.cloneElement(
        element,
        {
            userInfo: { locale },
            cardControl: { setErrorMessage: mockSetErrorMessage }
        }
    );
    return React.cloneElement(tempElement, oldProps);
}


/**
 * Wraps the given DOM tree with all the React contexts that extensions might depend on
 */
function CardWrappingComponent(props) {
    const { children } = props;

    const extensionContext = {
        experienceInfo: { id: 'test-experience' },
        cardInfo: { id: 'test-card' },
        userInfo: { id: 'test-user' },
        extensionInfo: { id: 'test-extension' },
        extensionControl: { someControl: () => {} },
        data: { someData: 'test-data' },
        cache: { get: () => {}, set: () => {} },
        themeInfo: { theme: 'light' },
        dashboardInfo: { id: 'test-dashboard' },
        cardControl: { resize: () => {} },
        pageControl: { navigate: () => {}, setPageTitle: () => {} },
        pageInfo: { path: '/test-page' }
    };

    var ExtensionContext = global.contexts.ExtensionContext;

    return (
        <EDSApplication>
            <IntlProvider locale={locale} messages={getMessages(locale)}>
                <ExtensionContext.Provider value={extensionContext}>
                    {children}
                </ExtensionContext.Provider>
            </IntlProvider>
        </EDSApplication>
    );
}

// Re-export common testing utilities for convenience
export { screen, fireEvent, waitFor, within } from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
