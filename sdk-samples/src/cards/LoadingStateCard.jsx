import { Button, Typography } from '@ellucian/react-design-system/core';
import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { withIntl } from '../utils/ReactIntlProviderWrapper';

const styles = () => ({
    card: {
        marginRight: spacing40,
        marginLeft: spacing40
    }
});

/**
 * Demonstrates how to put a card in the "loading" state, using he SDK's {code}setLoadingStatus{code}
 * function.
 */
class LoadingStateCard extends React.Component {
    render() {
        const { classes, cardControl: { setLoadingStatus }, intl } = this.props;

        return (
            <div className={classes.card}>
                <Typography className={classes.label} variant="body2" color="textPrimary" paragraph>
                    {intl.formatMessage({ id: 'LoadingStateCard-label' })}
                </Typography>
                <LoadingButton setLoadingStatus={setLoadingStatus} intl={intl} />
            </div>
        );
    }
}

LoadingStateCard.propTypes = {
    cardControl: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    intl: PropTypes.object
};

export default withIntl(withStyles(styles)(LoadingStateCard));

/**
 * Renders a button that puts the card in a "loading" state for 10 seconds.
 *
 * @param {Object.<string, *>} props Component properties
 * @returns {React.Component}        A button that activates the loading state
 */
const LoadingButton = (props) => {
    const intl = useIntl();
    const [ status, setStatus ] = useState('loaded');

    /**
     * Put the card in "loading" mode
     */
    function reload() {

        setStatus('loading');
        const { setLoadingStatus } = props;

        // put the card in "loading" mode
        setLoadingStatus(true);

        // create an artificial delay
        setTimeout(reset, 10000);

    }

    /**
     * Disable the card's loading mode
     */
    function reset() {

        setStatus('loaded');

        const { setLoadingStatus } = props;

        setLoadingStatus(false);
    }

    return (
        <div>
            <Typography variant="body2" color="textPrimary" paragraph>
                {intl.formatMessage({ id: 'LoadingStateCard-status' }, { status })}
            </Typography>
            <Button aria-label={intl.formatMessage({ id: 'LoadingStateCard-reload' })} onClick={reload}>
                {intl.formatMessage({ id: 'LoadingStateCard-reload' })}
            </Button>
        </div>
    );
};

LoadingButton.propTypes = {
    setLoadingStatus: PropTypes.func.isRequired
};
