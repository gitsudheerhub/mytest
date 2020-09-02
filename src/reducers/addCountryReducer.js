import { types } from 'actions';

export default function(state = '', action) {
  const { response, error } = action;
  switch(action.type) {
    case types.ADD_COUNTRY_SUCCESS:
      return response;
    case types.ADD_COUNTRY_ERROR:
      return error;
    default:
      return state;
  }
};
