import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import './RequestDemo.css'
import {Link} from 'react-router-dom'

const RequestDemo2 = ({
   previousStep
}) => {

   const handleSubmit = () => {
      console.log('Helllo');
   }

   return (
      <div>
            {/* <div class="mainRight-Request col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"> */}
               <div class="card RequestCard">
                  <div class="cardContent-Request">
                  <div class="title request-title">
                     <h1>Request Demo</h1>
                  </div>
                  <form>
                        <div>
                            <span>
                                <label for="board" class="text-small-uppercase-request requestLabel req_text">Select your Board</label>
                            </span>
                        </div>
                        <div class="inputs req_inputs">
                            <div class="EducationalDetailsBoard row">
                                <div class="CBSE EducationalDetailsBoard_board req_board col-3">
                                <p>CBSE</p>
                                </div>
                                <div class="ICSE EducationalDetailsBoard_board req_board col-3">
                                <p>ICSE</p>
                                </div>
                                <div class="State EducationalDetailsBoard_board req_board col-3">
                                <p>State</p>
                                </div>
                            </div>
                        </div>
                        <span class='input-field'>
                            <label for="class" class="text-small-uppercase-request requestLabel req_text">Select your Class</label>
                            {/* <input class="text-body" id="class" name="class" type="text" required /> */}
                            <select id="class" name="class" class="EducationalDetails_class_select text-body">
                                <option disabled>Select Class</option>
                                <option>1st</option>
                                <option>2nd</option>
                                <option>3rd</option>
                                <option>4th</option>
                                <option>5th</option>
                                <option>6th</option>
                                <option>7th</option>
                                <option>8th</option>
                                <option>9th</option>
                                <option>10th</option>
                            </select>
                        </span>
                        <span class='input-field'>
                            <label for="state" class="text-small-uppercase-request requestLabel req_text">Select your State</label>
                            {/* <input class="EducationalDetails_class_select text-body" list="state" name="state" /> */}
                            <select id="state" name="state" class="EducationalDetails_class_select text-body">
                                <option disabled>Select State</option>
                                <option>Maharashtra</option>
                                <option>Goa</option>
                                <option>Kerala</option>
                                <option>Gujarat</option>
                                <option>Rajasthan</option>
                            </select>
                        </span>
                        <span>
                            <label for="city" class="text-small-uppercase-request requestLabel req_text">City</label>
                            <input class="text-body" id="city" name="city" type="text" required />
                        </span>
                            <Link to=''>
                                <span class="buttons">
                                <button type="button" class="btn btn-sm text-small-uppercase-button-request request_btn back_btn req_text req_btn_text" id="submit" onClick={previousStep}>Back</button>
                                </span>
                            </Link>
                            <Link to=''>
                                <span>
                                <button type="button" class="btn btn-sm text-small-uppercase-button-request request_btn back_btn req_text req_btn_text" id="submit" onClick={handleSubmit}>Submit</button>
                                </span>
                            </Link>
                     </form>
                  </div>
               </div>
            </div>
        //  </div>
   )
}

export default RequestDemo2
