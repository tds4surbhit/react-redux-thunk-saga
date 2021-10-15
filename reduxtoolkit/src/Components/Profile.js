import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import {changeStatus} from '../actions'

function Profile() {

    const {name , age , status} = useSelector((state)=>{
    return state;
  })

  const dispatch = useDispatch()

  const updateAge = (age) => {
    dispatch({type :'UPDATE_AGE' , payload : age})
  }

  const updateName = (name) => {
    dispatch({type :'UPDATE_NAME' , payload : name})
  }

  const updateStatus = (status) => {
    dispatch(changeStatus(status))
  }

    return (
        <div>
            <h1>I am the profile component</h1>
            <h1>My name is {name}</h1>
            <h2>My name is {age}</h2>
            <h2>My name is {status}</h2>
            <button onClick={()=>updateAge(40)}>Update Age</button>
            <button onClick={()=>updateName("Surbhit")}>Update Name</button>
            <button onClick={()=>updateStatus("Single")}>Update Status </button>
        </div>
    )
}

export default Profile


