import { Button, Typography } from '@ellucian/react-design-system/core';
import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { withIntl } from '../utils/ReactIntlProviderWrapper';

const styles = {
    card: {
        marginRight: spacing40,
        marginLeft: spacing40
    }
};

/**
 * Demonstrates the use of the `drillDown` function to navigate between views in a card.
 *
 * @param {Object.<string, any>} props Component props
 * @returns {React.Component}          The Drilldown card
 */
const DrilldownCard = (props) => {

    const { classes, cardControl: { drilldown, resetDrilldown } = {}} = props;
    const intl = useIntl();
    const [ count, setCount ] = useState(0);
    const [ inDetail, setInDetail ] = useState(false);

    useEffect(
        () => {
            if (count > 0) {
                setInDetail(true);
            }
        },
        [ count ]
    );

    useEffect(
        () => {
            if (inDetail) {
                drilldown(() => {
                    setInDetail(false);
                }, intl.formatMessage({ id: 'DrilldownCard-clicks' }, { count }));
            }
        },
        [ inDetail ]
    );

    return inDetail ? (
        <div className={classes.card}>
            <Typography paragraph>
                {intl.formatMessage({ id: 'DrilldownCard-message' }, { count })}
            </Typography>
            <Button
                onClick={() => {
                    resetDrilldown();
                    setInDetail(false);
                }}
            >
                {intl.formatMessage({ id: 'DrilldownCard-goBack' })}
            </Button>
        </div>
    ) : (
        <div className={classes.card}>
            <Button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                {intl.formatMessage({ id: 'DrilldownCard-clickMe' })}
            </Button>
        </div>
    );
};

DrilldownCard.propTypes = {
    classes: PropTypes.object.isRequired,
    cardControl: PropTypes.object.isRequired
};

export default withIntl(withStyles(styles)(DrilldownCard));
