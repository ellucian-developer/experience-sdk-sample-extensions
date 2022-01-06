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

function LoadingButton(props) {
    const intl = useIntl();
    const [ status, setStatus ] = useState('loaded');

    function reload() {
        setStatus('loading');
        const { setLoadingStatus } = props;

        if (setLoadingStatus != undefined) {
            setLoadingStatus(true);
        }
        setTimeout(reset, 10000);
    }

    function reset() {
        setStatus('loaded');
        const { setLoadingStatus } = props;

        if (setLoadingStatus != undefined) {
            setLoadingStatus(false);
        }
    }

    return (
        <div>
            <Typography variant="body2" color="textPrimary" paragraph>
                {intl.formatMessage({ id: 'LoadingStateCard-status' }, { status })}
            </Typography>
            <Button aria-label={'Set loading status'} onClick={reload}>
                {intl.formatMessage({ id: 'LoadingStateCard-reload' })}
            </Button>
        </div>
    );
}

LoadingButton.propTypes = {
    setLoadingStatus: PropTypes.func.isRequired
};
