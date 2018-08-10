import state from 'src/store/state';

const SAVED_LANG = localStorage.getItem('i18n');
const DETECTED_LANG = SAVED_LANG || 'fr';

export const setLanguageKeys = data => {
    state.i18n.strings = data;
};

export const loadLanguage = async(lang = DETECTED_LANG) => {
    try {
        const res = await fetch(`./i18n/${lang}.json`);
        const data = await res.json();
        setLanguageKeys(data);
        state.i18n.requested = lang;
        localStorage.setItem('i18n', lang);
    } catch (e) {
        console.warn('could not load language', lang, e); // eslint-disable-line no-console
    }
};

if (!SAVED_LANG && navigator && navigator.languages) {
    const lang = navigator.languages[0].split('-')[0];
    loadLanguage(lang);
}
