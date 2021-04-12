import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import axios from 'axios'

import './Signup.css'
import { FormatListBulleted } from '@material-ui/icons';
import FormHelperText from '@material-ui/core/FormHelperText';
const EducationalDetails = ({ previousStep, details, editDetails }) => {
  
  const [board, setBoard] = useState(details.educationalBoard)
  const [state, setState] = useState(details.state)
  const [standard, setStandard] = useState(details.classdetail)
  const [isCbse, setCbse] = useState(details.isCbse)
  const [isIcse, setIcse] = useState(details.isIcse)
  const [isState, setIsState] = useState(details.isState)
  const [checkB, setCheckB] = useState(details.checkB)
  const [isBoard, setIsBoard] = useState(false)
  const [isStandard, setIsStandard] = useState(false)
  const [isStateSelect, setIsStateSelect] = useState(false)
  function handleSubmit(e) {
    e.preventDefault()
    if ((isCbse || isIcse || (isState && state !== "")) && standard !== "") {
      const temp = { ...details, educationalBoard: board, classdetail: standard, state: state, isCbse: isCbse, isIcse: isIcse, isState: isState, checkB: checkB }
      editDetails(temp)
    
      const result = { firstname: temp.firstname, lastname: temp.lastname, email: temp.email, phoneNumber: temp.phoneNumber, password: temp.password, educationalBoard: temp.educationalBoard, classdetail: temp.classdetail, state:temp.state }
      console.log(result)
      axios.post("http://127.0.0.1:8000/create_account", result)




    }
    else {
      if (board === "") {
        setIsBoard(true)
      }
      if (standard === "") {
        setIsStandard(true)
      }
      if (isState && state === "") {
        setIsStateSelect(true)
      }

    }

  }
  function handlePrev(e) {
    e.preventDefault()
    const temp = { ...details, educationalBoard: board, classdetail: standard, state: state, isCbse: isCbse, isIcse: isIcse, isState: isState, checkB: checkB  }
    editDetails(temp)
    previousStep()

  }
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }))

  
  const classes = useStyles();

 

   return (


   
      <Card className="SignupCard">
          <CardContent>
            <div className="EducationalDetailsTitle">
              <h1>Educational Details</h1>
            </div>
            <hr class='top-hr'></hr>
            <form>
              <div>
              <div>
                <label htmlFor="board" class="text-small-uppercase edu_text">Select your Board</label>
              </div>
            </div>
              <div className="inputs edu_inputs">
              


              <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
               <Button className={`${isCbse && "current"}`} onClick={() => {
                 setBoard("CBSE"); setCbse(true); setIcse(false); setIsState(false);
               }}>CBSE</Button>
               <Button className={`${isIcse && "current"}`} onClick={() => { setBoard("ICSE"); setIcse(true); setIsState(false); setCbse(false) }}>ICSE</Button>
               <Button className={`${isState && "current"}`} onClick={() => {
                 setBoard("State");
                 setIsState(true);
                 setCbse(false);
                 setIcse(false)
               }}>State</Button>
              </ButtonGroup>
             {isBoard && <p style={{ color: "red", fontSize: "15px", marginBottom: "0px", marginTop: "5px" }}>*Please select the board</p>}
            </div> 

            <div>
            
            
            <div className='class-state'>
          
            <div className='input-field class-input'>
              <FormControl className={classes.formControl}>
                <InputLabel id="class-select-label">Select your Class</InputLabel>
                <Select
                  labelId="class-select-label"
                  id="class-select"
                  value={standard}
                       onChange={(e) => { setStandard(e.target.value); setIsStandard(false) }}
                >
                       <MenuItem value={1}>1st</MenuItem>
                       <MenuItem value={2}>2nd</MenuItem>
                       <MenuItem value={3}>3rd</MenuItem>
                       <MenuItem value={4}>4rth</MenuItem>
                       <MenuItem value={5}>5th</MenuItem>
                       <MenuItem value={6}>6th</MenuItem>
                       <MenuItem value={7}>7th</MenuItem>
                       <MenuItem value={8}>8th</MenuItem>
                       <MenuItem value={9}>9th</MenuItem>
                       <MenuItem value={10}>10th</MenuItem>
                       <MenuItem value={11}>11th</MenuItem>
                       <MenuItem value={12}>12th</MenuItem>
                </Select>
                     <FormHelperText>{isStandard && <p style={{ color: "red", fontSize: "15px", marginBottom: "0px", marginTop: "5px" }}>*Please select the Class</p>}</FormHelperText>
              </FormControl> 

            </div>
           
            <div className='input-field state-input'>
            <FormControl className={classes.formControl}>
                <InputLabel id="class-select-label">Select your State</InputLabel>
                <Select
                  labelId="class-select-label"
                  id="class-select"
                  value={state}
                       onChange={(e) => { setState(e.target.value); setIsStateSelect(false) }}
                >
                       <MenuItem value={"Andaman and Nicobar Islands"}>Andaman and Nicobar Islands</MenuItem>
                       <MenuItem value={"Andhra Pradesh"}>Andhra Pradesh</MenuItem>
                       <MenuItem value={"Arunachal Pradesh"}>Arunachal Pradesh</MenuItem>
                       <MenuItem value={"Assam"}>Assam</MenuItem>
                       <MenuItem value={"Bihar"}>Bihar</MenuItem>
                       <MenuItem value={"Chandigarh"}>Chandigarh</MenuItem>
                       <MenuItem value={"Chhattisgarh"}>Chhattisgarh</MenuItem>
                       <MenuItem value={"Delhi"}>Delhi</MenuItem>
                       <MenuItem value={"Goa"}>Goa</MenuItem>
                       <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
                       <MenuItem value={"Haryana"}>Haryana</MenuItem>
                       <MenuItem value={"Himachal Pradesh"}>Himachal Pradesh</MenuItem>
                       <MenuItem value={"Jammu and Kashmir"}>Jammu and Kashmir</MenuItem>
                       <MenuItem value={"Jharkhand"}>Jharkhand</MenuItem>
                       <MenuItem value={"Karnataka"}>Karnataka</MenuItem>
                       <MenuItem value={"Kerala"}>Kerala</MenuItem>
                       <MenuItem value={"Ladakh"}>Ladakh</MenuItem>
                       <MenuItem value={"Lakshadweep"}>Lakshadweep</MenuItem>
                       <MenuItem value={"Madhya Pradesh"}>Madhya Pradesh</MenuItem>
                       <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
                       <MenuItem value={"Manipur"}>Manipur</MenuItem>
                       <MenuItem value={"Meghalaya"}>Meghalaya</MenuItem>
                       <MenuItem value={"Mizoram"}>Mizoram</MenuItem>
                       <MenuItem value={"Nagaland"}>Nagaland</MenuItem>
                       <MenuItem value={"Odisha"}>Odisha</MenuItem>
                       <MenuItem value={"Pondicherry"}>Pondicherry</MenuItem>
                       <MenuItem value={"Punjab"}>Punjab</MenuItem>
                       <MenuItem value={"Rajasthan"}>Rajasthan</MenuItem>
                       <MenuItem value={"Sikkim"}>Sikkim</MenuItem>
                       <MenuItem value={"Tamil Nadu"}>Tamil Nadu</MenuItem>
                       <MenuItem value={"Telangana"}>Telangana</MenuItem>
                       <MenuItem value={"Tripura"}>Tripura</MenuItem>
                       <MenuItem value={"Uttar Pradesh"}>Uttar Pradesh</MenuItem>
                       <MenuItem value={"Uttarakhand"}>Uttarakhand</MenuItem>
                       <MenuItem value={"West Bengal"}>West Bengal</MenuItem>
                </Select>
                     <FormHelperText>{isStateSelect && <p style={{ color: "red", fontSize: "15px", marginBottom: "0px", marginTop: "5px" }}>*Please select the State</p>}</FormHelperText>
              </FormControl>
            </div>
            </div>
            
            </div>
            

            <div className='CreateAccountCheckbox'>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkB}
                      onChange={(e) => setCheckB(e.target.checked)}
                      name="checkedB"
                      color="primary"
                      type="checkbox"
                    />
                  }
                  label="Subscribe to Kids Galaxy Newsletter"
                />
              </div>

            <div className='doublebuttons'>
            <Link to=''>
              <Button variant="contained" color="secondary" onClick={handlePrev} className='back-button prev-button'>Back</Button>
            </Link>   
            <Link to=''>
              <Button variant="contained" color="secondary" onClick={handleSubmit} className='back-button sub-button'>SignUp</Button>
            </Link>          
            </div>
           
          </form>
          <div className="orLogin">
                <div className="hero">
                  <span className="hr"></span>
                  <p>Or log in using</p>
                  <span className="hr"></span>
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

export default EducationalDetails
