import {requestStaticData} from '../actions/staticData';

export default function loadAsyncState(store) {
    store.dispatch(requestStaticData());
    return store;
}
