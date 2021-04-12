import React, { useState } from "react";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CreateAccount from "../SignupForms/CreateAccount";
import PersonalDetails from "../SignupForms/PersonalDetails";
import EducationalDetails from "../SignupForms/EducationalDetails";

const Signup = () => {
  const [step, setStep] = useState(1)
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    password: "",
    educationalBoard: "",
    classdetail: "",
    state: "",
    isCbse:false,
    isIcse:false,
    isState:false,
    checkB:false,
    isAgree:false
    

  })
  function editDetails(det) {
    setDetails(det)
  }
  const renderSwitch = (step) => {
    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return (<CreateAccount nextStep={nextStep} details={details} editDetails={editDetails} />);
      case 2:
        return (<PersonalDetails nextStep={nextStep} previousStep={previousStep} details={details} editDetails={editDetails} />);
      case 3:
        return (<EducationalDetails previousStep={previousStep} details={details} editDetails={editDetails} />);
    }
  };
  const nextStep = () => {
    setStep(step + 1);
  };
  const previousStep = () => {
    setStep(step - 1);
  };

 
  return (

    <div>
    <div className="green-bg"></div>                                            
    <div className="white-bg"></div>

    <div className="container-fluid">
          <div className="row nav-bar">
              <div className="col-3 nav-left">
              <Link to="/">
                <img src="Images/navbar logo.svg" alt="kg-logo" class="nav-logo" />
            </Link>
              </div>
          </div>
      </div>

       <div className="row container-fluid mainContent">
      <div className= "mainLeft col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="mainLeftContent d-md-none d-lg-block">
              <img src="Images/Sign Up Illustration.svg" alt="" />
              <p>
                  If you already have an account
                  <a href="/login"  className="login-underline">
                    <span className="blue"> Log in here</span>
                </a>
              </p>
        </div>
      </div>
      <div className="middleLine d-md-none d-lg-block"></div>
      <div className= "mainRight col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
      {renderSwitch(step)}
      </div>
    </div>
    </div>  

  );
};

export default Signup;
