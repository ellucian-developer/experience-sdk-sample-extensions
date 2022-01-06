import { Typography } from '@ellucian/react-design-system/core';
import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const styles = () => ({
    card: {
        marginRight: spacing40,
        marginLeft: spacing40,
        paddingBottom: spacing40
    }
});

const CardConfigurationCard = (props) => {
    const { classes, cardInfo: { configuration } } = props;

    const configurationItems = [];

    if (configuration) {
        Object.keys(configuration).forEach((key) => {
            configurationItems.push({
                key,
                value: configuration[key]
            });
        });
    }

    return (
        <div className={classes.card}>
            {configurationItems.map((item) => (
                <Fragment key={item.key}>
                    <Typography variant="body2" color="textPrimary">
                        {item.key}:
                    </Typography>
                    <Typography variant="body2" color="textPrimary">
                        {item.value}
                    </Typography>
                </Fragment>
            ))}
        </div>
    );
};

CardConfigurationCard.propTypes = {
    classes: PropTypes.object.isRequired,
    cardInfo: PropTypes.object.isRequired
};

export default withStyles(styles)(CardConfigurationCard);
