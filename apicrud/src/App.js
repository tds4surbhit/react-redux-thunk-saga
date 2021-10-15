import React from 'react'
import './App.css';
import Forms from './components/forms'
import Home from './components/home'
import {BrowserRouter as Router , Route } from 'react-router-dom'
import UpdateDetails from './components/updateDetails'
// import {Switch , Link} from 'react-router-dom'

function App() {

  return (
    <div className="App">
       <Router>
         <Route exact path="/" component={Home} />
         <Route exact path="/form" component={Forms} />
         <Route exact path="/edit/:id" component={UpdateDetails} />
       </Router>
    </div>
  );
}

export default App;
