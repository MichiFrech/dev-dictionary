import axios from 'axios';

const DICTIONARY_FILE = 'dictionary.json';

export const FETCH_DICTIONARY = 'FETCH_DICTIONARY';

export function fetchDictionary() {
    const dictionary = axios.get(DICTIONARY_FILE);

    return {
        type: FETCH_DICTIONARY,
        payload: dictionary
    };
}

