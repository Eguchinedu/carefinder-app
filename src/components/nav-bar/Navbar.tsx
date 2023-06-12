

import React, { useEffect, useState } from "react";
import { Container , Navbar, Nav} from "react-bootstrap";
import './Navbar.css'
import logo from '../../images/logo-one.png';
import { useNavigate, NavLink } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/login");

  return (
    <>
    
      <div className="navbar-container">
        <Container>
          <div className="nav-content">
            <div className="logo">
              <img alt="" src={logo} width="35" height="44" />
            </div>
            <div className="brand-name">
              <NavLink
                className="nav-item"
                to="/"
              >
              <h2>CareFinder</h2>
              </NavLink>
            </div>
            <div className="Login-button">
              <button className="log-btn" onClick={handleClick}>
                <i className="bi bi-gear"></i> Login
              </button>
            </div>
          </div>
        </Container>
      </div>
    
    </>
  );
};

export default NavBar;  
