import { combineReducers } from 'redux';
import countries from './countriesReducer';
import addCountry from './addCountryReducer';

const rootReducer = combineReducers({
    countries,
    addCountry,
});

export default rootReducer;