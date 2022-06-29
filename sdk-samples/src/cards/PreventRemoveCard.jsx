import { Switch, Typography } from '@ellucian/react-design-system/core';
import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { withIntl } from '../utils/ReactIntlProviderWrapper';

const styles = () => ({
    card: {
        marginRight: spacing40,
        marginLeft: spacing40
    }
});

/**
 * Demonstrates how to prevent a card from being removed from the dashboard. Uses
 * the SDK's {code}setPreventRemove{code} and {code}setPreventRemoveMessage{code}
 * functions.
 */
class PreventRemoveCard extends React.Component {
    render() {
        const { classes, cardControl: { setPreventRemove, setPreventRemoveMessage }, intl } = this.props;

        return (
            <div className={classes.card}>
                <Typography variant="body2" color="textPrimary">
                    {intl.formatMessage({ id: 'PreventRemoveCard-switchLabel' })}
                </Typography>
                <TogglePreventRemove setPreventRemove={setPreventRemove} setPreventRemoveMessage={setPreventRemoveMessage} />
            </div>
        );
    }
}

PreventRemoveCard.propTypes = {
    cardControl: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    intl: PropTypes.object
};

export default withIntl(withStyles(styles)(PreventRemoveCard));


/**
 * A switch to enable/disable the ability for users to remove a card from the Experience dashboard.
 *
 * @param {Object.<string, any>} props Component props
 * @returns {React.Component}          A Switch control that enables/disables card removal
 */
 const TogglePreventRemove = (props) => {
    const [ toggle, setToggle ] = useState(false);

    function toggleSwitch() {
        setToggle(!toggle);
        const { setPreventRemove, setPreventRemoveMessage } = props;

        if (setPreventRemove != undefined) {
            setPreventRemove(!toggle);
            setPreventRemoveMessage(`You can't remove me!`);
        }
    }

    return (
        <Switch
            inputProps={{ 'aria-label': 'Toggle prevent remove' }}
            id={`switch-prevent-remove`}
            checked={toggle}
            onChange={toggleSwitch}
        />
    );
};

TogglePreventRemove.propTypes = {
    setPreventRemove: PropTypes.func.isRequired,
    setPreventRemoveMessage: PropTypes.func.isRequired
};
