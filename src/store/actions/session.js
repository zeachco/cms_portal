import store from '../';
import {SESSION} from '../actionTypes';
import {backend, METHODS} from '../../services/api';

export const badLogin = () => store.dispatch({type: SESSION.DISCONNECT, payload: 'bad login'});


export const disconnect = reason => {
    store.dispatch({type: SESSION.DISCONNECT, payload: reason});
};

export const receiveSession = session => {
    if (session) {
        store.dispatch({type: SESSION.RECEIVE_SESSION, payload: session});
    } else {
        disconnect();
    }
    store.dispatch({type: SESSION.RECEIVE_SESSION, payload: session});
};
export const login = (username, password) => {
    store.dispatch({type: SESSION.DISCONNECT, payload: 'reconnecting'});
    store.dispatch({type: SESSION.CHECK_SESSION});
    backend('login', METHODS.POST, {username, password}).then(receiveSession).catch(badLogin);
};

export const checkSession = () => {
    store.dispatch({type: SESSION.CHECK_SESSION});
    backend('profile/me').then(receiveSession).catch(disconnect);
};
