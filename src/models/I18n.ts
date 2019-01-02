import { observable } from 'mobx';

const names = {
    en: 'English',
    fr: 'Francais',
    es: 'Espagnol',
};

const shortNames = {
    en_short: 'En',
    fr_short: 'Fr',
    es_short: 'Es',
}

export type ILanguage = keyof names;

export class I18n {
    @observable private strings: { [key: string]: string } = {};
    @observable public current: ILanguage = 'en';

    public async changeLang(lang: ILanguage) {
        const file = await fetch(`/lang/${lang}.json`);
        const json = await file.json();
        this.strings = {
            ...json,
            ...names,
            ...shortNames,
        };
    }

    public translate() {

    }
}
