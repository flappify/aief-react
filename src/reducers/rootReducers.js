import authReducers from './authReducers';
import formReducers from './formReducers';
import helpReducers from './helpReducers';
import donateReducers from './donateReducers';
import {combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer} from 'react-redux-firebase'

const rootReducers=combineReducers({
    auth:authReducers,
    form:formReducers,
    help:helpReducers,
    donate:donateReducers,
    firestore:firestoreReducer,
    firebase:firebaseReducer
})

export default rootReducers;