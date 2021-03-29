import { SET_DATA, CLEAR_DATA } from '../actionTypes';
import { DataActionsTypes } from '../types';

const initialState = {
    test: '0',
};

export default (state = initialState, action: DataActionsTypes) => {
    switch (action.type) {
        case SET_DATA:
            return { ...state, test: 'state' };
        case CLEAR_DATA:
            return { ...state, test: 'test' };
        default:
            return state;
    }
};
