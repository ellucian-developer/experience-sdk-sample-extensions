import i18nHelper from "../../i18n/manifest.helper";

describe('validates i18nHelper', () => {
    it('validates with en-US', () => {
        const enUSTranslation = i18nHelper('en-US', 'Manifest-title');

        expect(enUSTranslation).toBe('English US Props Title');
    });
    it.skip('validates with en-AU', () => {
        const enAUTranslation = i18nHelper('en-AU', 'Manifest-title');

        // TODO: update to use be whatever the translation becomes
        expect(enAUTranslation).toBe('English AU Title');
    });
    it.skip('validates with en-GB', () => {
        const enGBTranslation = i18nHelper('en-GB', 'Manifest-title');

        // TODO: update to use be whatever the translation becomes
        expect(enGBTranslation).toBe('English GB Title');
    });
    it.skip('validates with es', () => {
        const esTranslation = i18nHelper('es', 'Manifest-title');

        // TODO: update to use be whatever the translation becomes
        expect(esTranslation).toBe('Spanish Title');
    });
    it.skip('validates with fr-CA', () => {
        const frCATranslation = i18nHelper('fr-CA', 'Manifest-title');

        // TODO: update to use be whatever the translation becomes
        expect(frCATranslation).toBe('French Canadian Title');
    });
    it.skip('validates with ar', () => {
        const arTranslation = i18nHelper('ar', 'Manifest-title');

        // TODO: update to use be whatever the translation becomes
        expect(arTranslation).toBe('Arabic Title');
    });
})