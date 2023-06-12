import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../../images/logo-two.png";
import './Footer.css'

const Footer = () => {
  return (
    <>
    <Container>
      <div className="footer-container">
        <Container>
          <div className="footer-content">
            <div className="logo">
              <img alt="" src={logo} width="35" height="44" />
            </div>
            <div className="brand-name">
              <h2>CareFinder</h2>
            </div>
            <div className="footer-button">
              <button className="footer-btn active">English</button>
              <button className="footer-btn">Arabic</button>
              <button className="footer-btn">French</button>
            </div>
          </div>
        </Container>
      </div>
      <hr />
      <div className="footer-copy">
        <p> © 2023 Design by hivemax studio </p>
      </div>
    </Container>
    </>
  );
    };

export default Footer;
