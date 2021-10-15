import axios from 'axios'

export async function AxiosRequest(url , method , header , params){
    return params?axios({
        url : url ,
        method : method ,
        headers : header ,
        data : params ,
        timeout : 1000 
    }):axios({
        url : url ,
        method : method ,
        headers : header ,
        data : {} ,
        timeout : 1000 
    })
}

const GetApiDetails= () =>{
    const headers = {
        "Content-type" : 'application/json',
    }
    return AxiosRequest("https://jsonplaceholder.typicode.com/users" , 'GET' , headers , {})
}

const PostApiDetails= (data) =>{
    const headers = {
        "Content-type" : 'application/json',
    }
    return AxiosRequest("https://jsonplaceholder.typicode.com/users" , 'POST' , headers , data)
}

const GetDetaislbyID = (id) =>{
    const headers = {
        "Content-type" : 'application/json',
    }
    return AxiosRequest("https://jsonplaceholder.typicode.com/users" +id, 'GET' , headers , {})
}


export {GetApiDetails , PostApiDetails , GetDetaislbyID}