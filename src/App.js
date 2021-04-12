import React  from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./Pages/LandingPage";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import PersonalDetails from './SignupForms/PersonalDetails'
import EducationalDetails from './SignupForms/EducationalDetails'
import RequestDemo from "./Pages/RequestDemo";
import './App.css'

function App() {
  return (
    <Router>
    <div>
    <Header/>
    
    <Switch>
    <Route path='/' exact component={LandingPage}/>
    <Route path='/login' component={Login}/>
    <Route path='/signup' component={Signup}/>
    <Route path='/personaldetails' component={PersonalDetails}/>
    <Route path='/educationaldetails' component={EducationalDetails}/>
    <Route path='/requestdemo' component={RequestDemo}/>
    </Switch>
    <Footer/>
    </div>
  </Router>
   
    
  );
}

export default App;
