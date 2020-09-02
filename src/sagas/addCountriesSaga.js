import { call, put } from 'redux-saga/effects';
import { types } from 'actions';
import { addCountryService } from 'services/addCountryService';

export default function* addCountrySaga(action) {
    const {value, resolve, reject} = action;
    const response = yield call(addCountryService, value)
    console.log("json", response );
    if(response){
        resolve(response);
        yield put({ type: types.ADD_COUNTRY_SUCCESS, response:{status: response.status, value: value} });
    }
    else{
        reject(response);
        yield put({type: types.ADD_COUNTRY_ERROR, error: response.status});
    }
        
    
}