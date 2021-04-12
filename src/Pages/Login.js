import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: " #57bb71",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: " #57bb71",
      },
      "& .MuiInput-underline:before": {
        borderBottomColor: " #57bb71",
      },
    },
  })(TextField);

  // const FormControlLabel = withStyles({
  //   root: {
  //     "& .MuiTypography": {
  //       fontSize: "20px"
  //   }
  // },
  // })(Checkbox);

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const [state, setState] = React.useState({
    checkedB: false,
  });

  const handleCheckbox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div class="green-bg"></div>
      <div class="white-bg"></div>

      <div class="container-fluid">
        <div class="row nav-bar">
          <div class="col-3 nav-left">
            <Link to="/">
              <img
                src="Images/navbar logo.svg"
                alt="kg-logo"
                class="nav-logo"
              />
            </Link>
          </div>
        </div>
      </div>

      <div class="row container-fluid mainContent">
        <div class="mainLeftLogin col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div class="mainLeftContentLogin d-md-none d-lg-block">
            <img src="Images/Login Illustration.svg" alt="" />
            <p>
              To get exciting discounts, offers, free study resources, special
              programs from Kids Galaxy
              <span class="blue"> Sign Up here.</span>
            </p>
          </div>
        </div>
        <div class="middleLineLogin d-md-none d-lg-block"></div>
        <div class="mainRightLogin col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          {/* <Card className="LoginCard">
            <CardContent> */}
          <div class="LoginTitle">
            <h1>Log In</h1>
          </div>
          <hr class="top-hr"></hr>
          <form>
            <div className="form-inputs">
              <CssTextField
                id="email"
                label="Email"
                style={{ color: "#57bb71" }}
              />
            </div>

            <div className="form-inputs">
              <FormControl>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>

            <div class="checkbox">
              <div className="LoginCheckbox">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedB}
                      onChange={handleCheckbox}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Remember Me"
                />
              </div>
              <p class="blue forget-password">
                Forgot Password
              </p>
            </div>

            <div className="next-button">
              <Link to="">
                <Button variant="contained" color="secondary" type="submit">
                  LogIn
                </Button>
              </Link>
            </div>
          </form>

          <div class="orLogin">
            <div class="hero">
              <span class="hr"></span>
              <p>Or log in using</p>
              <span class="hr"></span>
            </div>
            <div class="faceG">
              <img src="Images/Facebook.svg" alt="" />
              <img src="Images/Gmail Icon.svg" alt="" />
              <p>
                New User?
                <a href="{}">
                  <Link to="/signup">
                    <span class="blue"> Sign Up</span>
                  </Link>
                </a>
              </p>
            </div>
          </div>
          {/* </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
