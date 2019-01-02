import store from '../';
import {SESSION} from '../actionTypes';
import db from '../../core/firebase';
import {updateTimes} from './services';

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

export const initialize = () => {
    store.dispatch({type: SESSION.CHECK_SESSION});

    auth.onAuthStateChanged(firebaseUser => {
        if (firebaseUser){
            receiveSession({
                email: firebaseUser.email,
                uid: firebaseUser.uid,
            });
            const timesRef = db.database().ref().child('times').child(firebaseUser.uid);
            timesRef.on('value', snap => updateTimes(snap.val()));
        } else {
            disconnect();
        }
    });
};
