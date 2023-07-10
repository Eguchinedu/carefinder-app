

import React, { useEffect, useState } from "react";
import { Container , Navbar, Nav} from "react-bootstrap";
import './Navbar.css'
import logo from '../../images/logo-one.png';
import { useNavigate, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import {signOut} from 'firebase/auth'
import { auth } from "../../config/config";
import { logout } from "../Auth/authSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/login");
  const {user} = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch();



  const handleLogOut = async () => {
    await signOut(auth)
    dispatch(logout());
    alert("logged out")
  }
  


  return (
    <>
      <div className="navbar-container">
        <Container>
          <div className="nav-content">
            <div className="logo">
              <img alt="" src={logo} width="35" height="44" />
            </div>
            <div className="brand-name">
              <NavLink className="nav-item" to="/">
                <h2>CareFinder</h2>
              </NavLink>
            </div>
            <div className="Login-button">
              {user ? (
                <button className="log-btn" onClick={handleLogOut}>
                  <i className="bi bi-gear"></i> Logout
                </button>
              ) : (
                <button className="log-btn" onClick={handleClick}>
                  <i className="bi bi-gear"></i> Login
                </button>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NavBar;  
