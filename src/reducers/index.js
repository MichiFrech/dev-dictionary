import { combineReducers } from 'redux';
import DictionaryReducer from './reducer_dictionary';
import TechnologyReducer from './reducer_technology';

const rootReducer = combineReducers({
    dictionary: DictionaryReducer,
    technologyDetails: TechnologyReducer
});

export default rootReducer;