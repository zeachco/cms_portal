import store from '..';
import {CORE} from '../actionTypes';

export const setCurrentRoute = routeProps => store.dispatch({type: CORE.ROUTE_CHANGE, payload: routeProps});

// TODO make the history follow the state of redux
// const oldParams = null;
// store.subscribe(() => {
//     const newPrams = store.getState().getIn('router.params');
//     if (!newPrams.equals(oldParams)) {
//         console.log('force ');
//     }
// });
