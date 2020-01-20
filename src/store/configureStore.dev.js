import {createStore, applyMiddleware, compose} from 'redux';
import saga from 'redux-saga';
import {persistState} from 'redux-devtools';

import reducers from '../reducers';
import sagas from '../sagas';
import DevTools from '../containers/DevTools';
import loadAsyncState from './loadAsyncState';

import {sagaMonitor, reactotronEnhancer} from '../containers/reactotron';
const sagaMiddleware = saga({sagaMonitor});

const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    reactotronEnhancer,
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
        )
    )
);

export default function configureStore(initialState) {
    const store = createStore(reducers, initialState, enhancer);
    let sagaTask = sagaMiddleware.run(sagas);

    if (module.hot) {
        module.hot.accept('../reducers', () => store.replaceReducer(reducers));
        module.hot.accept('../sagas', () => {
            sagaTask.cancel();
            sagaTask.done.then(() => {
                sagaTask = sagaMiddleware.run(sagas);
            });
        });
    }

    return loadAsyncState(store);
}
