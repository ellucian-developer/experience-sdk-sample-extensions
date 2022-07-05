import React from 'react';
import { injectIntl, IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import { getMessages } from '../i18n/intlUtility';

/**
 * An HOC (higher-order component) that injects react-intl internationalization resources into the given component.
 *
 * Works in concert with react-intl's {code}useIntl{code} hook, which the wrapped components can use
 * to retrieve internationalization properties.
 *
 * @param {React.Component} Component The component into which we're injecting internationalization properties.
 * @returns {React.Component}         Wrapped component
 */
export function withIntl(Component) {
    let InjectedComponent;

    class WithIntl extends React.Component {
        constructor(props) {
            super(props);
            InjectedComponent = injectIntl(Component);
        }
        render() {
            const { userInfo: { locale } } = this.props;

            return (
                <IntlProvider locale={locale} messages={getMessages(locale)}>
                    <InjectedComponent {...this.props} />
                </IntlProvider>
            );
        }
    }
    WithIntl.propTypes = {
        userInfo: PropTypes.object
    };
    WithIntl.displayName = `WithIntl(${Component.displayName})`;
    return WithIntl;
}
