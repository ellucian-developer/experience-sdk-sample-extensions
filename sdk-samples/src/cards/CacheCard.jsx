import { Button, Typography } from '@ellucian/react-design-system/core';
import { withStyles } from '@ellucian/react-design-system/core/styles';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { withIntl } from '../utils/ReactIntlProviderWrapper';

const styles = () => ({
    count: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    }
});

const cacheKey = 'local-cache-card:view-count';

/**
 * Demonstrates the use of the SDK's `storeItem` function to cache data on browser local storage.
 *
 * @param {Object.<string, *>} props Component props
 * @returns {React.Component}        The Cache card
 */
const CacheCard = (props) => {
    const { classes, cache: { getItem, storeItem, removeItem }} = props;
    const intl = useIntl();
    const [ viewedCount, setViewedCount ] = useState(0);

    /**
     * Resets the view count to zero.
     */
    const resetCount = () => {
        setViewedCount(0);
        removeItem({ key: cacheKey });
    };

    useEffect(() => {

        /**
         * Updates the cached view count
         */
        const incrementCount = () => {
            const { data } = getItem({ key: cacheKey });
            const count = data ? data.count + 1 : 1;
            storeItem({ key: cacheKey, data: { count } });
            setViewedCount(count);
        };

        // load and increment view count
        incrementCount();

    }, []);

    return (
        <div className={classes.count}>
            <Typography variant="body2" color="textPrimary" paragraph>
                {intl.formatMessage({ id: 'CacheCard-viewCount' }, { viewedCount })}
            </Typography>
            <Button onClick={resetCount}>
                {intl.formatMessage({ id: 'CacheCard-reset' })}
            </Button>
        </div>
    );
};

CacheCard.propTypes = {
    classes: PropTypes.object.isRequired,
    cache: PropTypes.object.isRequired
};

export default withIntl(withStyles(styles)(CacheCard));
