import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import axios from "axios";
import FormHelperText from "@material-ui/core/FormHelperText";
import "./Signup.css";

const CreateAccount = ({ nextStep, details, editDetails }) => {
  const [email, setEmail] = useState(details.email);
  const [password, setPassword] = useState(details.password);
  const [cpassword, setCPassword] = useState(details.password);
  const [msg, setMsg] = useState("");
  function handleNext(e) {
    e.preventDefault();
    emailExistence();
    if (
      validateEmail(email) === null &&
      validatePassword(password) === null &&
      checkPassword(cpassword, password) === null &&
      msg === ""
    ) {
      nextStep();
      const temp = { ...details, email: email, password: password };
      editDetails(temp);
    } else {
      if (validateEmail(email) !== null) {
        setFirst(true);
      }
      if (validatePassword(password) !== null) {
        setSecond(true);
      }
      if (checkPassword(cpassword, password) !== null) {
        setThird(true);
      }
    }
  }

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

  const [values, setValues] = React.useState({
    password: password,
    showPassword: false,
    confPassword: cpassword,
    showConfPassword: false,
  });

  function emailExistence() {
    axios
      .post("http://127.0.0.1:8000/check_email", { email: email })
      .then((res) => setMsg(res.data.msg));
  }
  function validateEmail(email) {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (email.length === 0) {
      return "Email cannot be empty";
    } else if (!pattern.test(email)) {
      return "Please enter valid email address";
    } else {
      return null;
    }
  }

  function validatePassword(password) {
    const n = password.length;
    const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
    var num = false;
    var lower = false;
    var upper = false;
    var special = false;
    for (var i = 0; i < n; i++) {
      if (password[i] >= 0 && password[i] <= 9) {
        num = true;
        continue;
      }
      if (password[i] >= "a" && password[i] <= "z") {
        lower = true;
        continue;
      }
      if (password[i] >= "A" && password[i] <= "Z") {
        upper = true;
        continue;
      }
      if (specialCharacters.includes(password[i])) {
        special = true;
        continue;
      }
    }

    var err_msg = "Please include ";
    if (!num) {
      err_msg += "one number, ";
    }
    if (!lower) {
      err_msg += "one lower case alphabet, ";
    }
    if (!upper) {
      err_msg += "one upper case alphabet, ";
    }
    if (!special) {
      err_msg += "one special character ";
    }

    if (n === 0) {
      return "Password cannot be empty";
    } else if (!num || !lower || !upper || !special) {
      return err_msg;
    } else if (n <= 7) {
      return "Password should contain atleast 8 characters";
    } else {
      return null;
    }
  }
  function checkPassword(cpassword, password) {
    if (cpassword !== password) {
      return "Passwords did not match";
    } else if (cpassword.length === 0) {
      return "Password cannot be empty";
    } else {
      return null;
    }
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowConfPassword = () => {
    setValues({ ...values, showConfPassword: !values.showConfPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  return (
    <div className="SignupCard">
      {/* <CardContent> */}
        <div className="CreateAccountTitle">
          <h1>Create Account</h1>
        </div>
        <hr class="top-hr"></hr>
        <form>
          <div className="form-inputs">
            <TextField
              id="email"
              label="Email"
              helperText={
                first &&
                (validateEmail(email) !== null ? validateEmail(email) : msg)
              }
              onBlur={() => {
                setFirst(true);
                emailExistence();
              }}
              onFocus={() => setFirst(false)}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ color: "#57bb71" }}
              className="createAccountLabel"
            />
          </div>

          <div className="form-inputs">
            <FormControl>
              <InputLabel htmlFor="password" className="createAccountLabel">
                Password
              </InputLabel>
              <Input
                id="password"
                type={values.showPassword ? "text" : "password"}
                value={password}
                onBlur={() => setSecond(true)}
                onFocus={() => setSecond(false)}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText>
                {second && validatePassword(password)}
              </FormHelperText>
            </FormControl>
          </div>

          <div className="form-inputs">
            <FormControl>
              <InputLabel htmlFor="confPassword" className="createAccountLabel">
                Confirm Password
              </InputLabel>
              <Input
                id="confPassword"
                type={values.showConfPassword ? "text" : "password"}
                value={cpassword}
                onBlur={() => setThird(true)}
                onFocus={() => setThird(false)}
                onChange={(e) => setCPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showConfPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText>
                {third && checkPassword(cpassword, password)}
              </FormHelperText>
            </FormControl>
          </div>

          <div className="next-button">
            <Link to="/personaldetails">
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                onClick={handleNext}
              >
                Next
              </Button>
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
              <Link to="/login">
                <span className="blue"> Log In</span>
              </Link>
            </p>
          </div>
        </div>
      {/* </CardContent> */}
    </div>
  );
};

export default CreateAccount;
