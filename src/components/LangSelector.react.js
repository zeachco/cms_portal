import React from 'react';
import {observer} from 'mobx-react';
import cx from 'classnames';

import './LangSelector.css';
import state from 'src/store/state';
import {loadLanguage} from 'src/store/actions/strings';

const switchLang = lang => e => {
    e.preventDefault();
    loadLanguage(lang);
};

const LangSelector = () => {
    return (
        <div className="languages">
            {Object.keys(state.i18n.languages).map(lang => (
                <li className={cx('pull-right', {current: lang === state.i18n.requested})} key={'switch_to_' + lang} onClick={switchLang(lang)}>
                    <a className="no-desktop" href={lang} title={state.i18n.languages[lang]}>{lang}</a>
                    <a className="no-mobile" href={lang} >{state.i18n.languages[lang]}</a>
                </li>
            ))}
        </div>
    );
};

export default observer(LangSelector);

