import axios from 'axios';

const PROXY_URL = "http://www.kensplanet.com/proxy?url=";

const TECHNOLOGY_URL = 'http://stackoverflow.com/tags/';

export const FETCH_TECHNOLOGY_DETAILS = 'FETCH_TECHNOLOGY_DETAILS';

export function fetchTechnologyDetails(technology) {
    const technologyDetails = axios.get(PROXY_URL + encodeURI(TECHNOLOGY_URL + technology + '/info'));

    return {
        type: FETCH_TECHNOLOGY_DETAILS,
        payload: technologyDetails
    };
}