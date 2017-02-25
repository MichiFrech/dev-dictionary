import { UPDATE_DICTIONARY } from '../actions/updateDictionary';

export default function(state = [], action) {
    switch (action.type) {
        case UPDATE_DICTIONARY:
            return action.payload.data;
    }
    return state;
}