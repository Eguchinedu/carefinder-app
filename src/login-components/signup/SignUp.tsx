import React from "react";
import { Container } from "react-bootstrap";
import LoginForm from "../login-page/login-form/LoginForm";
import PhotoSection from "../photo-section/PhotoSection";
import SignUpForm from "./signup-form/SignUpForm"

const SignUp = () => {
  return (
    <div className="login-container">
      <div className="photo-section">
        <div>
          <PhotoSection />
        </div>
      </div>
      <div className="login-form">
        <div className="login-flex">
          <SignUpForm/>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
