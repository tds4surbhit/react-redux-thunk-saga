const url = "https://jsonplaceholder.typicode.com/users";

const  fetchGetUsers = () =>{
    return fetch(url,{
        method : "GET",

    })
    .then((Response) => Response.json())
    .catch((error) => {
        throw error;
    })
}

export default fetchGetUsers