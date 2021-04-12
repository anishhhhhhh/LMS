import React, { useState} from "react";
import { Link } from "react-router-dom";


import "./Navbar.css";
const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  
  return (
    <div class="container-fluid">
      <div class="row nav-bar">
        <div class="col-3 nav-left">
          <Link to="/">
            <img src="images/logo.png" alt="kg-logo" class="nav-logo" />
          </Link>
        </div>
        <div class="col d-none d-lg-block nav-center">
          <a href="{}" class="label-1">
            Courses
          </a>
          <a href="{}" class="label-2">
            What We Do
          </a>
          <a href="{}" class="label-3">
            Who We Are
          </a>
        </div>
        <i class="material-icons">search</i>
        <i class="material-icons person-icon">person</i>
        <div class="col-3 nav-right">
          <Link to='/login'>
            <a href="{}" class="sign-in">
            Sign In
            </a>
          </Link>
         
          <Link to="/RequestDemo">
            <a href="{}" class="request-demo">
              Request Demo
            </a>
          </Link>
        </div>
        <div id="nav-ham" className={` col-1 d-lg-none ${hamburger && "Diam"}`}
        onClick={() => setHamburger(!hamburger)}>
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </div>
      </div>
      <div className={`hiddenNav ${hamburger && "hamburgerOpen"}`}>
        <nav className="hiddenNavSearch-user">
          <ul className="hamburger-menu">
            <li className="hamburger-menu-item">
              <a href="/signup" className="hm-hover1">
                Sign In
              </a>
            </li>
            <li className="hamburger-menu-item">
              <a href="{}" className="hm-hover2">
                Courses
              </a>
            </li>
            <li className="hamburger-menu-item hm-hover3">
              <a href="{}" className="hm-hover3">
                Who We Are
              </a>
            </li>
            <li className="hamburger-menu-item hm-hover4">
              <a href="{}" className="hm-hover4">
                What We Do
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
