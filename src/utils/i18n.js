import state from 'src/store/state';

export const i18n = key => state.i18n.strings[key] || `[${key}]`;
export const l = i18n;
