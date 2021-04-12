import React, { useState } from "react";
import UseForm from "../SignupForms/CreateUseFrom";

import "./RequestDemo.css";

const RequestDemo1 = ({ nextStep }) => {
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(false);

  const { values, errors, handleChange, handleSubmit } = UseForm(
    login
    //  validate
  );

  function login() {
    nextStep();
  }

  return (
    <div>
      <div class="card RequestCard">
        <div class="cardContent-Request">
          <div class="title request-title">
            <h1>Request Demo</h1>
          </div>
          <form>
            <span>
              <label
                for="firstName"
                className={`text-small-uppercase-request requestLabel ${
                  errors.firstName && "is-danger"
                }`}
                style={firstName ? { transform: "translate(0,0)" } : null}
              >
                First Name
              </label>
              <input
                className={`text-body requestDemoInput ${
                  errors.firstName && "is-danger"
                }`}
                type="text"
                name="firstName"
                id="firstName"
                onChange={handleChange}
                value={values.firstName || ""}
                required
                onClick={() => setFirstName(!firstName)}
              />
              {errors.firstName && (
                <p className="help is-danger">{errors.firstName}</p>
              )}
            </span>
            <span>
              <label
                for="lastName"
                className={`text-small-uppercase-request requestLabel ${
                  errors.lastName && "is-danger"
                }`}
                style={lastName ? { transform: "translate(0,0)" } : null}
              >
                Last name
              </label>
              <input
                class={`text-body requestDemoInput ${
                  errors.lastName && "is-danger"
                }`}
                type="text"
                name="lastName"
                id="lastName"
                onChange={handleChange}
                value={values.lastName || ""}
                required
                onClick={() => setLastName(!lastName)}
              />
              {errors.lastName && (
                <p className="help is-danger">{errors.lastName}</p>
              )}
            </span>
            <span>
              <label
                for="phone"
                className={`text-small-uppercase-request requestLabel ${
                  errors.phoneNumber && "is-danger"
                }`}
                style={phoneNumber ? { transform: "translate(0,0)" } : null}
              >
                Contact Number
              </label>
              <input
                class={`text-body requestDemoInput ${
                  errors.phoneNumber && "is-danger"
                }`}
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                onChange={handleChange}
                value={values.phoneNumber || ""}
                required
                onClick={() => setPhoneNumber(!phoneNumber)}
              />
              {errors.phoneNumber && (
                <p className="help is-danger">{errors.phoneNumber}</p>
              )}
            </span>
            <span>
              <label
                for="email"
                className={`text-small-uppercase-request requestLabel ${
                  errors.email && "is-danger"
                }`}
                style={email ? { transform: "translate(0,0)" } : null}
              >
                Email
              </label>
              <input
                class={`text-body ${errors.email && "is-danger"}`}
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={values.email || ""}
                required
                onClick={() => setEmail(!email)}
              />
              {errors.email && <p className="help is-danger">{errors.email}</p>}
            </span>
            <span>
              <button
                type="button"
                class="btn btn-sm text-small-uppercase-button-request request_btn"
                id="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestDemo1;
