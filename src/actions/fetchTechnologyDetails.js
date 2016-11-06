import axios from 'axios';

const TECHNOLOGY_URL = 'http://stackoverflow.com/tags/';

export const FETCH_TECHNOLOGY_DETAILS = 'FETCH_TECHNOLOGY_DETAILS';

export function fetchTechnologyDetails(technology) {
    const technologyDetails = axios.get(TECHNOLOGY_URL + technology + '/info');

    return {
        type: FETCH_TECHNOLOGY_DETAILS,
        payload: technologyDetails
    };
}

