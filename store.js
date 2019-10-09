import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './ducks'
import rootSaga from './sagas'
import { composeWithDevTools } from "redux-devtools-extension";

const bindMiddleware = middleware => {
    if ( process.env.NODE_ENV !== 'production' ) {
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
};

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        bindMiddleware([sagaMiddleware])
    );

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store
};

export default configureStore
