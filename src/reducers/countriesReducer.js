import { types } from 'actions';

export default function(state = [], action) {
  const { countries, error } = action;
  switch(action.type) {
    case types.GET_COUNTRIES_SUCCESS:
      return [...state, ...countries];
    case types.ADD_COUNTRY_SUCCESS:
      const {response: {value}}= action;
      return [...state, value]; 
    case types.GET_COUNTRIES_ERROR:
      return { error };
    default:
      return state;
  }
};