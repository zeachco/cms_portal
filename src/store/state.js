import {observable} from 'mobx';
import langs from 'src/utils/languages';

const defaultLang = 'fr';
const state = observable({
    session: {
        info: {},
        isAuth: false,
        retreivingSession: true,
        sessionMessage: '',
        enabledModules: [
            'profile',
            'tracker',
            'users',
            'items',
        ],
    },
    forms: {
        login: {
            user: '',
            pass: '',
        },
    },
    i18n: {
        requested: defaultLang,
        selectables: [],
        languages: {
            fr: 'Francais',
            en: 'English',
        },
        strings: {...langs[defaultLang]},
    },
});

window.state = state;

export default state;
