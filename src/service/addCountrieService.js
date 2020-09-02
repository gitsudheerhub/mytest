import { api } from '../api';

  export const addCountryService = (value) => {
      return fetch(api.ADD_COUNTRY+ value)
          .then(response => {
            return response.json();
          })  
          .then(json => {
            return json;
          })
    };
