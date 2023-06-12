import React from "react";
import { Container } from "react-bootstrap";
import PhotoSection from "../photo-section/PhotoSection";
import LoginForm from "./login-form/LoginForm";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="photo-section">
        <div>
         <PhotoSection/>
        </div>
      </div>
      <div className="login-form">
        <div className="login-flex">
        <LoginForm/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
