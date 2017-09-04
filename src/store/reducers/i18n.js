import {fromJS} from 'immutable-short-string-notation';

export const defaultState = fromJS({
    home: 'Acceuil',
    users: 'Utilisateur',
    items: 'Articles',
});

export default (state = defaultState, {type, payload}) => {

    switch (type) {
        default: return state;
    }
};
