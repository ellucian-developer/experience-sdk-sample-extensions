import i18nHelper from "../../i18n/manifest.helper";

describe('validates i18nHelper', () => {
    it('validates with en-US', () => {
        const enUSTranslation = i18nHelper('en-US', 'Manifest-title');

        expect(enUSTranslation).toBe('Props Title');
    });
})