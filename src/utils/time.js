import moment from 'moment';

window.moment = moment;
moment.locale('fr');

export const DAYS_IN_MS = 1000 * 60 * 60 * 24;
export const HOURS_IN_MS = 1000 * 60 * 60;
export const MINS_IN_MS = 1000 * 60;
export const SECS_IN_MS = 1000;
