import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacingSmall } from '@ellucian/react-design-system/core/styles/tokens';
import PropTypes from 'prop-types';
import React from 'react';

const styles = () => ({
    card: {
        margin: `0 ${spacingSmall}`
    }
});

const PropsPage = (props) => {
    const { classes } = props;

    return <pre className={classes.card}>{JSON.stringify(props, undefined, 2)}</pre>;
};

PropsPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PropsPage);