import store from '../';
import {SESSION} from '../actionTypes';
import db from '../../core/firebase';

const auth = db.auth();

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
    auth.signInWithEmailAndPassword(username, password);
    // backend('login', METHODS.POST, {username, password}).then(receiveSession).catch(badLogin);
};

export const signIn = (username, password) => {
    store.dispatch({type: SESSION.CHECK_SESSION});
    auth.createUserWithEmailAndPassword(username, password);
};

export const logout = () => {
    store.dispatch({type: SESSION.CHECK_SESSION});
    auth.signOut();
};

setTimeout(() => {
    store.dispatch({type: SESSION.CHECK_SESSION});

    auth.onAuthStateChanged(firebaseUser => {
        console.log('onAuthStateChanged', firebaseUser);
        if (firebaseUser){
            receiveSession({
                email: firebaseUser.email,
            });
        } else {
            disconnect();
        }
    });

}, 10000);
