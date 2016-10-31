import { combineReducers } from 'redux';
import DictionaryReducer from './reducer_dictionary';


const rootReducer = combineReducers({
    dictionary: DictionaryReducer
});

export default rootReducer;