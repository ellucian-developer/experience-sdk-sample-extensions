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

const CacheCard = (props) => {
    const { classes, cache: { getItem, storeItem, removeItem }} = props;
    const intl = useIntl();
    const [ viewedCount, setViewedCount ] = useState(0);

    const resetCount = () => {
        setViewedCount(0);
        removeItem({ key: cacheKey });
    };

    useEffect(() => {
        const fetchCount = async () => {
            const { data } = await getItem({ key: cacheKey });
            const count = data ? data.count + 1 : 1;
            storeItem({ key: cacheKey, data: { count } });
            setViewedCount(count);
        };

        // load and increment view count
        fetchCount();
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
