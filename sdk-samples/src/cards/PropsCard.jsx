import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';
import PropTypes from 'prop-types';
import React from 'react';
import { withIntl } from '../utils/ReactIntlProviderWrapper';

const styles = () => ({
    card: {
        marginTop: 0,
        marginRight: spacing40,
        marginBottom: 0,
        marginLeft: spacing40
    }
});

const PropsCard = (props) => {
    const { classes } = props;

    return <pre className={classes.card}>{JSON.stringify(props, undefined, 2)}</pre>;
};

PropsCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withIntl(withStyles(styles)(PropsCard));
