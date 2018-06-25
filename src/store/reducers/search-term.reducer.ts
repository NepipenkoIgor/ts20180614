import {AnyAction} from 'redux';
import {SEARCH_BY_TERM} from '../actions/search-term.action';


const initialState = '';

export const searchTermReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SEARCH_BY_TERM:
            return action.payload;
        default:
            return state
    }

};