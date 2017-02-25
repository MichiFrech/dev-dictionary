import { combineReducers } from 'redux';
import DictionaryReducer from './reducer_dictionary';
import TechnologyReducer from './reducer_technology';
import UpdateReducer from './reducer_update';

const rootReducer = combineReducers({
    dictionary: DictionaryReducer,
    technologyDetails: TechnologyReducer,
    updatedDictionary: UpdateReducer
});

export default rootReducer;