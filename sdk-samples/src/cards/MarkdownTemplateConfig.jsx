import React from 'react';
import PropTypes from 'prop-types';
import { TextField} from '@ellucian/react-design-system/core';
import { withStyles } from '@ellucian/react-design-system/core/styles';

const styles = () => ({
    textField: {
        width: '100%'
    }
});

const MarkdownTemplateConfig = props => {
    const {
        classes,
        cardControl: {
            setCustomConfiguration,
            setIsCustomConfigurationValid
        },
        cardInfo: {
            configuration: {
                customConfiguration
            }
        }
    } = props;

    const client = customConfiguration ? customConfiguration.client : undefined;
    const [markdown, setMarkdown] = React.useState(client ? client.markdown : '');

    const handleChange = e => {
        const { value } = e.target;

        setMarkdown(value);
        setCustomConfiguration({
            customConfiguration: {
                client: {
                    markdown: value
                }
            }
        });
    };

    const handleBlur = e => {
        setIsCustomConfigurationValid(e.target.value !== '');
    };

    return (
        <TextField
            className={classes.textField}
            label="Comments"
            margin="normal"
            multiline
            name="multiline"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Let us know what you think!"
            value={markdown}
            fullwidth
        />
    );
};

MarkdownTemplateConfig.propTypes = {
    classes: PropTypes.object,
    cardControl: PropTypes.object,
    cardInfo: PropTypes.object
};

export default withStyles(styles)(MarkdownTemplateConfig);