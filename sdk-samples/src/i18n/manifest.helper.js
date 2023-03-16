const ar = require('./ar.json').messages;
const enAu = require('./en-AU.json').messages;
const enGb = require('./en-GB.json').messages;
const enUs = require('./en.json').messages;
const es = require('./es.json').messages;
const frCa = require('./fr-CA.json').messages;

const locales = {
    ar,
    'en-AU': enAu,
    'en-GB': enGb,
    'en-US': enUs,
    es,
    'fr-CA': frCa
};

/**
 * @param {String} locale a locale key which follows BCP 47 format
 * @param {String} property the property key to be translated
 * @returns a translation based on the locale and property
 */
function i18nHelper(locale, property) {
    return locales[locale][property];
}

module.exports = i18nHelper;