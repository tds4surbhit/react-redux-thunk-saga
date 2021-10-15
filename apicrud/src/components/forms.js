import React , {useState} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import {PostApiAction} from '../redux/actions/action'



const Forms = () => {

    const handleResponse = useSelector((state) => state.reducer.isResponse)


    const[name , setName ] = useState('')
    const[username , setUsername ] = useState('')
    const[email , setEmail] = useState('')
    const[phoneNo , setPhoneNo] = useState('')

    const dispatch = useDispatch()

    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const userNameHandler = (e) => {
        setUsername(e.target.value)
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    const phoneNoHandler = (e) => {
        setPhoneNo(e.target.value)
    }

    const clickHandler = (e) => {
        e.preventDefault();
        const finalData = {
            name : name ,
            username : username ,
            email : email,
            phone : phoneNo
        }
        dispatch(PostApiAction(finalData))
    }
     


    if(handleResponse === true){
        alert("Your response have been submitted")
    }

    return(
        <div>
           <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputName">Name</label>
      <input type="text" className="form-control" id="inputName" placeholder="Enter Name" onChange={(e) => nameHandler(e)} />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="username">UserName</label>
      <input type="text" className="form-control" id="username" placeholder="Enter User-Name" onChange={(e) => userNameHandler(e)} />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="Email">Email</label>
      <input type="email" className="form-control" id="Email" placeholder="Enter Email" onChange={(e) => emailHandler(e)} />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="phoneno">Phone No</label>
      <input type="text" className="form-control" id="phoneno" placeholder="Enter Phone no" onChange={(e) => phoneNoHandler(e)} />
    </div>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={(e) =>clickHandler(e)}>Sign in</button>
</form>

        </div>
    )
}

export default Forms