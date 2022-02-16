Ellucian © 2022 Ellucian Company L.P. and its affiliates

## experience-sdk-sample-extensions
This repository is compiled of Experience extension sample cards meant to be used in conjunction with the Ellucian Experience SDK (Software Development Kit). These samples cards are located within the src/cards folder. Intended to be used by developers who want to learn how to build Experience extensions, these examples are provided as a resource to understand how react hooks, props, and UI components behave inside of an extension. 

To learn more about how to use these sample extensions, follow the [Ellucian Toolkit Developer Community Forum](https://ellucian.service-now.com/community?id=community_forum&sys_id=e73389abdb4f5c50c23a3cae7c961913) or visit the Ellucian Experience Resource Center. 

### GraphQLCard
This card demonstrates how GraphQL queries can be executed to retrieve data from Ethos. First, the list of Sites is retrieved and presented to the user. Once the user chooses a site, a second Ethos query retrieves the buildings for that site and displays it in a list.
The Ellucian Path Design System is used to create visual components. Check out the returned JSX from this function. The JSS used to style the card is in the styles variable, and the withStyles Higher-Order Component is used in the statement exporting this card.
The results of the request for sites are stored in the dashboard's cache. See how storeItem is used in the initial useEffect.
The card tells the dashboard to show the skeleton-loading components while the Sites are fetched from Ethos or cache. This is handled by the two calls to setLoadingStatus in the initial useEffect hook.
Multiple languages are supported in this card by use of the ReactIntlProviderWrapper. withIntl is used in the statement exporting this card. The strings to be replaced by local versions are throughout the JSX with calls to intl.formatMessage, passing in id to the string to use and optionally values to use for substituting values.

### CacheCard
Like the GraphQLCard, this uses the cache available to cards. This card will remember how many times this card is loaded. When you press refresh in your browser, this card loads and increments the counter stored in the cache. To remove this value from the cache, hit the Reset button.
The Ellucian Path Design System is used to create visual components. Check out the returned JSX from this function. The JSS used to style the card is in the styles variable, and the withStyles Higher-Order Component is used in the statement exporting this card.
Multiple languages are supported in this card by use of the ReactIntlProviderWrapper. withIntl is used in the statement exporting this card. The strings to be replaced by local versions are throughout the JSX with calls to intl.formatMessage, passing in id to the string to use and optionally values to use for substituting values.

### CardConfigurationCard
This card shows all the keys and values stored in the configuration of this extension and card. This is only for demonstration purposes.
The Ellucian Path Design System is used to create visual components. Check out the returned JSX from this function. The JSS used to style the card is in the styles variable, and the withStyles Higher-Order Component is used in the statement exporting this card.

### DrilldownCard
Some cards need to show additional data when a user selects an item. This pattern allows the card to show that additional data, with a back button for the user to go back to what they were seeing before. In this example, this card counts how many times the drilldown happens. When the button is tapped, the counter stored in the cache increases. When the counter is changed, the useEffect hook will call drilldown(). The arguments to drilldown() are a callback function to call when the back arrow is tapped and the message to place in the card's header instead of the card's title. The user can go back either by tapping the back arrow provided by the dashboard or tapping the button. Either option will call the same API resetDrilldown().
The Ellucian Path Design System is used to create visual components. Check out the returned JSX from this function. The JSS used to style the card is in the styles variable, and the withStyles Higher-Order Component is used in the statement exporting this card.
Multiple languages are supported in this card by use of the ReactIntlProviderWrapper. withIntl is used in the statement exporting this card. The strings to be replaced by local versions are throughout the JSX with calls to intl.formatMessage, passing in id to the string to use and optionally values to use for substituting values.

### ErrorMessageCard
Sometimes there are conditions where you want to show an error to the user. This may be because the user does not have data or a server is offline. These are paths where the code in the card is behaving correctly and wants to report an error or message to the user. The SDK delivers a standard method to do that so different cards can have a consistent look. This card asks the user for a header message, a text message, an icon, and an icon color. When the form is submitted the standard view is shown.
Normally the developer would make these decisions and tell the dashboard to show this view by calling setErrorMessage.
The names of the icons available to use are in the Ellucian Path Design System documentation under Design Guidelines - Iconography.
The Ellucian Path Design System is used to create visual components. Check out the returned JSX from this function. The JSS used to style the card is in the styles variable, and the withStyles Higher-Order Component is used in the statement exporting this card.
Multiple languages are supported in this card by use of the ReactIntlProviderWrapper. withIntl is used in the statement exporting this card. The strings to be replaced by local versions are throughout the JSX with calls to intl.formatMessage, passing in id to the string to use and optionally values to use for substituting values.

### LoadingStateCard
When a card needs time to load, it is best to show something to the user. Instead of different cards providing different behavior in these cases, the SDK provides the setLoadingStatus() function to tell the dashboard to show the standard loading view. In this card, the button will trigger the call to show the loading view for ten seconds and then disappear back to the other content.
The Ellucian Path Design System is used to create visual components. Check out the returned JSX from this function. The JSS used to style the card is in the styles variable, and the withStyles Higher-Order Component is used in the statement exporting this card.
Multiple languages are supported in this card by use of the ReactIntlProviderWrapper. withIntl is used in the statement exporting this card. The strings to be replaced by local versions are throughout the JSX with calls to intl.formatMessage, passing in id to the string to use and optionally values to use for substituting values.

### PreventRemoveCard
Users can normally choose to bookmark cards to their dashboard. However, there may be a reason why the user should complete an action before removing the card. This card demonstrates how to disable the 'remove bookmark' button by calling setPreventRemove() and send the message to display in the tooltip in setPreventRemoveMessage(). Normally, this would be the developer writing code on when to trigger calls to setPreventRemove(), and the switch provided in this card is only for demonstration.
The Ellucian Path Design System is used to create visual components. Check out the returned JSX from this function. The JSS used to style the card is in the styles variable, and the withStyles Higher-Order Component is used in the statement exporting this card.
Multiple languages are supported in this card by use of the ReactIntlProviderWrapper. withIntl is used in the statement exporting this card. The strings to be replaced by local versions are throughout the JSX with calls to intl.formatMessage, passing in id to the string to use and optionally values to use for substituting values.

### PropsCard
This card shows all the properties passed into the card. This is only for demonstration purposes.
The Ellucian Path Design System is used to create visual components. Check out the returned JSX from this function. The JSS used to style the card is in the styles variable, and the withStyles Higher-Order Component is used in the statement exporting this card.

### ThrowErrorCard
If a card behaves badly, the dashboard will remove that card and replace it with a card that tells the user that something went wrong. This card demonstrates what happens when an error occurs.

### MarkdownTemplate
This creates a template to make cards from. Templates will appear under dashboard's "Add New" menu in the configuration page. Child cards created through a template will have configuration independent from each other. When a template extension is deleted or disabled through the setup app, all child cards created from that template will also be deleted or disabled, respectively.

### MarkdownTemplateConfig
The template utilizies the customConfiguration prop to add its own configuration values to the dashboard's configuration step. When customConfiguration is set in a template, any cards produced from the template will be able to utilize the customConfiguration. Cards created from a template each can have their own unique values of customConfiguration.

## Sample page
This page shows all the properties passed into the page. This is only for demonstration purposes.

## Utilities

### ReactIntlProviderWrapper.jsx
Ellucian Experience has chosen to use 'react-intl' library for localizing the content displayed in the Ellucian Experience dashboard. Sample cards here have also used 'react-intl' library. To use 'react-intl' inside a card, you would typically initialize the IntlProvider and wrap your content with injectIntl. Instead of doing that, you can follow the patterns that these sample cards follow by using this ReactIntlProviderWrapper as a Higher-Order Component around your card. The localized strings are found inside .json files within ./src/i18n.
If you choose to localize your cards, you can follow this pattern or use your preferred frameworks to manage localizations.

### Unit testing
The project has jest and enzyme libraries present to run unit tests. By starting the test runner (npm run test), the project folders under src will be searched for files that end with test.js and execute those tests.

test2
