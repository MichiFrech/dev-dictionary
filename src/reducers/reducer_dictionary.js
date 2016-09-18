import { FETCH_DICTIONARY } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_DICTIONARY:
            return action.payload;
    }
    return state;
}