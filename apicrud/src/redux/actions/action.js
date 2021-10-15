import {GET_DETAILS} from '../type'
import {POST_DETAILS} from '../type'
import {GetApiDetails} from '../../api/axiosRequest'
import { PostApiDetails } from '../../api/axiosRequest'


const GetApiAction = () => {
    return function(dispatch){
        return GetApiDetails().then((res) =>{
            console.log("Response Data is ____________________________" , res);
            dispatch({
                type : GET_DETAILS,
                payload : res.data,
            })
        })
    }


    // return{
    //     type : GET_DETAILS,
    //     payload : ''
    // }
}

const PostApiAction = (request) => {
    return function(dispatch){
        dispatch({
            type : POST_DETAILS,
            payload : false,
        })
        return PostApiDetails(request).then((res) =>{
            console.log("Response Data is ____________________________" , res);
            dispatch({
                type : POST_DETAILS,
                payload : true,
            })
        })
    }


    // return{
    //     type : GET_DETAILS,
    //     payload : ''
    // }
}


export  {GetApiAction,PostApiAction}