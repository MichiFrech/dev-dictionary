import axios from 'axios';

const DICTIONARY_URL = '/dictionary/dictionary.json';

export const FETCH_DICTIONARY = 'FETCH_DICTIONARY';

export function fetchDictionary() {
    const dictionary = axios.get(DICTIONARY_URL);

    return {
        type: FETCH_DICTIONARY,
        payload: dictionary
    };
}

