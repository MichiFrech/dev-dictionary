import { FETCH_DICTIONARY } from '../actions/fetchDictionary';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_DICTIONARY:
            return action.payload.data;
    }
    return state;
}