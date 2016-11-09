import { FETCH_TECHNOLOGY_DETAILS } from '../actions/fetchTechnologyDetails';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_TECHNOLOGY_DETAILS:
            return action.payload.data;
    }
    return state;
}