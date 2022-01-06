import { ButtonGroup, Button } from '@ellucian/react-design-system/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { withIntl } from '../utils/ReactIntlProviderWrapper';

const ThrowErrorComponent = () => {
    // This error is not caught by our extension code,
    // but Experience will catch it and display a generic error
    throw new Error('Nothing but error')
};

const ThrowErrorCard = props => {
    const { cardControl: { setErrorMessage }} = props;
    const [dashoardError, setDashoardError] = useState(false);
    const intl = useIntl();

    const throwExtensionError = () => {
        try {
            console.log(window.accessing.undefinedVariable);
        } catch (error) {
            setErrorMessage({
                headerMessage: intl.formatMessage({ id: 'ThrowErrorCard-errorHeaderMessage' }),
                textMessage: intl.formatMessage({ id: 'ThrowErrorCard-errorTextMessage' }),
                iconName: 'error',
                iconColor: '#D42828'
            });
        }
    }

    return (
        <React.Fragment>
            {dashoardError ? (
                <ThrowErrorComponent/>
            ) : (
                <ButtonGroup>
                    <Button onClick={throwExtensionError}>
                        {intl.formatMessage({ id: 'ThrowErrorCard-extensionErrorButtonText' })}
                    </Button>
                    <Button onClick={() => setDashoardError(true)}>
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
