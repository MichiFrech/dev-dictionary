import axios from 'axios';

const DICTIONARY_URL = 'http://www.kensplanet.com/dev-dictionary/dictionary.json';

export const UPDATE_DICTIONARY = 'UPDATE_DICTIONARY';

export function updateDictionary() {
    return {
        type: UPDATE_DICTIONARY,
        payload: axios.get(DICTIONARY_URL)
    };
}