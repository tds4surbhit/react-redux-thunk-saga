import {call,put,takeEvery} from 'redux-saga/effects'

import fetchGetUsers from '../requests/fetchusers'

function* handleGetUser(){
    try{
        const user = yield call(fetchGetUsers)
        yield put({type: "GET_USERS_SUCCESS" , users : users})
    }
    catch{
        yield put({type : "GET_USERS_FAILED" , message : err.message})
    }
}

function* watcherUserSaga(){
    yield takeEvery("GET_USER_REQUESTED" , handleGetUsers)
}

export default watcherUserSaga