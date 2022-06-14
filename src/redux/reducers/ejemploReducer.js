import * as actionTypes from '../consts/actionTypes';

const initialState = {
    ejemplos: []
};

export default function ejemploReducer(state = initialState, action) {
    const DEFAULT = { ...state };
    const ACTIONS = {
        [actionTypes.SUCCESS_GET_EJEMPLO]: responseToReturn()
    };
    function responseToReturn() {
        let res = { ...state };
        if (action.response) {
            res = { ...state, ejemplos: action.response.data };
        }
        return res;
    }

    let receiveAction = DEFAULT;

    if (ACTIONS[action.type] !== undefined) {
        receiveAction = ACTIONS[action.type];
    }

    return receiveAction;
}