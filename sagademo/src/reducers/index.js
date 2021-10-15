import {petCounter} from "./petCounter"
import {combineReducers} from "redux"
import {users} from './users'
import {petFavourite} from './petFavourite'

const reducers = combineReducers({
    petCounter,
    petFavourite,
    users
})

export default reducers