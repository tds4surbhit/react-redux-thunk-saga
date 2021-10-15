import {GET_DETAILS} from '../type'
import {POST_DETAILS} from '../type'


const initialState = {


        details : [],
        isResponse : false 
    // details : [
    //     {
    //         id : 1,
    //         name : "surbhit",
    //         email : "sanjeet@gmail.com",
    //         phone : "94533909997",
    //         country :"India"
    //     },
    //     {
    //         id : 2,
    //         name : "surbhit",
    //         email : "sanjeet@gmail.com",
    //         phone : "94533909997",
    //         country :"India"
    //     },
    //     {
    //         id : 3,
    //         name : "surbhit",
    //         email : "sanjeet@gmail.com",
    //         phone : "94533909997",
    //         country :"India"
    //     },
    //     {
    //         id : 4,
    //         name : "surbhit",
    //         email : "sanjeet@gmail.com",
    //         phone : "94533909997",
    //         country :"India"
    //     },
    //     {
    //         id : 5,
    //         name : "surbhit",
    //         email : "sanjeet@gmail.com",
    //         phone : "94533909997",
    //         country :"India"
    //     }
    // ]
}

const Reducer = (state = initialState , action) => {
    switch(action.type){
        case GET_DETAILS :
            return {
                // state
                details : action.payload
            }


        case POST_DETAILS :
            return {
                isResponse : action.payload
            }
             
        default :
            return state 
    }
}

export default Reducer  