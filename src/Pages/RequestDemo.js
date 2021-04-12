import React, {useState} from 'react'
import RequestDemo1 from '../SignupForms/RequestDemo1';
import RequestDemo2 from '../SignupForms/RequestDemo2';
import NavbarLogo from '../components/NavbarLogo';
import '../SignupForms/RequestDemo.css'


const RequestDemo = () => {

   const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(true);

  const nextStep = () => {
    setStep(step + 1);
  };
  const previousStep = () => {
    setStep(step - 1);
  };

  const renderSwitch = (step) => {
    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return (
          <RequestDemo1
            nextStep={nextStep}
            previousStep={previousStep}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        );
      case 2:
        return (
          <RequestDemo2
            nextStep={nextStep}
            previousStep={previousStep}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            phone={phone}
            setPhone={setPhone}
          />
        );
    }
  };



   return (
      <div>
         <NavbarLogo/>
         <div class="row mainContent-Request container-fluid">
            <div class="mainLeft-Request col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-md-none d-lg-block">
            <ul class="choose">
              <li class="choose_li">
                <div class="row align-items-center justify-content-center">
                  <div class="col-md-1">
                    <h3 class="choose_li_no">1</h3>
                  </div>
                  <div class="col-md-3 fill_in_details">
                    <div class="why-li">
                      <img src="Images/Request Demo SVG/Group 10620.svg"alt="illustration" class="why-li" />
                    </div>
                  </div>
                  <div class="col-md-8 li-text">
                    <h3 class="why-li-heading">Fill in your details</h3>
                    <span class="why-li-text">To help us know you</span>
                  </div>
                </div>
              </li>
              <li class="choose_li">
                <div class="row align-items-center justify-content-center">
                  <div class="col-md-1">
                    <h3 class="choose_li_no">2</h3>
                  </div>
                  <div class="col-md-3 call_back">
                    <div class="why-li">
                      <img src="Images/Request Demo SVG/Group 11759.svg"alt="illustration" class="why-li" />
                    </div>
                  </div>
                  <div class="col-md-8 li-text">
                    <h3 class="why-li-heading">We call you back</h3>
                    <span class="why-li-text">To analyze your needs</span>
                  </div>
                </div>
              </li>
              <li class="choose_li">
                <div class="row align-items-center justify-content-center">
                  <div class="col-md-1">
                    <h3 class="choose_li_no">3</h3>
                  </div>
                  <div class="col-md-3 evaluate_needs">
                    <div class="why-li">
                      <img src="Images/Request Demo SVG/behavior.svg"alt="illustration" class="why-li" />
                    </div>
                  </div>
                  <div class="col-md-8 li-text">
                    <h3 class="why-li-heading">We evaluate your needs</h3>
                    <span class="why-li-text">To provide you with most suitable solution</span>
                  </div>
                </div>
              </li>
              <li class="choose_li">
                <div class="row align-items-center justify-content-center">
                  <div class="col-md-1">
                    <h3 class="choose_li_no">4</h3>
                  </div>
                  <div class="col-md-3 deliver_demo">
                    <div class="why-li">
                      <img src="Images/Request Demo SVG/online.svg"alt="illustration" class="why-li" />
                    </div>
                  </div>
                  <div class="col-md-8 li-text">
                    <h3 class="why-li-heading">And deliver a demo</h3>
                    <span class="why-li-text">To provide you with our unique e-learning experience</span>
                  </div>
                </div>
              </li>
            </ul>
            </div>
            <div class="middleLine-Request d-md-none d-lg-block"></div>

{/* Right content */}

            <div class="mainRight-Request col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            {renderSwitch(step)}
            </div>
      </div>
      </div>
   )
}

export default RequestDemo