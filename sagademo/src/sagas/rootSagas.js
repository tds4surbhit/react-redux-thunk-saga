import {all} from 'redux-saga/effects'
import watcherUserSaga from './handler/fetchusers' 

export default function* rootSaga(){
    yield all([watcherUserSaga()]);
}