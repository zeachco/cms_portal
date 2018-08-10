import store from 'src/store';
import {SESSION} from 'src/store/actionTypes';
import db from 'src/core/firebase';
import {updateTimes} from './services';
import state from 'src/store/state';

const auth = db.auth();

export const badLogin = () => store.dispatch({type: SESSION.DISCONNECT, payload: 'bad login'});

export const disconnect = (reason = '') => {
    state.session.info = null;
    state.session.isAuth = false;
    state.session.retreivingSession = false;
    state.session.sessionMessage = reason;
};

export const receiveSession = session => {
    if (session) {
        state.session.isAuth = !!session;
        state.session.info = session;
        state.session.retreivingSession = false;
        state.session.sessionMessage = '';
    } else {
        disconnect();
    }
};

export const login = (username, password) => {
    disconnect('reconnecting');
    state.session.retreivingSession = true;
    auth.signInWithEmailAndPassword(username, password);
    // backend('login', METHODS.POST, {username, password}).then(receiveSession).catch(badLogin);
};

export const signIn = (username, password) => {
    state.session.retreivingSession = true;
    auth.createUserWithEmailAndPassword(username, password);
};

export const logout = () => {
    state.session.retreivingSession = true;
    auth.signOut();
};

export const initialize = () => {
    state.session.retreivingSession = true;

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
}
;
