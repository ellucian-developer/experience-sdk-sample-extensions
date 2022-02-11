import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const styles = () => ({
    card: {
        marginTop: 0,
        marginRight: spacing40,
        marginBottom: 0,
        marginLeft: spacing40
    }
});

const MarkdownTemplate = (props) => {
    const { classes, cardInfo: { configuration: { customConfiguration } } } = props;

    return (
        <div className={classes.card}>
            <ReactMarkdown>{customConfiguration.markdown}</ReactMarkdown>
        </div>
    );
};

MarkdownTemplate.propTypes = {
    classes: PropTypes.object.isRequired,
    cardInfo: PropTypes.object
};

export default withStyles(styles)(MarkdownTemplate);
