import { all, call, put, takeEvery, } from 'redux-saga/effects';

import { sampleAction, sampleTypes } from '../ducks/sample';

import { getUsers } from '../apis/sample';

function* loadDataSaga() {
    try {
        const res = yield call(getUsers);
        yield put(sampleAction.loadDataSuccess(res))
    } catch ( err ) {
        yield put(sampleAction.failure(err))
    }
}

export function* watchSampleActions() {
    yield all([
        takeEvery(sampleTypes.LOAD_DATA, loadDataSaga)
    ])
}