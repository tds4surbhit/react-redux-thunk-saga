import {GetDetaislbyID} from '../api/axiosRequest'
import { useState , useEffect } from 'react';   

export default (props) =>{

    const [detailsById , setDetailsbyID] = useState({})
    // jab hum kabhi Id ke basis pe data lete hain to vo retuyrn karte hai object 
    const GetDetailsbyHooks = (requestID) => {
        
            return GetDetaislbyID(requestID).then((res) =>{
                console.log('Response Data is _______________' , res);
                setDetailsbyID(res)
            });
   
    };


    useEffect(()=>{
        GetDetailsbyHooks(props)
    },[])

    return[detailsById]
}

