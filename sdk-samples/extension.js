module.exports = {
    "name": "EET-4254-miniCardIcon",
    "publisher": "iman",
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
        "title": "EET-4254-miniCardIcon Throw Error",
        "displayCardType": "Nothing but Error",
        "description": "Throws an Error"
    }, {
        "type": "CardConfigurationCard",
        "source": "./src/cards/CardConfigurationCard",
        "title": "EET-4254-miniCardIcon Card Configuration",
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
        "title": "EET-4254-miniCardIcon Buildings",
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
        "title": "EET-4254-miniCardIcon Cache Card",
        "miniCardIcon": "usd-circle",
        "displayCardType": "Cache Card",
        "description": "Cache Card"
    }, {
        "type": "PreventRemoveCard",
        "source": "./src/cards/PreventRemoveCard",
        "miniCardIcon": "file-certificate",
        "title": "EET-4254-miniCardIcon Prevent Remove",
        "displayCardType": "Prevent Remove",
        "description": "This card can prevent its removal"
    }, {
        "type": "DrilldownCard",
        "source": "./src/cards/DrilldownCard",
        "miniCardIcon": "list-view",
        "title": "EET-4254-miniCardIcon Drilldown Example",
        "displayCardType": "Drilldown Example",
        "description": "This card demostrates drilldown pattern"
    }, {
        "type": "LoadingStateCard",
        "source": "./src/cards/LoadingStateCard",
        "miniCardIcon": "download",
        "title": "EET-4254-miniCardIcon Loading State",
        "displayCardType": "Loading State",
        "description": "This card sets it state to loading for 10 seconds"
    }, {
        "type": "ErrorMessageCard",
        "source": "./src/cards/ErrorMessageCard",
        "miniCardIcon": "rejected-icon-doesnt-exist",
        "title": "EET-4254-miniCardIcon Error Message",
        "displayCardType": "Error Message",
        "description": "This card sets an error message to display"
    }, {
        "type": "PropsCard",
        "source": "./src/cards/PropsCard",
        "title": "EET-4254-miniCardIcon Properties",
        "displayCardType": "Properties Card",
        "description": "This card displays non-function properties",
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
            "image": "./src/assets/markdown.jpeg",
            "title": "Markdown Template"
        },
        "customConfiguration": {
            "source": "./src/cards/MarkdownTemplateConfig.jsx"
        }
    }],
    "page": {
        "source": "./src/page/index.jsx"
    }
}
