import React from 'react'
// import { useState } from 'react';
import { useEffect } from 'react';
import {GetApiAction} from '../redux/actions/action'
import {useSelector , useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
// import Reducer from '../redux/reducers/reducer'


const Home = () => {

  const dispatch = useDispatch();

  const responseData = useSelector((state) => state.reducer.details) //state.reducer ( a variable created for this reducer has to be given) and details is for Initial State .

  // console.log("responseData is _____________________________" , responseData);

  useEffect(() => {
    dispatch(GetApiAction());
  },[dispatch]);

  const result = responseData.map((data,index) => {
    return(
    <tr key={index}>
    <th scope="row">{data.id}</th>
    <td>{data.name}</td>
    <td>{data.email}</td>
    <td>{data.username}</td>
    {/* <td>{data.address}</td> */}
    <td>{data.website}</td>
    <td>{data.phone}</td>
    <td><Link to = {`/edit/${data.id}`}><span class="material-icons">edit</span></Link></td> 
      {/* THis is basically to pass dynamic values */}
    {/* <td>{data.company}</td> */}
  </tr>
    )
    })


    return (
        <div>
            <h1>Redux and Api</h1>
            <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">UserName</th>
      {/* <th scope="col">ADDRESS</th> */}
      <th scope="col">Website</th>
      <th scope="col">Phone</th>
      <th scope="col">Edit</th>
      {/* <th scope="col">Company</th> */}
      </tr>
  </thead>
  <tbody>{result}</tbody>
</table>
        </div>
            
    )
}
export default Home 