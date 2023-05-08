import { ButtonGroup, Button } from '@ellucian/react-design-system/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { withIntl } from '../utils/ReactIntlProviderWrapper';

const ThrowErrorComponent = () => {
    // This error is not caught by our extension code,
    // but Experience will catch it and display a generic error
    throw new Error('Nothing but error');
};

/**
 * A card that demonstrates how to handle both caught and uncaught exceptions. Uses the
 * SDK {code}setErrorMessage{code} function.
 *
 * @param {Object.<string, *>} props Component props
 * @returns {React.Component}        The ThrowError card
 */
const ThrowErrorCard = (props) => {
    const { cardControl: { setErrorMessage }} = props;
    const [dashboardError, setDashboardError] = useState(false);
    const intl = useIntl();

    /**
     * Induces an exception, and then catches and handles it gracefully within the card.
     */
    const throwExtensionError = () => {
        try {
            console.log(window.accessing.undefinedVariable);
        } catch (error) {

            // use the SDK to post an error message in the card
            setErrorMessage({
                headerMessage: intl.formatMessage({ id: 'ThrowErrorCard-errorHeaderMessage' }),
                textMessage: intl.formatMessage({ id: 'ThrowErrorCard-errorTextMessage' }),
                iconName: 'error',
                iconColor: '#D42828'
            });

        }
    };

    return (
        <React.Fragment>
            {dashboardError ? (
                <ThrowErrorComponent/>
            ) : (
                <ButtonGroup>
                    <Button onClick={throwExtensionError}>
                        {intl.formatMessage({ id: 'ThrowErrorCard-extensionErrorButtonText' })}
                    </Button>
                    <Button onClick={() => setDashboardError(true)}>
                        {intl.formatMessage({ id: 'ThrowErrorCard-dashboardErrorButtonText' })}
                    </Button>
                </ButtonGroup>
            )}
        </React.Fragment>
    );
};

ThrowErrorCard.propTypes = {
    cardControl: PropTypes.object
};

export default withIntl(ThrowErrorCard);
