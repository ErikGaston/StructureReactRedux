import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../consts/actionTypes";
import * as API from "../api";

function* asynPostEjemplo({ payload }) {
    try {
        var response = yield call(API.getEjemplo, payload);
        if (response)
            yield put({
                type: actionTypes.SUCCESS_GET_EJEMPLO,
                response,
            });
    } catch (error) {
        yield put({
            type: actionTypes.SEND_REQUEST_FAILURE,
            message: error.message,
        });
    }
}

export default function* ejemploSaga() {
    yield takeLatest(actionTypes.GET_EJEMPLO, asynPostEjemplo);
}