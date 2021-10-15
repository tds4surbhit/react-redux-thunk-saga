import './App.css'
import {petDecrement , petIncrement ,getUsers} from "./actions"
import {useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'

function App() {

  // const petCounter = useSelector((state) => {
  //   return(
  //     state.petCounter
  //   )
  // })

  // const petFavourite = useSelector((state) =>{
  //   return(
  //     state.setFavourite
  //   )
  // })

  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users)
  const loading = useSelector((state) => state.users.loading)
  const error = useSelector((state) => state.users.error)

  useEffect(() =>{
    dispatch(getUsers())
  },[])




  return (
    <div className="App">
        <h1>React Redux Saga Crash</h1>
        {/* <button onClick= {() => dispatch(petIncrement(2))}>Add pet</button>
        <button onClick= {() => dispatch(petDecrement())}>Delete Pet</button>
        <h1>Pet Counter {petCounter}</h1>
        <h2>Number of favourite pets so far {petFavourite}</h2> */}
        {loading && !loading && <h2>Loading....</h2>}
        {error && !loading && <h2>error</h2>}
        {users && users.map((users , i) =>(
          <h1 key = {i}>{users.name}</h1>
        ))}

    </div>
  );
}

export default App;
