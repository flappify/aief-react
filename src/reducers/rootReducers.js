import authReducers from './authReducers';
import formReducers from './formReducers';
import helpReducers from './helpReducers';
import donateReducers from './donateReducers';
import {combineReducers} from 'redux';

const rootReducers=combineReducers({
    auth:authReducers,
    form:formReducers,
    help:helpReducers,
    donate:donateReducers,
})

export default rootReducers;