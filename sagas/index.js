import { all } from 'redux-saga/effects'
import { watchSampleActions } from "./sample";

export default function* rootSaga() {
    yield all([
        watchSampleActions()
    ])
}