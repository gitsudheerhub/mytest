import { types } from './index';

export const addCountryAction = (value, resolve, reject) => {
    return {
        type: types.ADD_COUNTRY,
        value,
        resolve,
        reject
    }
};
