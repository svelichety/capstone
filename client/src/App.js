import React from 'react';
import 'tachyons';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
//import User from './Server/user';

import {Route} from 'react-router-dom';
import Particles from 'react-particles-js';
import MyTrips from './components/MyTrips/MyTrips';
import AddTrip from './components/AddTrip/AddTrip';
import Navigation from './components/Navigation/Navigation';
import TripPlanning from './components/TripPlanning/TripPlanning';
import Home from './components/Home/Home'

import App1 from './components/Login';
// import Register from './components/Login/Register'
// import Profile from './components/Login/profile'
// import Landing from './components/Login/Landing'

import SignInForm from './components/Login/SignIn';


const particlesOption = {
  particles:{
    number: {
      value: 100,
      density: {
        enabled: true,
        value_area: 800
      }
    }
  }
}
function App() {
  return (
    <Router>
      <div className="App">
        <Particles className='particles' params={particlesOption} />
       
        <Navigation />
        
        
          
               

              <Route exact path="/" component={App1} />
              
              <Route path ="/login" exact strict component = {SignInForm} />

        

        
    
        <Route path="/home" exact strict component={Home} />
        <Route path="/myTrips" exact strict component={MyTrips}/>
        <Route path="/addTrip" exact strict component={AddTrip}/>
        <Route path="/planTrip" exact strict component={TripPlanning}/>
               
         
      </div>
    </Router>
  );
}

export default App;
