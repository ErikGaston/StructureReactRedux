import { all } from "redux-saga/effects";
import ejemploSaga from "./ejemploSaga";


export default function* rootSaga() {
    yield all([
        ejemploSaga(),
    ]);
}