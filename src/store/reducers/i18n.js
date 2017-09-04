import {fromJS} from 'immutable-short-string-notation';

export const defaultState = fromJS({
    home: 'Acceuil',
    users: 'Utilisateur',
    items: 'Articles',
    login: 'Connexion',
    logout: 'Deconnexion',
    profile: 'Profile',
});

export default (state = defaultState, {type, payload}) => {

    switch (type) {
        default: return state;
    }
};
