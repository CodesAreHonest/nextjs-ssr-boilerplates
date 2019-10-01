import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import * as reducers from "./ducks";
import thunk from "redux-thunk";

const rootReducer = (state, action) => {
    return combineReducers(reducers)(state, action);
}

export function initializeStore() {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    )
}
