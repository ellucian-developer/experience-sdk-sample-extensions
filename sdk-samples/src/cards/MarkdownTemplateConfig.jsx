import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextField} from '@ellucian/react-design-system/core';
import { withIntl } from '../utils/ReactIntlProviderWrapper';

const MarkdownTemplateConfig = (props) => {
    const {
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

    const validColors = ['orange', 'black', 'red', 'green', 'blue'];

    const client = customConfiguration ? customConfiguration.client : undefined;
    const [markdown, setMarkdown] = React.useState(client ? client.markdown : '');
    const [color, setColor] = React.useState(client ? client.color : '');
    const [markdownError, setMarkdownError] = React.useState(false);
    const [colorError, setColorError] = React.useState(false);


    // do an initial validation when the custom configuration first mounts; this is to catch
    // required-field errors, which wouldn't otherwise appear until the required fields are
    // interacted with
    useEffect(() => {
        updateCustomConfigVerification();
    }, []);

    // update the custom configuration whenever any values change
    useEffect(() => {
        updateCustomConfig();
    }, [markdown, color]);


    const handleCommentsChange = e => {
        const { value } = e.target;
        setMarkdown(value);
    };

    const handleColorChange = e => {
        const { value } = e.target;
        setColor(value);
    };

    const updateCustomConfig = () => {

        console.log(`markdown: ${markdown}`);
        console.log(`color: ${color}`);

        setCustomConfiguration({
            customConfiguration: {
                client: {
                    markdown: markdown,
                    color: color
                }
            }
        });

    };

    // verify all custom config fields
    const updateCustomConfigVerification = () => {

        let errorCount = 0;
        let invalidColor = false;

        // markdown text is required
        if (markdown === undefined || markdown.length === 0) {
            errorCount++;
        }

        // if a color was entered, make sure it's valid
        if (color !== undefined && color.length > 0 && !validColors.includes(color)) {
            errorCount++;
            invalidColor = true;
        }

        // update individual field error states
        setMarkdownError(markdown === undefined || markdown.length === 0);
        setColorError(invalidColor);

        // register validation errors: whether there's an error, and how many errors there are
        setIsCustomConfigurationValid(errorCount === 0, errorCount);

    }

    return (
        <React.Fragment>

            <TextField
                label="Comments"
                margin="normal"
                required
                multiline
                name="multiline"
                onBlur={updateCustomConfigVerification}
                onChange={handleCommentsChange}
                placeholder={props.intl.formatMessage({ id: 'MarkdownTemplate-markdown-placeholder' })}
                value={markdown}
                fullWidth
                error={markdownError}
            />

            <br/>

            <TextField
                 label="Text Color"
                 margin="normal"
                 name="color"
                 onBlur={updateCustomConfigVerification}
                 onChange={handleColorChange}
                 placeholder={props.intl.formatMessage({ id: 'MarkdownTemplate-color-placeholder' })}
                 helperText={props.intl.formatMessage({ id: 'MarkdownTemplate-valid-colors' }, {colors: validColors.join(', ')})}
                 value={color}
                 fullWidth
                 error={colorError}
            />

         </React.Fragment>
    );
};

MarkdownTemplateConfig.propTypes = {
    cardControl: PropTypes.object,
    cardInfo: PropTypes.object,
    intl: PropTypes.object
};

export default withIntl(MarkdownTemplateConfig);