import { call, put } from 'redux-saga/effects';
import { types } from 'actions';
import { getCountriesService } from 'services/getCountriesService';

export default function* getCountriesSaga() {
    const response = yield call(getCountriesService)
    console.log("json", response );
    if(response){
        yield put({ type: types.GET_COUNTRIES_SUCCESS, countries:response.countries });
    }
    else
        yield put({type: types.GET_COUNTRIES_ERROR, error: 'error'});
    
}