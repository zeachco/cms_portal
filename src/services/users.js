import {backend} from './api';


// TOO use redux
const usersCache = {
    lastTime: Date.now(),
};

export const getUsers = (force) => {
    return backend('admin/users').then(items => this.setState({items}));
};
