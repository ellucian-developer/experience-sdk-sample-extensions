const helper = require('./src/i18n/manifest.helper.js');

module.exports = {
    "name": "sdk-samples",
    "publisher": "Sample",
    "configuration": {
        "client": [{
            "key": "extension-client-url",
            "label": "extension client url",
            "type": "url",
            "required": true
        }, {
            "key": "extension-client-text",
            "label": "extension client text",
            "type": "text"
        }, {
            "key": "extension-client-password",
            "label": "extension client password",
            "type": "password"
        }],
        "server": [{
            "key": "extension-server-url",
            "label": "extension server url",
            "type": "url",
            "required": true
        }, {
            "key": "extension-server-text",
            "label": "extension server text",
            "type": "text"
        }, {
            "key": "extension-server-password",
            "label": "extension server password",
            "type": "password"
        }]
    },
    "cards": [{
        "type": "ThrowErrorCard",
        "source": "./src/cards/ThrowErrorCard.jsx",
        "category": "insights",
        "title": "Throw Error",
        "displayCardType": "Nothing but Error",
        "description": "Throws an Error"
    }, {
        "type": "CardConfigurationCard",
        "source": "./src/cards/CardConfigurationCard",
        "title": "Card Configuration",
        "category": "academics",
        "displayCardType": "Card Configuration",
        "description": "Card Configuration",
        "configuration": {
            "client": [{
                "key": "card-client-url",
                "label": "card client url",
                "type": "url",
                "required": true
            }, {
                "key": "card-client-text",
                "label": "card client text",
                "type": "text"
            }, {
                "key": "card-client-password",
                "label": "card client password",
                "type": "password"
            }],
            "server": [{
                "key": "card-server-url",
                "label": "card server url",
                "type": "url",
                "required": true
            }, {
                "key": "card-server-text",
                "label": "card server text",
                "type": "text"
            }, {
                "key": "card-server-password",
                "label": "card server password",
                "type": "password"
            }]
        }
    }, {
        "type": "GraphQLQueryCard",
        "source": "./src/cards/GraphQLQueryCard",
        "miniCardIcon": "building",
        "category": "work",
        "title": "Buildings",
        "displayCardType": "GraphQL Query",
        "description": "GraphQL Query",
        "queries": {
            "list-sites": [
                {
                    "resourceVersions": {
                        "sites": { min: 6 },
                    },
                    "query":
                        `{
                            sites: {sites} (
                                sort: { title: ASC }
                            )
                            {
                                edges {
                                    node {
                                        id
                                        title
                                    }
                                }
                            }
                        }`
                }
            ],
            "list-buildings": [
                {
                    "resourceVersions": {
                        "buildings": { min: 6 },
                        "sites": { min: 6 },
                    },
                    "query":
                        `query listBuildings($siteId: ID){
                            buildings : {buildings}(
                                filter: {
                                    {site}: {
                                        id: { EQ: $siteId }
                                    }
                                },
                                sort: { title: ASC }
                            )
                            {
                                edges {
                                    node {
                                        id
                                        title
                                        site  : {site} {
                                            id
                                        }
                                    }
                                }
                            }
                        }`
                }
            ]
        }
    }, {
        "type": "CacheCard",
        "source": "./src/cards/CacheCard",
        "title": "Cache Card",
        "category": "community",
        "miniCardIcon": "usd-circle",
        "displayCardType": "Cache Card",
        "description": "Cache Card"
    }, {
        "type": "PreventRemoveCard",
        "source": "./src/cards/PreventRemoveCard",
        "category": "myaccount",
        "miniCardIcon": "file-certificate",
        "title": "Prevent Remove",
        "displayCardType": "Prevent Remove",
        "description": "This card can prevent its removal"
    }, {
        "type": "DrilldownCard",
        "source": "./src/cards/DrilldownCard",
        "miniCardIcon": "list-view",
        "title": "Drilldown Example",
        "displayCardType": "Drilldown Example",
        "description": "This card demostrates drilldown pattern"
    }, {
        "type": "LoadingStateCard",
        "source": "./src/cards/LoadingStateCard",
        "miniCardIcon": "download",
        "title": "Loading State",
        "displayCardType": "Loading State",
        "description": "This card sets it state to loading for 10 seconds"
    }, {
        "type": "ErrorMessageCard",
        "source": "./src/cards/ErrorMessageCard",
        "title": "Error Message",
        "displayCardType": "Error Message",
        "description": "This card sets an error message to display"
    }, {
        "type": "PropsCard",
        "source": "./src/cards/PropsCard",
        "title": {
            "en-US": helper('en-US', 'Manifest-title'),
            "en-AU": helper('en-AU', 'Manifest-title'),
            "en-GB": helper('en-GB', 'Manifest-title'),
            "fr-CA": helper('fr-CA', 'Manifest-title'),
            "ar": helper('ar', 'Manifest-title'),
            "es": helper('es', 'Manifest-title')
        },
        "displayCardType": {
            "en-US": helper('en-US', 'Manifest-displayCardType'),
            "en-AU": helper('en-AU', 'Manifest-displayCardType'),
            "en-GB": helper('en-GB', 'Manifest-displayCardType'),
            "fr-CA": helper('fr-CA', 'Manifest-displayCardType'),
            "ar": helper('ar', 'Manifest-displayCardType'),
            "es": helper('es', 'Manifest-displayCardType')
        },
        "description": {
            "en-US": helper('en-US', 'Manifest-description'),
            "en-AU": helper('en-AU', 'Manifest-description'),
            "en-GB": helper('en-GB', 'Manifest-description'),
            "fr-CA": helper('fr-CA', 'Manifest-description'),
            "ar": helper('ar', 'Manifest-description'),
            "es": helper('es', 'Manifest-description')
        },
        "pageRoute": {
            "route": "/"
        }
    }, {
        "type": "MarkdownTemplate",
        "source": "./src/cards/MarkdownTemplate.jsx",
        "title": "Markdown Template",
        "displayCardType": "Markdown Template",
        "description": "Markdown Template",
        "template": {
            "icon": "applications",
            "title": "Markdown Template",
            "description": "Markdown template description"
        },
        "customConfiguration": {
            "source": "./src/cards/MarkdownTemplateConfig.jsx"
        }
    }],
    "page": {
        "source": "./src/page/index.jsx"
    }
}
