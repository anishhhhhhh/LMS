import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import "./Signup.css";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
const PersonalDetails = ({ nextStep, previousStep, details, editDetails }) => {
  
  const [firstName, setFirstName] = useState(details.firstname)
  const [lastName, setLastName] = useState(details.lastname)
  const [mobileNumber, setMobileNumber] = useState(details.phoneNumber)
  const [isAgree,setAgree] = useState(details.isAgree)
  const [isChecked, setIsChecked] = useState(false)
  function handleNext(e) {
    e.preventDefault()
    if (validateFirstName(firstName) === null && validateLastName(lastName) === null && validatePhoneNumber(mobileNumber) === null && isAgree) {

      nextStep()
      const temp = { ...details, firstname: firstName, lastname: lastName, phoneNumber: mobileNumber, isAgree: isAgree }
      editDetails(temp)

    }
    else {
      if (validateFirstName(firstName) !== null) {
        setFirst(true)
      }
      if (validateLastName(lastName) !== null) {
        setSecond(true)
      }
      if (validatePhoneNumber(mobileNumber) !== null) {
        setThird(true)
      }
      if (!isAgree) {
        setIsChecked(true)
      }

    }
  }
  function handlePrev(e) {
    e.preventDefault()
    const temp = { ...details, firstname: firstName, lastname: lastName, phoneNumber: mobileNumber,isAgree:isAgree }
    editDetails(temp)
    previousStep()

  }
    function validateFirstName(firstName) {
      var pattern = new RegExp(/^[A-Za-z]{3,12}$/);
      if (!firstName) {

        return "First Name cannot be empty"
      }
      else if (!pattern.test(firstName)) {
        return "Please enter valid First Name";

      }
      else {
        return null
      }

    }
    function validateLastName(lastName) {
      var pattern = new RegExp(/^[A-Za-z]{3,12}$/);
      if (!lastName) {
        return "Last Name cannot be empty"
      }
      else if (!pattern.test(lastName)) {
        return "Please enter valid Last Name";

      }
      else {
        return null
      }
    }
    function validatePhoneNumber(mobileNumber) {
      var pattern = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
      if (!mobileNumber) {
        return "Phone Number cannot be empty"
      }
      else if (!pattern.test(mobileNumber)) {
        return "Please enter valid phone number";

      }
      else {
        return null
      }
    }
  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: ' #57bb71',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: ' #57bb71',
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: ' #57bb71',
      },
    },
  })(TextField);
    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
  return (
    <Card className="SignupCard">
      <CardContent>
        <div className="PersonalDetailsTitle">
          <h1>Personal Details</h1>
        </div>
        <hr class='top-hr'></hr>
        <form>

          <div className='form-inputs'>
            <TextField id="firstName" label="First Name" helperText={first && validateFirstName(firstName)}
              onBlur={() => setFirst(true)} onFocus={() => setFirst(false)} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>

          <div className='form-inputs'>
            <TextField id="lastName" label="Last Name" helperText={second && validateLastName(lastName)}
              onBlur={() => setSecond(true)} onFocus={() => setSecond(false)} value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>

          <div className='form-inputs'>
            <TextField id="mobile" label="Mobile Number" helperText={third && validatePhoneNumber(mobileNumber)}
              onBlur={() => setThird(true)} onFocus={() => setThird(false)} value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
          </div>

          <div className='CreateAccountCheckbox'>
            <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isAgree}
                    onChange={(e) => { setAgree(e.target.checked); setIsChecked(false) }}
                      name="checkedB"
                      color="primary"
                      type="checkbox"
                    />
                  }
                  label="I agree to the Terms & Conditions"
                />
            <FormHelperText>{isChecked && "*Please agree to the terms and conditions"}</FormHelperText>
            </FormControl>
              </div>

          <div className='doublebuttons'>
            <Link to=''>
              <Button variant="contained" color="secondary" onClick={handlePrev} className='back-button prev-button'>Back</Button>
            </Link>
            <Link to='/educationaldetails'>
              <Button variant="contained" color="secondary" className='back-button sub-button' onClick={handleNext}>Next</Button>
            </Link>
          </div>
        </form>

        <div className="orLogin">
          <div className="hero">
            <span className="hr"></span>
            <p>Or log in using</p>
            <span class="hr"></span>
          </div>
          <div className="faceG">
            <img src="Images/Facebook.svg" alt="" />
            <img src="Images/Gmail Icon.svg" alt="" />
            <p>
              Already a member?
                    
                <Link to='/login'>
                  <span className="blue"> Log In</span>
                </Link>
              
            </p>
          </div>
        </div>

      </CardContent>
    </Card>
  )
}









    



export default PersonalDetails;
