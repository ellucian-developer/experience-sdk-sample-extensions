import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';
import { Typography, TextLink } from '@ellucian/react-design-system/core';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import {
    useCache,
    useCardInfo,
    useData,
    useExperienceInfo,
    useExtensionControl,
    useExtensionInfo,
    useThemeInfo,
    useUserInfo,
    useDashboardInfo,
    useCardControl,
    usePageControl,
    usePageInfo
} from '@ellucian/experience-extension/extension-utilities'

const styles = () => ({
    card: {
        marginTop: 0,
        marginRight: spacing40,
        marginBottom: 0,
        marginLeft: spacing40
    }
});

/**
 * Demonstrates how to access all of the data and functions provided to extension cards,
 * via both props and hooks.
 *
 * @param {Object.<string, *>} props Component properties
 * @returns {React.Component}        The Props card
 */
const PropsCard = (props) => {
    const { classes } = props;

    return (
        <div className={classes.card}>
            <Typography>
                {moment().format('LL')}
            </Typography>
            <Typography variant={'h2'}>
                Properties
            </Typography>
            <pre className={classes.card}>{JSON.stringify(props, undefined, 3)}</pre>
            <Typography variant={'h2'}>
                Hooks
            </Typography>
            <pre className={classes.card}> useCache {JSON.stringify(useCache(), undefined, 3)}</pre>
            <pre className={classes.card}> useCardInfo {JSON.stringify(useCardInfo(), undefined, 3)}</pre>
            <pre className={classes.card}> useData {JSON.stringify(useData(), undefined, 3)}</pre>
            <pre className={classes.card}> useExperienceInfo {JSON.stringify(useExperienceInfo(), undefined, 3)}</pre>
            <pre className={classes.card}> useExtensionControl {JSON.stringify(useExtensionControl(), undefined, 3)}</pre>
            <pre className={classes.card}> useExtensionInfo {JSON.stringify(useExtensionInfo(), undefined, 3)}</pre>
            <pre className={classes.card}> useThemeInfo {JSON.stringify(useThemeInfo(), undefined, 3)}</pre>
            <pre className={classes.card}> useUserInfo {JSON.stringify(useUserInfo(), undefined, 3)}</pre>
            <pre className={classes.card}> useDashboardInfo {JSON.stringify(useDashboardInfo(), undefined, 3)}</pre>
            <pre className={classes.card}> useCardControl {JSON.stringify(useCardControl(), undefined, 3)}</pre>
            <pre className={classes.card}> usePageControl {JSON.stringify(usePageControl(), undefined, 3)}</pre>
            <pre className={classes.card}> usePageInfo {JSON.stringify(usePageInfo(), undefined, 3)}</pre>
            <Typography>
                For more information regarding hooks and props, visit the
                <TextLink href="https://resources.elluciancloud.com/bundle/ellucian_experience_acn_use/page/c_props_hooks_sdk.html" target="_blank">
                    Props and Hooks
                </TextLink>
                section of the Ellucian Experience SDK documentation.
            </Typography>
        </div>
    );
};

PropsCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PropsCard);