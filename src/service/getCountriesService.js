import { api } from '../api';

  export const getCountriesService = () => {
      return fetch(api.GET_COUNTRIES)
          .then(response => {
            return response.json();
          })  
          .then(json => {
            return json;
          })
    };

  