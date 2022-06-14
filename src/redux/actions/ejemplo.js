import * as actionTypes from '../consts/actionTypes';

export function getEjemplo(param = '') {
    return {
        type: actionTypes.GET_EJEMPLO,
        payload: param
    };
}