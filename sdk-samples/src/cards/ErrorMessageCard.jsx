import { Button, TextField, Typography } from '@ellucian/react-design-system/core';
import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing20, spacing40 } from '@ellucian/react-design-system/core/styles/tokens';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { withIntl } from '../utils/ReactIntlProviderWrapper';

const styles = () => ({
    card: {
        marginRight: spacing40,
        marginLeft: spacing40,
        paddingBottom: spacing40
    },
    errorMessageField: {
        marginTop: spacing20,
        marginBottom: spacing20
    }
});

/**
 * Demonstrates the use of the SDK's {code}setErrorMessage{code} function to display a card-level
 * error message
 */
class ErrorMessageCard extends React.Component {
    render() {
        const { classes, cardControl: { setErrorMessage }, intl } = this.props;

        return (
            <div className={classes.card}>
                <Typography className={classes.label} variant="body2" color="textPrimary">
                    {intl.formatMessage({ id: 'ErrorMessageCard-description' })}
                </Typography>
                <ErrorMessage setErrorMessage={setErrorMessage} intl={intl} classes={classes} />
            </div>
        );
    }
}

ErrorMessageCard.propTypes = {
    cardControl: PropTypes.object.isRequired,
    classes: PropTypes.object,
    intl: PropTypes.object
};

export default withIntl(withStyles(styles)(ErrorMessageCard));

/**
 * Collects the attributes of the error message
 *
 * @param {Object.<string, any>} props Component props
 * @returns {React.Component}          The ErrorMessage card
 */
function ErrorMessage(props) {
    const [ headerMessage, setHeaderMessage ] = useState('Access denied');
    const [ textMessage, setTextMessage ] = useState('You are not permitted to see this data');
    const [ iconName, setIconName ] = useState('privacy');
    const [ iconColor, setIconColor ] = useState('red');
    const intl = useIntl();
    const { classes } = props;

    /**
     * Set the appropriate message, based on which text field fired the change.
     *
     * @param {Event} event The change event
     */
    const handleChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'headerMessage':
                setHeaderMessage(value);
                break;
            case 'textMessage':
                setTextMessage(value);
                break;
            case 'iconName':
                setIconName(value);
                break;
            case 'iconColor':
                setIconColor(value);
                break;
            default:
                break;
        }
    };

    /**
     * Show the card error message, using the provided values to configure it
     */
    function submitValues() {
        const { setErrorMessage } = props;

        if (setErrorMessage != undefined) {
            setErrorMessage({ headerMessage, textMessage, iconName, iconColor });
        }
    }

    return (
        <div>
            <TextField
                name="headerMessage"
                inputProps={{ 'aria-label': intl.formatMessage({ id: 'ErrorMessageCard-headerMessage' }) }}
                id={'headerMessage'}
                label={intl.formatMessage({ id: 'ErrorMessageCard-headerMessage' })}
                onChange={handleChange}
                fullWidth={true}
                className={classes.errorMessageField}
                value={headerMessage}
            />
            <TextField
                name="textMessage"
                inputProps={{ 'aria-label': intl.formatMessage({ id: 'ErrorMessageCard-textMessage' }) }}
                id={'textMessage'}
                label={intl.formatMessage({ id: 'ErrorMessageCard-textMessage' })}
                onChange={handleChange}
                fullWidth={true}
                className={classes.errorMessageField}
                value={textMessage}
            />
            <TextField
                name="iconName"
                inputProps={{ 'aria-label': intl.formatMessage({ id: 'ErrorMessageCard-iconName' }) }}
                id={'iconName'}
                label={intl.formatMessage({ id: 'ErrorMessageCard-iconName' })}
                onChange={handleChange}
                fullWidth={true}
                className={classes.errorMessageField}
                value={iconName}
            />
            <TextField
                name="iconColor"
                inputProps={{ 'aria-label': intl.formatMessage({ id: 'ErrorMessageCard-iconColor' }) }}
                id={'iconColor'}
                label={intl.formatMessage({ id: 'ErrorMessageCard-iconColor' })}
                onChange={handleChange}
                fullWidth={true}
                className={classes.errorMessageField}
                value={iconColor}
            />
            <Button
                aria-label={intl.formatMessage({ id: 'ErrorMessageCard-buttonAria' })}
                onClick={submitValues}
                color="secondary"
                className={classes.errorMessageField}
            >
                {intl.formatMessage({ id: 'ErrorMessageCard-submit' })}
            </Button>
        </div>
    );
}

ErrorMessage.propTypes = {
    setErrorMessage: PropTypes.func.isRequired,
    classes: PropTypes.object
};
